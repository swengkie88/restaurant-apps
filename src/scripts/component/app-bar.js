class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header>
            <div class="container">
                <div class='header-content'>
                    <a href="#" class="logo">O<span class="highlight-text">maem</span></a>
                    <button id="hamburger" type="button">☰</button>
                </div>
                <nav id="navbar"> 
                        <ul> 
                            <li><a href="#">Home</a></li>
                            <li><a href="#/favorite">Favorite</a></li>
                            <li><a href="https://www.linkedin.com/in/angkiprana88/" target="_blank" rel="noopener">About Us</a></li>
                        </ul>
                </nav>            
            </div>
        </header>
        `;
  }
}
customElements.define('app-bar', AppBar);
