import restoData from '../DATA.json' assert{type: 'json'};
import './resto-item.js';

class RestoList extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = ``;
        const listResto = restoData.restaurants; 
        this.classList.add('list-resto');
        listResto.forEach((data, index) => {
            const restoItemEl = document.createElement('resto-item');
            restoItemEl.restoItem = data;
            this.appendChild(restoItemEl);
        });
    }
}

customElements.define('list-resto', RestoList);