import FavoriteRestoIdb from '../../data/resto-favorite-idb';
import FavoriteRestoSearchView from './liked-resto/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-resto/favorite-resto-show-presenter';
import FavoriteRestoSearchPresenter from './liked-resto/favorite-resto-search-presenter';
// import { createRestoItemView } from '../builder/view-builder';

const view = new FavoriteRestoSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },
  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteResto: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteResto: FavoriteRestoIdb });
  },
};

export default Favorite;
