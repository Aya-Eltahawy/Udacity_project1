/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
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
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click


// Set sections as active


const navul = document.querySelector('#navbar__list');
const navSec = document.querySelectorAll('section');
//build navbar
function buildNavBar() {

    const fragment = document.createDocumentFragment();
    //create_li create a new li item
    navSec.forEach((Sec) => {
        const createli = document.createElement('li');
        const createA = document.createElement('a');
        createA.innerText = Sec.getAttribute('data-nav');
        createA.setAttribute('class', 'menu__link');

        // scroll to anchor ID using scroll to event
        createA.addEventListener("click", () => {
            Sec.scrollIntoView({behavior: "smooth"});
            });
        createli.appendChild(createA);
        fragment.appendChild(createli);
    });
    navul.appendChild(fragment);
};

function getlistIndex()
{
    let z=window.innerHeight;

    listIndx = -1;
    navSec.forEach((navhref, index) => {
        let offset = navhref.getBoundingClientRect();
        if(Math.abs(offset.top) < z){
            z = Math.abs(offset.top);
            listIndx = index;
        }
    });
    return listIndx;
}
function ActiveSection(){
    listIndx = getlistIndex();

    // If visibleSection exists
    if(listIndx != -1){
        // create a list of Atags from navigation menu
        let navTagList = document.querySelectorAll('.menu__link');

        // Loop through all section
        for (let i = 0; i < navSec.length; i++) {
            // For section in viewport: Add active state to the section and navigation
            if (i == listIndx){
                navSec[i].classList.add('your-active-class');
                navTagList[i].classList.add('your-active-class');
            }
            // For other sections: Remove active state from the section and navigation
            else{
                navSec[i].classList.remove('your-active-class');
                navTagList[i].classList.remove('your-active-class');
            }
        }; 
    };
}


// Build navigation menu
buildNavBar();
// Set sections as active (highlight section and nav if section is in viewport)
document.addEventListener('scroll', ActiveSection);






