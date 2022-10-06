class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero-el">
                <div class="filter"></div>
                <div class="hero-content">
                    <h1>O<span class="highlight-text">maem</span></h1>
                    <p>Dapatkan informasi tempat makan hanya di omah maem</p>
                    <a href="#explore" class="btn btn-outline-white">Explore now!</a>
                </div>
            </div> 
        `;
  }
}

customElements.define('hero-el', HeroElement);
