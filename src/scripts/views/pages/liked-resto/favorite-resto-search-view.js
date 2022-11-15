import { createRestoItemView } from '../../builder/view-builder';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <div class="container">
        <div class="content-header text-center">
          <h2 id="explore">Resto Favorit Anda</h2>
          <p class="mb-15">Berikut daftar Restoran yang anda sukai!</p>
          <input class="mb-15" id="query" type="text" placeholder="Cari nama restoran...">
        </div>
        <div id="resto" class="list-resto"></div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showResto(resto) {
    this.showFavoriteResto(resto);
  }

  showFavoriteResto(resto = []) {
    let html;
    if (resto.length) {
      html = resto.reduce((carry, resto_item) => carry.concat(createRestoItemView(resto_item)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('resto').innerHTML = html;

    document.getElementById('resto').dispatchEvent(new Event('resto:updated'));
  }

  _getEmptyRestoTemplate() {
    return `
      <div class="resto-item__not__found resto__not__found">
        Tidak ada resto untuk ditampilkan
      </div>`
    ;
  }
}

export default FavoriteRestoSearchView;
