const NavbarInitiator = {
  init({ button, navbar, content }) {
    button.addEventListener('click', (event) => {
      this._toggleNavbar(event, navbar);
    });

    content.addEventListener('click', (event) => {
      this._closeNavbar(event, navbar);
    });
  },

  _toggleNavbar(event, navbar) {
    event.stopPropagation();
    navbar.classList.toggle('open');
  },

  _closeNavbar(event, navbar) {
    event.stopPropagation();
    navbar.classList.remove('open');
  },

};

export default NavbarInitiator;
