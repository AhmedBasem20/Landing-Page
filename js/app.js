/**
 * 
 * Manipulating the DOM exercise.  
 * Exercise programmatically builds navigation,   1
 * scrolls to anchors from navigation,   2
 * and highlights section in viewport upon scrolling.   3
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/
const navBar = document.querySelector('#navbar__list');
const navSec = document.querySelectorAll('section');


// build the nav
function buildNavBar() {

    const createFragment = document.createDocumentFragment();
    for (let sec of navSec) {
        const navli = document.createElement('li');
        const nava = document.createElement('a');
        nava.textContent = sec.getAttribute('data-nav');
        nava.setAttribute('class', 'menu__link');

        // Scroll to anchor ID
        nava.addEventListener("click", () => {
            sec.scrollIntoView({behavior: "smooth"});
            });
        navli.appendChild(nava);
        createFragment.appendChild(navli);
    };
    navBar.appendChild(createFragment);
};

// Build navigation menu
buildNavBar();

// Set sections as active (highlight section and nav if section is in viewport)
/**
 * To Do...
 * highlights section in viewport upon scrolling.   3
 */
