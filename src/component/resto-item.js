class RestoItem extends HTMLElement {
    set restoItem(data) {
        this._data = data;
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <a class='resto-item' href='#'>
                <div class='card-resto'>    
                    <div class='card-img'>
                        <div class='rating-label'>
                            ${this._data.rating}
                        </div>
                        <img alt='${this._data.name}' src='${this._data.pictureId}'/>
                    </div>
                    <div class='card-body'>
                        <h3>${this._data.name}</h3>
                        <p>${this._data.description}</p>
                        <p class='loc-label'>${this._data.city}</p>
                    </div>
                </div>
            </a>
        `;
    }
}

customElements.define('resto-item', RestoItem);