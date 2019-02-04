const projects = `
                  
                  <div class="newDiv main-body body">
                   <div class="projects-grid-container">
                    <div class="projects-grid-item">
                    <h1>Item 1</h1>
                    <a href="#test-popup" class="open-popup-link">Show inline popup</a>
                    <div id="test-popup" class="white-popup mfp-hide"><h1>This is The POP UP</h1>
                    </div>
                    </div>
                    <div class="projects-grid-item"><h1>Item 2</h1></div>
                    <div class="projects-grid-item"><h1>Item 3</h1></div>
                    <div class="projects-grid-item"><h1>Item 4</h1></div>
                    <div class="projects-grid-item"><h1>Item 5</h1></div>
                    <div class="projects-grid-item"><h1>Item 6</h1></div>
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

