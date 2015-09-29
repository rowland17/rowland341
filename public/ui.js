/**                                                                                                                                
 * ui.js                                                                                                                           
 *                                                                                                                                 
 * Defines functionality for instrumenting the user-interface.                                                                     
 *                                                                                                                                 
 */
var fetch = function() {
	var el = document.getElementById('year');
	var elVal = el.value;
	console.log(elVal);
	vizController(elVal);
};
var toggle = function() {

    //console.log('About!');
    
    // Grab the html element with the ID “about”
    var el = document.getElementById('about');

    // Add the class “show” to the element.
    if(hasClass(el, 'show'))
    {
   		removeClass(el, 'show');
    }
    else
    {
    	addClass(el, 'show');
    }
    

};

var initialize = function() {

    console.log('Initialize!');

    // Grab the 'About' button element, identified by the                                                                          
    // 'about-btn' id.                                                                                                             
    var button = document.getElementById('about-btn');
    var btn = document.getElementById('submit-btn');

    // From this point forward, when the button is clicked, the                                                                   
    // toggle function shall be invoked.                                                                                           
    button.onclick = toggle;
    btn.onclick = fetch;
    

};

// When this file is included at the bottom of the page,                                                                           
// the js is loaded after the DOM is loaded.  It is a                                                                              
// good time to initialize the UI elements in the page.                                                                            
initialize();
