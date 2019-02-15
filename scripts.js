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

$(window).scroll(function () {
    if(pageYOffset >= 99){
        $('#quote-of-day').hide("explode");
        $('#quote-wrapper').hide("explode");
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

$('.cartoon-badge').click(function(){
    $('#quote-wrapper').toggle("explode");
   $('#quote-of-day').toggle("explode");
  
});
 $('#quote-of-day').click(function () {
    
     $('#quote-wrapper').hide("explode");
     $('#quote-of-day').hide("explode");
            
 });
  $('#quote-wrapper').click(function (){
    $('#quote-wrapper').hide("explode");
    $('#quote-of-day').hide("explode");
  });