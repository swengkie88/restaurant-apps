import restoData from '../DATA.json' assert{type: 'json'};
import './resto-item.js';

class RestoList extends HTMLElement{
    connectedCallback(){
        console.log('Resto List udah diload');
        console.log('Cek array restoData: ', restoData)
        this.render();
    }
    render(){
        this.innerHTML = ``;
        console.log('Cek this: ', this);
        const listResto = restoData.restaurants; 
        this.classList.add('list-resto');
        listResto.forEach((data, index) => {
            const restoItemEl = document.createElement('resto-item');
            restoItemEl.restoItem = data;
            console.log('');
            this.appendChild(restoItemEl);
            // console.log(`Index ke-${index} datanya: ${data.name}`);
        });
    }
}

customElements.define('list-resto', RestoList);