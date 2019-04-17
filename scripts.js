
var divTransitionDelay = 1250;

$(document).ready(function () {
    $(window).on("load", function () {
        $('.load-screen').addClass('move-load-screen');
        
    });
    
});


//---Dealing with states //Forward and Back---///

window.onpopstate = function (event) {
    var lastState = JSON.stringify(event.state);
    var goToState = JSON.parse(lastState);
            
    if(goToState){
    
        if (goToState.state == "index.html/about") {
            addDiv(aboutMe);
            getTreeHouseStats();
        } 
        if (goToState.state == "index.html/projects") {
            addDiv(projects);
        }
        if (goToState.state == "index.html/demo") {
            addDiv(demo);
        }
        if (goToState.state == "index.html/contact") {
            addDiv(contact);
        }
        
    } else {
        addDiv(aboutMe);
        getTreeHouseStats();
    }
};


function addDiv(html){
        document.getElementById("replace").innerHTML = html;
   }
function removeDiv(){
    $('.newDiv').removeClass('removeDiv').addClass('slideDiv');
}

$('#aboutButton').click(function(){
    if(btnsClicked.aboutBtn == false){
    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue( function (next) {
        addDiv(aboutMe);
        getTreeHouseStats();
        $('.newDiv').addClass('removeDiv');
        next();
    });
     history.pushState({
        state: 'index.html/about'
     }, 'title', 'index.html');
     btnsClicked.demoBtn = false;
     btnsClicked.projectsBtn = false;
     btnsClicked.contactBtn = false;
     btnsClicked.aboutBtn = true;
    }
 });


$('#projectsButton').click(function(){
    if (btnsClicked.projectsBtn == false){
    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue(function (next) {
        addDiv(projects);
        $('.newDiv').addClass('removeDiv');
        next();
    });
     history.pushState({
         state: 'index.html/projects'
     }, 'title', 'index.html');
    btnsClicked.demoBtn = false;
    btnsClicked.projectsBtn = true;
    btnsClicked.contactBtn = false;
    btnsClicked.aboutBtn = false;
    }
});

$('#contactButton').click(function(){
    if (btnsClicked.contactBtn == false){
    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue(function (next) {
        addDiv(contact);
        $('.newDiv').addClass('removeDiv');
        next();
    });
     history.pushState({
         state: 'index.html/contact'
     }, 'title', 'index.html');
    btnsClicked.demoBtn = false;
    btnsClicked.projectsBtn = false;
    btnsClicked.contactBtn = true;
    btnsClicked.aboutBtn = false;
    }
});

$('#demoButton').click(function(){
    if(btnsClicked.demoBtn == false){
   window.location.href = 'https://justincrawfordonline.com/magic-touch/index.html';
    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue(function (next) {
        //addDiv(demo);
        //$('.newDiv').addClass('removeDiv');
        //next();
    });
     history.pushState({
         state: 'index.html/demo'
     }, 'title', 'index.html');
    btnsClicked.demoBtn = true;
    btnsClicked.projectsBtn = false;
    btnsClicked.contactBtn = false;
    btnsClicked.aboutBtn = false;
    }
});

/////----------Model Pop Up ----------------////////////
$('body').magnificPopup({
    delegate: 'a.open-popup-link',
    type: 'inline',
    closeOnContentClick: false,
    closeBtnInside: true,
    removalDelay: 300,
});


//---------------Change header nav on scroll -------////

$(window).scroll(function () {
    if(pageYOffset >= 59){
        $('.icons-footer').css("font-size", "0em");
        $('#quote-of-day').hide("fade");
        $('#quote-wrapper').hide("fade");
        $('.cartoon-badge').addClass('shrink-header');
        $('.item2').addClass('item2-scrolled');
        $('.item3').addClass('item3-scrolled');
        $('.item4').addClass('item4-scrolled');
        $('.nav-bar-top').addClass('nav-bar-scrolled');
        $("header").addClass('header-scrolled');
    } else if (pageYOffset <= 25) {
        $('.icons-footer').css("font-size", "2em");
        $('.cartoon-badge').removeClass('shrink-header');
        $('.item2').removeClass('item2-scrolled');
        $('.item3').removeClass('item3-scrolled');
        $('.item4').removeClass('item4-scrolled');
        $('.nav-bar-top').removeClass('nav-bar-scrolled');
        $("header").removeClass('header-scrolled');
    }
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('.icons-footer').css("font-size", "2em");
        
        
    }
});
//-----Quote of the Day--------///
///---get inspirational quote--------//
function getQuote(){
    var quote;
    var quoteLength;
   //conect to api for quote if no cookie----------------////////////
    if (!checkCookie("inspireQuote")) {
       
    jQuery.get("http://quotes.rest/qod.json?category=inspire", function(data){
            quote = JSON.stringify(data.contents.quotes[0].quote);
            quoteLength = JSON.stringify(data.contents.quotes[0].length);
            document.getElementById('quote-of-day').innerHTML = data.contents.quotes[0].quote;
            console.log("api " + quote);
             
          ///////// add quote to the document ///////////
            if (data.contents.quotes[0].length >= 100) {
                $('#quote-wrapper').css("font-size", "0.7em");
            } if (data.contents.quotes[0].length >= 200) {
                $('#quote-wrapper').css("font-size", "0.5em");
            }
         var cleanQuote = quote.replace(";", ",");
         setCookie("inspireQuote", cleanQuote, .5);
         setCookie('quoteLength', JSON.parse(quoteLength), .5);
         }
        
        );
    
    } else {
        //// Use the Quote in the cookie /////////////
        var cookieQuote = getCookie("inspireQuote");
        var cookieQuoteLength = getCookie("quoteLength");
        console.log("cookie " + cookieQuote);
        
        document.getElementById('quote-of-day').innerHTML = cookieQuote;
        if (cookieQuoteLength >= 100) {
            $('#quote-wrapper').css("font-size", "0.7em");
        }
        if (cookieQuoteLength >= 200) {
            $('#quote-wrapper').css("font-size", "0.5em");
        }
        
    }
}
getQuote();
//-----display quote of the day --- //
//---- toggles by pressing cartoon badge
//---- cloud or quote----------------//

$('.cartoon-badge').click(function(){
    $('#quote-wrapper').toggle("fade");
    $('#quote-of-day').toggle("fade");
});
$('#quote-wrapper').click(function (){
    $('#quote-wrapper').hide("puff");
    $('#quote-of-day').hide();
});



///------- puff animation after click ------////

$(document).on('mousedown', function () {
    $('#empty-div').removeClass('puff');
    
    $(document).on('mouseup', function (event) {
      var xPos = event.clientX - 55;
      var yPos = event.clientY - 55;
      $('#empty-div').css("top", yPos);
      $('#empty-div').css("left", xPos);
      $('#empty-div').show();
      $('#empty-div').addClass('puff');
            
    });
});

function getTreeHouseStats(){
  //------ Team Treehouse Stats ----------/////

    if (!checkCookie("badge")) {
        
    
        jQuery.get("https://teamtreehouse.com/justincrawford2003.json", function (data) {
            var totalNumOfBadges = data.badges.length;
            var lastThreeBadges = [];
            var badgeNames = [];
            for (var i = totalNumOfBadges - 3; i < totalNumOfBadges; i++) {
                lastThreeBadges.push(data.badges[i].icon_url);
                badgeNames.push(data.badges[i].name);
            }
            var badgeCookie = JSON.stringify(lastThreeBadges);
            var badgeCookieTitles = JSON.stringify(badgeNames);

            setCookie("badge", badgeCookie, 1);
            setCookie("badgeTitle", badgeCookieTitles, 1);

            $('.badge-1-title').text(badgeNames[0]);
            $('.badge-2-title').text(badgeNames[1]);
            $('.badge-3-title').text(badgeNames[2]);
            $('.badge-1').css("background-image", "url(" + lastThreeBadges[0] + ")");
            $('.badge-2').css("background-image", "url(" + lastThreeBadges[1] + ")");
            $('.badge-3').css("background-image", "url(" + lastThreeBadges[2] + ")");
        });
   } else {
       var badgeFromCookie = JSON.parse(getCookie("badge"));
       var badgeNameFromCookie = JSON.parse(getCookie("badgeTitle"));
       $('.badge-1-title').text(badgeNameFromCookie[0]);
       $('.badge-2-title').text(badgeNameFromCookie[1]);
       $('.badge-3-title').text(badgeNameFromCookie[2]);
       $('.badge-1').css("background-image", "url(" + badgeFromCookie[0] + ")");
       $('.badge-2').css("background-image", "url(" + badgeFromCookie[1] + ")");
       $('.badge-3').css("background-image", "url(" + badgeFromCookie[2] + ")");
   }
}


//-----_Coookieeee Functions! ----------//

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var hasCookie = getCookie(cname);
    if (hasCookie != "") {
        console.log("You have a cookie");
        return true;
    } else {
       return false;
    }
   
}
////-------------end of Cookie functions---------//////////////////////

//// ------------- PAGES ----------------////////////////////

let btnsClicked = {
    aboutBtn: true,
    projectsBtn: false,
    demoBtn: false,
    contactBtn: false
}