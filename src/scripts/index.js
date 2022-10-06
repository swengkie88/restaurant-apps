import 'regenerator-runtime'; /* for async await transpile */
import '../component/app-bar.js';
import '../component/hero.js';
import '../component/resto-list.js'; 
import '../styles/main.scss';

const hamburgerBtnEl = document.querySelector('#hamburger');
const navbarEl = document.querySelector('#navbar');

hamburgerBtnEl.addEventListener('click', event =>{
    navbarEl.classList.toggle('open');
    event.stopPropagation();
});
