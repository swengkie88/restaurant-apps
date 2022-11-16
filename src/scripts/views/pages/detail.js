import RestoDataSource from '../../data/resto-datasource';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailView } from '../builder/view-builder';
import FavoriteRestoIdb from '../../data/resto-favorite-idb';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <div class="container">
      <div id="detail-resto"></div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseUrlWithoutCombiner();
    const restoContainer = document.querySelector('#detail-resto');
    const resto = await RestoDataSource.detailResto(url.id);

    restoContainer.innerHTML += createRestoDetailView(resto);

    const category = resto.categories;
    const categoryEl = document.querySelector('#category');

    const foodsMenu = resto.menus.foods;
    const foodsMenuEl = document.querySelector('#foods-menu');

    foodsMenu.forEach((foodItem) => {
      foodsMenuEl.innerHTML += `<li>${foodItem.name}</li>`;
    });

    const drinksMenu = resto.menus.drinks;
    const drinksMenuEl = document.querySelector('#drinks-menu');

    drinksMenu.forEach((drinkItem) => {
      drinksMenuEl.innerHTML += `<li>${drinkItem.name}</li>`;
    });

    category.forEach((categoryItem) => {
      categoryEl.innerHTML += `<div class='category-chips'>${categoryItem.name}</div>`;
    });

    const { customerReviews } = resto;
    const customerReviewEl = document.querySelector('#customer-review');

    customerReviews.forEach((review) => {
      customerReviewEl.innerHTML += `
        <div class='customer-review-item'>
          <h5>${review.name}</h5>
          <p>${review.date}</p>
          <em>"${review.review}"</em>
        </div>
      `;
    });

    // Menggunakan object LikeButtonInitiator
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        address: resto.address,
        pictureId: resto.pictureId,
        categories: resto.categories,
        menus: resto.menus,
        rating: resto.rating,
        customerReviews: resto.customerReviews,
      },
    });
  },
};

export default Detail;
