/* eslint-disable import/extensions */
import RestoDataSource from '../data/resto-datasource';
import { createRestoItemView } from '../views/builder/view-builder.js';

class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = '';
    // const listResto = restoData.restaurants;
    const listResto = await RestoDataSource.listResto();
    this.classList.add('list-resto');

    listResto.forEach((resto) => {
      this.innerHTML += createRestoItemView(resto);
    });
  }
}

customElements.define('list-resto', RestoList);
