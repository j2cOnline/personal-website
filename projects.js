const projects = `
                  <div class="newDiv main-body body">
<h1>Graphics and Game Design</h1>
<h3>My primary focus has been gaming software in the class 2 enviroment. From electronic bingo in various flavors to skill base slot machine software.</h3>
<div class="projects-grid-container">
   
    <div class="projects-grid-item">
        <h2>Bingo</h2>
        <a href="#24-bingo" class="open-popup-link"><img src="img/projects/wizard24_1.jpg" alt=""></a>
        <p>Bonanza style electronic bingo games.</p>
        <div id="24-bingo" class="white-popup mfp-hide">
            <h2>Bonanza style games draw 24 numbers before play. Specifically 5 numbers per column except the middle, which is limited to 4.</h2>
            <img src="img/projects/wizard24_1.jpg" alt="">
            <img src="img/projects/ATW_5.jpg" alt="">
            <img src="img/projects/SBB_1.jpg" alt="">
            <img src="img/projects/SBB_6.jpg" alt="">
        </div>
    </div>
    <div class="projects-grid-item">
        <h2>Slot Suite</h2>
            <a href="#slot-suite" class="open-popup-link"><img src="img/projects/magicTouch2.jpg" alt=""></a>
            <p>Slot machine game suite including skill based options.</p>
        <div id="slot-suite" class="white-popup mfp-hide">
             <h1>Slot Machine Suite</h1>
             <h3>
                First step into slot machine gaming, this is the latest ongoing project that is growing in east coast markets that
                require a skill based option. Check out my <span><i class="fab fa-youtube"></i></span> channel for a demo!</h3>
             <img src="img/projects/cabinetBanner.jpg" alt="">
             
             <img src="img/projects/crankExample.jpg" alt="">
             <img src="img/projects/magicTouch2.jpg" alt="">
             <img src="img/projects/cherryExample.jpg" alt="">
             <img src="img/projects/tabFeverExample.jpg" alt="">
        </div>
    </div>
    <div class="projects-grid-item">
        <h2>You Pick Style</h2>
        <a href="#you-pick" class="open-popup-link"><img src="img/projects/Beach_IntroScreen_UNIVERSAL.jpg" alt=""></a>
        <p>Bonanza style bingo with custom patterns.</p>
        <div id="you-pick" class="white-popup mfp-hide">
            <h2>24# bingo with the ability to "make your own pattern"</h2>
            
            <img src="img/projects/bingoPI1.jpg" alt="">
            <h3>After adding the feature into a 24# game, it became very popular. The obvious next step was to make a game centered around that feature.</h3>
            <img src="img/projects/beachParty1.jpg" alt="">
            <img src="img/projects/picNWin_3.jpg" alt="">
            
        </div>
    </div>
     
    <div class="projects-grid-item">
        <h2>Live Call</h2>
        <a href="#live-call" class="open-popup-link"><img src="img/projects/lcb2intro.jpg" alt=""></a>
        <p>A blend between session bingo and electronic bonanza style bingo</p>
        <div id="live-call" class="white-popup mfp-hide">
            <h2>Live call bingo is the most "jurisdiction friendly" electronic bingo option I've worked on.</h2>
            <h3>The games have many settings for operators like auto daub and forcing the player to call a bingo. The game is connected to a physical bingo ball blower. Contact me for more game specifics.</h3>
            <img src="img/projects/LiveCall2_1.jpg" alt="">
            <img src="img/projects/LiveCall2_2.jpg" alt="">
            <h2>The first version of Live Call Bingo</h2>
            <h3>The major difference between the version is that the sequel has multiple consolation jackpots.</h3> 
            <img src="img/projects/lcb1.jpg" alt="">
            <img src="img/projects/lcb2.jpg" alt="">
        
        </div>
    </div>
    <div class="projects-grid-item">
        <h2>Logos</h2>
        <a href="#logos" class="open-popup-link"><img src="img/projects/Logo_SweetestThing.jpg" alt=""></a>
        <p>Product and business logos.</p>
        <div id="logos" class="white-popup mfp-hide">
            
            <img src="img/projects/Logo_SweetestThing.jpg" alt="">
            <img src="img/projects/logo_Belleza_Finale.jpg" alt="">
            <img src="img/projects/ASUshirtSingle.jpg" alt="">
            <img src="img/projects/ASUShirtBeingWorn.jpg" alt="">
            <img src="img/projects/LogoVariations_1_Chosen.jpg" alt="">
            <img src="img/projects/POS_BoltLogo.jpg" alt="">
            <img src="img/projects/TARPOfficeRoomfloor.jpg" alt="">
        </div>
    </div>
    <div class="projects-grid-item">
        <h2>For Fun</h2>
        <a href="#for-fun" class="open-popup-link"><img src="img/projects/robot.jpg" alt=""></a>
        <p>Variety of 3d and 2d projects.</p>
        <div id="for-fun" class="white-popup mfp-hide">
            <h2>Some of the 24# bingo games I've worked on.</h2>
            <img src="img/projects/robot.jpg" alt="">
            <img src="img/projects/pic08.gif" alt="">
            <img src="img/projects/TestEdited.jpg" alt="">
            <img src="img/projects/desseert_Photoshoped.jpg" alt="">
            <img src="img/projects/GreekDestroy.jpg" alt="">
            <img src="img/projects/GlassHair3a.jpg" alt="">
            <img src="img/projects/WalkingBad.jpg" alt="">
            <img src="img/projects/choppermanyreflections2.jpg" alt="">
            <img src="img/projects/mmmdonut2.jpg" alt="">
            <img src="img/projects/purpleOcto.jpg" alt="">
            <img src="img/projects/Progress_43.jpg" alt="">
            
        </div>
    </div>
    
</div>
</div>
                 `;
$('body').magnificPopup({
  delegate: 'a.open-popup-link',
  type: 'inline',
  closeOnContentClick: false,
  closeBtnInside: true,
  removalDelay: 300,

  
});

