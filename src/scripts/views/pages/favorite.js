import FavoriteRestoIdb from '../../data/resto-favorite-idb';
import { createRestoItemView } from '../builder/view-builder';

const Favorite = {
  async render() {
    return `
    <div class="container">
      <div class="content-header">
        <h2 id="explore">Resto Favorit Anda</h2>
        <p>
          Berikut daftar Restoran yang anda sukai!
        </p>
      </div>
      <div id="favorites" class="list-resto"></div>
    </div>
    `;
  },
  async afterRender() {
    const favsResto = await FavoriteRestoIdb.getAllResto();
    const favsContainer = document.querySelector('#favorites');
    favsResto.forEach((resto) => {
      favsContainer.innerHTML += createRestoItemView(resto);
    });
  },
};

export default Favorite;
