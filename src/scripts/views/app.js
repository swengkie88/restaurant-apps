import router from '../routes/router';
import UrlParser from '../routes/url-parser';
import '../component/app-bar';
import NavbarInitiator from '../utils/navbar-initiator';

class App {
  constructor({ button, navbar, content }) {
    this._button = button;
    this._navbar = navbar;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    NavbarInitiator.init({
      button: this._button,
      navbar: this._navbar,
      content: this._content,
    });
  }

  async renderApp() {
    const url = UrlParser.parseUrlWithCombiner();
    const page = router[url];

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
