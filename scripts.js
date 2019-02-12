const divTransitionDelay = 500;

function addDiv(html){
        document.getElementById("replace").innerHTML = html;
   };
function removeDiv(){
    $('.newDiv').removeClass('removeDiv').addClass('slideDiv');
}

$('#aboutButton').click(function(){
    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue( function (next) {
        addDiv(aboutMe);
        $('.newDiv').addClass('removeDiv');
        next();
    })
 });

$('#projectsButton').click(function(){

    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue(function (next) {
        addDiv(projects);
        $('.newDiv').addClass('removeDiv');
        next();
    })

    
});

$('#contactButton').click(function(){

    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue(function (next) {
        addDiv(contact);
        $('.newDiv').addClass('removeDiv');
        next();
    })
});

$('#demoButton').click(function(){
   
    $('.newDiv').removeClass('removeDiv').addClass('slideDiv').delay(divTransitionDelay).queue(function (next) {
        addDiv(demo);
        $('.newDiv').addClass('removeDiv');
        next();
    })
});

$(window).scroll(function () {
    if(pageYOffset >= 99){
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