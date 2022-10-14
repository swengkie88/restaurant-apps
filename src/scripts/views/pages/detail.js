import RestoDataSource from '../../data/resto-datasource';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailView } from '../builder/view-builder';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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

    // eslint-disable-next-line prefer-destructuring
    const customerReviews = resto.customerReviews;
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
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
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
