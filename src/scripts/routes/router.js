import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';

const router = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail-resto/:id': Detail,
};

export default router;
