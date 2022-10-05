import 'regenerator-runtime'; /* for async await transpile */
import '../component/app-bar.js';
import '../component/hero.js';
import '../component/resto-list.js'; 
import '../styles/main.scss';

const hamburgerBtnEl = document.querySelector('#hamburger');
const navbarEl = document.querySelector('#navbar');
console.log('Cek navbarEl: ', navbarEl);

hamburgerBtnEl.addEventListener('click', event =>{
    console.log('Cek eventnya jalan belom');
    navbarEl.classList.toggle('open');
    event.stopPropagation();
});
