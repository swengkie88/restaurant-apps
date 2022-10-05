class AppBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <header>
            <div class="container">
                <div class='header-content'>
                    <a href="/" class="logo">O<span class="highlight-text">maem</span></a>
                    <a id="hamburger">☰</a>
                </div>
                <nav id="navbar"> 
                        <ul> 
                            <li><a class="menu-active" href="#">Home</a></li>
                            <li><a href="#">Favorite</a></li>
                            <li><a href="https://www.linkedin.com/in/angkiprana88/" target="_blank">About Us</a></li>
                        </ul>
                </nav>            
            </div>
        </header>
        `
    }
}
customElements.define('app-bar', AppBar);