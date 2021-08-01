import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './assets/css/style.css';

function menu() {

    let show = true;

    const rowmenu = document.querySelector('.rowmenu');
    const toggle = document.querySelector('.menu-toggle');
    
    toggle.addEventListener('click', () => {
        
        document.body.style.overflow = show ? 'hidden' : 'initial';

        rowmenu.classList.toggle('on', show);        
        show = !show;
    })

};
menu();