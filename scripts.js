const divTransitionDelay = 500;

function addDiv(html){
        document.getElementById("replace").innerHTML = html;
   }
function removeDiv(){
    $('.newDiv').removeClass('removeDiv').addClass('slideDiv');
}

$('#aboutButton').click(function(){
    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue( function (next) {
        addDiv(aboutMe);
        $('.newDiv').addClass('removeDiv');
        next();
    });
  getTreeHouseStats();
 });

$('#projectsButton').click(function(){

    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue(function (next) {
        addDiv(projects);
        $('.newDiv').addClass('removeDiv');
        next();
    });
});

$('#contactButton').click(function(){

    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue(function (next) {
        addDiv(contact);
        $('.newDiv').addClass('removeDiv');
        next();
    });
});

$('#demoButton').click(function(){
   
    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue(function (next) {
        addDiv(demo);
        $('.newDiv').addClass('removeDiv');
        next();
    });
});

//---------------Change header nav on scroll -------////

$(window).scroll(function () {
    if(pageYOffset >= 99){
        $('#quote-of-day').hide("fade");
        $('#quote-wrapper').hide("fade");
        $('.cartoon-badge').addClass('shrink-header');
        $('.item2').addClass('item2-scrolled');
        $('.item3').addClass('item3-scrolled');
        $('.item4').addClass('item4-scrolled');
        $('.nav-bar-top').addClass('nav-bar-scrolled');
        $("header").addClass('header-scrolled');
    } else{
        $('.cartoon-badge').removeClass('shrink-header');
        $('.item2').removeClass('item2-scrolled');
        $('.item3').removeClass('item3-scrolled');
        $('.item4').removeClass('item4-scrolled');
        $('.nav-bar-top').removeClass('nav-bar-scrolled');
        $("header").removeClass('header-scrolled');
    }
});
//-----Quote of the Day--------///
///---get inspirational quote--------//
jQuery.get("http://quotes.rest/qod.json?category=inspire", function(data){
        console.log(data.contents.quotes[0].quote);
        console.log(data.contents.quotes[0].length);
        document.getElementById('quote-of-day').innerHTML = data.contents.quotes[0].quote;
        if (data.contents.quotes[0].length >= 100) {
            $('#quote-wrapper').css("font-size", "0.7em");
        } if (data.contents.quotes[0].length >= 200) {
            $('#quote-wrapper').css("font-size", "0.5em");
        }
    }
    );
//-----display quote of the day --- //
//---- toggles by pressing cartoon badge
//---- cloud or quote----------------//

$('.cartoon-badge').click(function(){
    $('#quote-wrapper').toggle("fade");
    $('#quote-of-day').toggle("fade");
});
$('#quote-wrapper').click(function (){
    $('#quote-wrapper').hide("puff");
    $('#quote-of-day').hide( "puff");
});



///------- puff animation after click ------////

$(document).on('mousedown', function () {
    $('#empty-div').removeClass('puff');
    $(document).on('mouseup', function (event) {
      let xPos = event.clientX - 55;
      let yPos = event.clientY -55;
      $('#empty-div').css("top", yPos);
      $('#empty-div').css("left", xPos);
      $('#empty-div').addClass('puff');
    });
});

function getTreeHouseStats(){
  //------ Team Treehouse Stats ----------/////
  jQuery.get("https://teamtreehouse.com/justincrawford2003.json", function (data) {
      var totalNumOfBadges = data.badges.length;
      let lastThreeBadges = [];
      let badgeNames = [];
      for (let i = totalNumOfBadges - 3; i < totalNumOfBadges; i++) {
          lastThreeBadges.push(data.badges[i].icon_url);
          badgeNames.push(data.badges[i].name);
      }
      
      $('.badge-1-title').text(badgeNames[0]);
      $('.badge-2-title').text(badgeNames[1]);
      $('.badge-3-title').text(badgeNames[2]);
      $('.badge-1').css("background-image", "url(" + lastThreeBadges[0] + ")");
      $('.badge-2').css("background-image", "url(" + lastThreeBadges[1] + ")");
      $('.badge-3').css("background-image", "url(" + lastThreeBadges[2] + ")");
  });
}

getTreeHouseStats();