const navBar = document.querySelector('#navbar__list');
const section = document.querySelectorAll('section');


// build the nav
function buildNavBar() {

    const createFragment = document.createDocumentFragment();
    for (let sec of section) {
        const li = document.createElement('li');
        const nava = document.createElement('a');
        nava.textContent = sec.getAttribute('data-nav');
        nava.setAttribute('class', 'menu__link');

        // Scroll to anchor ID
        nava.addEventListener("click", () => {
            sec.scrollIntoView({behavior: "smooth", block:'center'});
            for (let sec of section) {
                sec.classList.remove('your-active-class');
            }
            sec.classList.add('your-active-class');
            });
       
                // const limit = sec.getBoundingClientRect().top;
                // if (limit > 0 && limit < 350) {
                //         for (let sec of section) {
                //             sec.classList.remove('your-active-class');
                //         }
                //         sec.classList.add('your-active-class');
                //         const navlink = document.querySelector(`[href="#${sec.id}"]`);
                //         nava.style.color='green';

                //     }

                


        li.appendChild(nava);
        createFragment.appendChild(li);
        

    };
    navBar.appendChild(createFragment);
    




};


function highlighted() {
    let atag = navBar.getElementsByClassName("menu__link");
    for (let i = 0; i < atag.length; i++) {
        atag[i].addEventListener("click", function(){
            let current = document.getElementsByClassName("highlight");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" highlight", "");
    }

    // Add the active class to the current/clicked button
    this.className += " highlight";
        });
    }
};



function onScroll() {
    window.addEventListener('scroll', function(){
        let current = "";
        for (sec of section) {
            let sectionTop = sec.offsetTop;
            let sectioHeigt = sec.clientHeight;
            let atag = navBar.getElementsByClassName("menu__link");
            if (window.pageYOffset > sectionTop - sectioHeigt / 3) {
                current = sec.getAttribute('data-nav');
                for (let i = 0; i < atag.length; i++)
                {

                    if (atag[i].textContent === current)
                    {
                        atag[i].classList.add("highlight");
                        //remove highlight class from unviewed sections
                        for (let j = 0; j < atag.length; j++)
                        {
                            if (atag[j] != atag[i])
                            {
                                atag[j].classList.remove("highlight");
                            }
                        }

                    }
                }

            }
        }
        console.log(current);
        
        

    });
};

// Build navigation menu
buildNavBar();
highlighted();
onScroll();
