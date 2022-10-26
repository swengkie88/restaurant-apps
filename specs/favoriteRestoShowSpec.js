import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-movies/favorite-resto-search-view';
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-movies/favorite-resto-show-presenter';
import FavoriteRestoIdb from '../src/scripts/data/resto-favorite-idb';

describe('Showing all favorite resto', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no resto have been liked', () => {
    it('should ask for the favorite resto', () => {
      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      expect(favoriteResto.getAllResto).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no resto have been liked', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length)
          .toEqual(1);

        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteResto.getAllResto.and.returnValues([]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });

  describe('When favorite resto exist', () => {
    it('should show the movies', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.resto-item').length)
          .toEqual(2);

        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteResto.getAllResto.and.returnValues([
        {
          id: 11, name: 'A', rating: 3, descripton: 'Sebuah resto A',
        },
        {
          id: 22, name: 'B', rating: 4, descripton: 'Sebuah resto B',
        },

      ]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });
});
