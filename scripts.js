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
