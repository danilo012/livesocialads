(function playGarden(){
  if(typeof $ !== "function" || typeof _ !== "function"){
    setTimeout(playGarden, 1000);
    return;
  }

var startGarden = {
  level: 0,
  progress: 0,
  next: 4,
  harvested: 0,
  seeds: [],
  plots: [
    [{
      t: 0,
      l: 0
    }, {
      t: 0,
      l: 0
    }],
    [{
      t: 0,
      l: 0
    }, {
      t: 0,
      l: 0
    }]
  ]
};
var saved;
if (typeof localStorage !== 'undefined') {
  saved = localStorage.getItem('ogfruit-garden');
  if (saved) {
    saved = $.parseJSON(saved);
    if (saved) {
      startGarden = saved;
    }
  }
}

(function(myGarden) {
  var plotClass = ['plant'];
  var harvest = 8;

  function save() {
    if (typeof(localStorage) !== "undefined") {
      localStorage.setItem("ogfruit-garden", JSON.stringify(myGarden));
    }
  }

  function harvestall(){
    if($('.harvest').length >= 5){
      $('#incg-harvestall').empty().append($('<div>').addClass('btn btn-primary btn-block').text('Harvest All').on('click', function(){
        $(this).remove();
        $('.harvest').click();
      }))
    }else{
      $('#incg-harvestall').empty()
    }
  }

  function addGarden() {
    if (myGarden.plots[0].length < myGarden.plots.length) {
      myGarden.plots[0].push({
        t: 0,
        l: 0
      });
    } else {
      var found = false;
      //first row shorter than row 0
      myGarden.plots.slice(1).forEach(function(p, i) {
          if (found) return;
          if (p.length < myGarden.plots[0].length) {
            found = true;
            p.push({
              t: 0,
              l: 0
            })
          }
        })
        //add new row
      if (!found)
        myGarden.plots.push([{
          t: 0,
          l: 0
        }]);
    }
  }

  function levelUp() {
    myGarden.level += 1;
    $('#incg-level').text(myGarden.level);

    if (myGarden.level % 4 == 0 || myGarden.level % 10 == 0) {
      addGarden();
      drawGarden(myGarden)
    }
    save();
  }

  function addProgress(add) {
    if (add) {
      myGarden.progress += add;
    }

    if (myGarden.progress >= myGarden.next) {
      levelUp();
      myGarden.progress = 0;
      myGarden.next *= 1.15;
    }

    $('#incg-progress').css({
      width: ((myGarden.progress / myGarden.next) * 100) + '%'
    })
    save();
  };

  function addHarvest(add) {
    add = Math.ceil(Math.random() * add);
    $({
      h: myGarden.harvested
    }).animate({
      h: myGarden.harvested += add
    }, {
      duration: 1000,
      step: function() {
        $('#incg-harvested').text(Math.ceil(this.h));
      }
    })
    myGarden.harvested += add;
    save();
  };

  function plotclick() {
    harvestall();
    var row = $(this).data('row');
    var col = $(this).data('col');
    var plot = myGarden.plots[row][col];

    if (plot.l > harvest) {
      myGarden.plots[row][col].l = 0;
      addHarvest(1000);
      $(this).removeClass('harvest').removeClass('plant')
      addProgress(Math.ceil(myGarden.level / 3));
      $(this).append($('<div>').addClass('point-up').text('+' + Math.ceil(myGarden.level / 3)).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).remove();
      }))

      save();
      return;
    }

    if(plot.l == 0){
      $(this).addClass('growing')
    }

    addProgress(1);
    $(this).addClass(plotClass[plot.t]).append($('<div>').addClass('point-up').text('+1').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).remove();
    }))

    if (plot.l == 0) {
      myGarden.plots[row][col].l = 1;
    }
    save();
  }

  var growTimeout

  function grow() {
    $('#header-game .plot-hold').each(function(i, v) {
      var row = $(v).find('.plot').data('row');
      var col = $(v).find('.plot').data('col');
      var plot = myGarden.plots[row][col];
      if (plot.l > harvest) {
        $(v).find('.plot').addClass('harvest')
        return;
      }
      if (plot.l > 0 && plot.l <= harvest)
        setTimeout(function() {
          plot.l += 1;
          if (plot.l > harvest) {
            $(v).find('.plot').addClass('harvest')
          }

          addProgress(1);
          $(v).append($('<div>').addClass('point-up').css({color: '#01FF70'}).text('+1').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            myGarden.plots[row][col] = plot;
            $(this).remove();
          }))

        harvestall();
        }, Math.random() * 1000 + 1000);
    });

    save();
    if (growTimeout) clearTimeout(growTimeout);
    growTimeout = setTimeout(grow, 15000);
  }

  window.drawGarden = function() {
    var garden = $('#header-game #garden').empty();
    myGarden.plots.forEach(function(row, r) {
      var rowHold = $('<div>').addClass('plot-row');

      row.forEach(function(p, c) {
        var plot = $('<button>').addClass('plot').on('click', plotclick).data('row', r).data('col', c)
        if (row[c].l == 0) {
          rowHold.append($('<div>').addClass('plot-hold').append(plot));
        } else if (row[c].l <= harvest) {
          plot.addClass('plant')
          rowHold.append($('<div>').addClass('plot-hold').append(plot));
        } else if (row[c].l > harvest) {
          plot.removeClass('plant').removeClass('growing').addClass('harvest')
          rowHold.append($('<div>').addClass('plot-hold').append(plot));
        }
      })

      garden.append(rowHold)
    })

    $('#incg-level').text(myGarden.level);
    $('#incg-progress').css({
      width: ((myGarden.progress / myGarden.next) * 100) + '%'
    })
    $('#incg-harvested').text(myGarden.harvested);
    setTimeout(grow, 1000);
  }

  if(saved){
    $('#header-title').hide();
    $('#header-game').show();
    window.drawGarden();
    harvestall();
  }else{
    $('#subtitle-wrap').show();
    window.drawGarden();
  }
})(startGarden);

})();