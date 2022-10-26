import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../../src/scripts/data/resto-favorite-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestoIdb,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
