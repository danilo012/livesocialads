
const tl = gsap.timeline({defaults:{ease: 'power1.out'}});
tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y:"-100%", duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.big-text-box', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button3', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button4', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('footer', {opacity: 0}, {opacity: 1, duration: 1});

var links = [ //128
 
]

var ads1 = [ //167
    
]

var balance = 0;
localStorage.getItem("tickets");
if (localStorage.getItem("tickets") == null) {
    balance = balance + 0.1;
    localStorage.setItem("tickets", balance);
}
else {
    var lcl = localStorage.getItem("tickets");
    balance = JSON.parse(lcl);
}
var add_tickets = document.getElementById("ticket_num");
add_tickets.innerHTML = balance;

function remove_section() {
    var element = document.getElementById('home-section');
    element.parentNode.removeChild(element);
}
function remove_nav() {
    var element = document.getElementById('nav');
    element.parentNode.removeChild(element);
}
function remove_footer() {
    var element = document.getElementById('footer');
    element.parentNode.removeChild(element);
}

function open_tickets() {
    remove_section();

    remove_footer();
    var add = document.getElementById("add-section");
    random_num = Math.floor((Math.random() * 167) + 0);
    ad1 = ads1[random_num];
    ad2 = ads1[random_num + 1];
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">Golden coins</a></h1><div id="earn_balance">' + balance + '</div><br><br>' + ad1 + '<br><br><br><button class="extract-button" onclick="extract_ticket()"></button><br><br><div><h2 id="result"></h2></div><div><b id="win-or-lose"></b></div><br><br><br><h1>NO DATA</h1><br> <br>' + ad2 + '<br><br></center>';
}

function open_freebox() {
    remove_section();
    var add = document.getElementById("add-section");
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href=". /index.html">GOLDEN COINS </a></h1><br><br><iframe src="https://free-mystery.echozone.repl.co/" width="100%" height="100%" style="background-color: #b46b59;"></iframe></center>';
    if (balance == 0) {
        result.innerHTML = 'You have no tickets.'
    }
    else {
        balance = balance - 0.1;
        localStorage.setItem("tickets", balance);
        tickets.innerHTML = balance;
        }
}

function open_freespin()
{
    remove_section();
    var add = document.getElementById("add-section");
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href=". /index.html">GOLDEN COINS </a></h1><br><br><iframe src="https://free-spin.echozone.repl.co/" width="100%" height="100%" style="background-color: #b46b59;"></iframe></center>';
    if (balance == 0) {
        result.innerHTML = 'You have no tickets, purchase or refill atleast 200 goldencoins to access this feature.'
    }
    else {
        balance = balance - 2;
        localStorage.setItem("tickets", balance);
        tickets.innerHTML = balance;
        }
}

function open_reward() {
    remove_section();
    var add = document.getElementById("add-section");
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href=". /index.html">GOLDEN COINS </a></h1><br><br><iframe src="./indexbal.html" width="100%" height="900" style="background-color: #b46b59;"></iframe></center>';
if (balance == 0) {
add.innerHTML = 'You have no tickets, purchase or refill atleast 200 goldencoins to access this feature.'
}

else {

balance = balance - 0.1;

localStorage.setItem("tickets", balance);

tickets.innerHTML = balance;

}

}

function open_about() {
    remove_section();
    remove_nav();
    var add = document.getElementById("add-section");
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">GOLDEN COINS </a></h1><br><br><iframe src="./README.md" width="100%" height="900" style="background-color: #b46b59;"></iframe></center>';
  window.open(link);
    open_about();
}
function open_earn() {
    remove_section();
    
    var add = document.getElementById("add-section");
    random_num = Math.floor((Math.random() * 128) + 0);
    link = links[random_num];
    ad1 = ads1[random_num];
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">kindly wait and monitor your golden coins in progress</a></h1><div id="earn_balance">' + balance + '</div><iframe width="760" height="415" src="https://www.youtube.com/embed/videoseries?list=PLYETUL7CctPfbXoEX5QM2ENP1NO5tXfBz&index=' + random_num + '&autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>' + ad1 + '<button class="home-button" style="top: 85%;"onclick="back_home()">Stop Earning</button></center>';
    window.open(link);
    tickets();
}

function tickets() {
    var add = document.getElementById("earn_balance");
    balance = balance + 70830;
    localStorage.setItem("tickets", balance);
    add.innerHTML = balance;
    setTimeout(() => {tickets();}, 15000);
}
function purchase_tickets11() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_tickets11.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets1() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_tickets1.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets2() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
  window.open('purchase_tickets2.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets3() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    window.open('purchase_tickets3.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets4() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    window.open('purchase_tickets4.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets5() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    window.open('purchase_tickets5.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets6() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    window.open('purchase_tickets6.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets12() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_tickets12.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets13() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_tickets13.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets14() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_tickets14.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_ticketsA() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_ticketsA.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_ticketsB() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_ticketsB.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_ticketsC() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_ticketsC.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_ticketsD() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_ticketsD.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}

function extract_ticket() { //extract 1 ticket

var add = document.getElementById("add-section");

add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href=". /index.html">GOLDEN COINS </a></h1><br><br><iframe src="./withdrawal.html" width="100%" height="100%" style="background-color: #b46b59;"></iframe></center>';
if (balance == 0) {
add.innerHTML = 'You have no tickets, purchase or refill atleast 200 goldencoins to access this feature.'
}

else {

balance = balance - 0.1;

localStorage.setItem("tickets", balance);

tickets.innerHTML = balance;

}

}


function open_chatbox() {
    remove_section();
    remove_nav();
    var add = document.getElementById("add-section");
  random_num = Math.floor((Math.random() * 128) + 0);
    link = links[random_num];
    ad1 = ads1[random_num];
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">kindly post your message, create topics and monitor your golden coins in progress</a></h1><div id="earn_balance">' + balance + '</div><iframe width="560" height="690" style="background-color: white;" src="https://advancepartner.netlify.app/&index=' + random_num +
'&autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br><iframe src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTT_adWrpaz_L-auRwBTKhHgvQ-eUipcc2SZErWO7klNNnIVxB2edhdY5XWkR7VEoRdVR6iECjMyf1TNwC3uosguKb9QJz-IKPPvLO-JEhMNuM3R8jKSrwF8iRTY01psV_0tYg9heRxK2fvkZD1vYxYeoJj39zJCYgYIK4pGmMC8PYuPnEvQ1xKzRhAKwc/s320/IMG_20230626_162345.jpg" allow="microphone; camera; fullscreen; autoplay; display-capture" style="width: 90%; height: 690; overflow: hidden; border: 0px none; background-color: transparent;"></iframe><br><br>' + ad1 + '<button class="home-button" style="top: 1% ;" onclick="back_home()">Stop Earning</button></center>';
  if (balance == 1) {
add.innerHTML = 'You have no tickets, please contact your team leader to access this feature.'
  }
  window.open(link);
    tickets();
} 
function open_chatbox1() {
    remove_section();
    remove_nav();
    var add = document.getElementById("add-section");
  random_num = Math.floor((Math.random() * 128) + 0);
    link = links[random_num];
    ad1 = ads1[random_num];
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">kindly post your message, create topics and monitor your golden coins in progress</a></h1><div id="earn_balance">' + balance + '</div><iframe width="560" height="690" style="background-color: white;" src="https://timeclack-ph.netlify.app/home&index=' + random_num +
'&autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br><iframe src="https://my.cbox.ws/HIGHLIGHTSRADIO" allow="microphone; camera; fullscreen; autoplay; display-capture" style="width: 560; height: 690; overflow: hidden; border: 0px none; background-color: transparent;"></iframe><br><br>' + ad1 + '<button class="home-button" style="top: 1% ;" onclick="back_home()">Stop Earning</button></center>';
  if (balance == 0) {
add.innerHTML = 'You have no tickets, purchase or refill atleast 200 goldencoins to access this feature.'
  }
 else {

balance = balance - 1;

localStorage.setItem("tickets", balance);

tickets.innerHTML = balance;

 }window.open(link);
    tickets()
}


function back_home() {
    location.reload();
}

