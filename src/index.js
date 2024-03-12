import './style.css';
import 'normalize.css';
import { loadHomePage } from './homePage.js';
import { loadMenuPage } from './menuPage.js';
import { loadContactPage } from './contactPage.js';

function clearPage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    window.scrollTo(0,0); 
}

function activateNavbar() {
    const homeNavBtn = document.querySelector('#homeNavBtn');
    const menuNavBtn = document.querySelector('#menuNavBtn');
    const contactNavBtn = document.querySelector('#contactNavBtn');

    homeNavBtn.addEventListener('click', () => {
        clearPage();
        loadHomePage();
    });

    menuNavBtn.addEventListener('click', () => {
        clearPage();
        loadMenuPage();
    });

    contactNavBtn.addEventListener('click', () => {
        clearPage();
        loadContactPage();
    });
}

activateNavbar();
loadHomePage();