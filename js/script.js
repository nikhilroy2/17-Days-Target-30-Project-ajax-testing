'use strict';
{
    //......................Global Variable ................*/
    let section_1 = document.querySelector('.section_1');
    let nav_menu = document.querySelector('.nav_menu');
    //......................Global Variable  End................*/
  
    setInterval(function () {
        let nav_ul = document.querySelector('.nav_ul');
        section_1.setAttribute('style', `height: calc(100vh - ${nav_ul.offsetHeight}px )`);

    }, 100);


    // home ajax setup
    let homeIndex = new XMLHttpRequest();
    homeIndex.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            section_1.innerHTML = this.responseText;
        };
    };
    homeIndex.open('GET', '../ajax/home.html', true);
    homeIndex.send();

    // home ajax setup ended

    // menu ajax setup
    nav_menu.onclick = function() {
        let menuIndex = new XMLHttpRequest();
        menuIndex.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                section_1.innerHTML = this.responseText;
            };
        };
        menuIndex.open('GET', '../ajax/menu.html', true);
        menuIndex.send();
    }

     // menu ajax setup end

     

}