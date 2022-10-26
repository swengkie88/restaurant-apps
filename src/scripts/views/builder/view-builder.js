import CONFIG from '../../globals/config';

const createRestoItemView = (resto) => `
    <a class='resto-item' href='/#/detail-resto/${resto.id}'> 
        <div class='card-resto'>    
            <div class='card-img'>
                <div class='rating-label'> 
                    ${resto.rating}
                </div>
                <img alt='${resto.name}' src='${CONFIG.BASE_IMG_URL + resto.pictureId}'/>
            </div>
            <div class='card-body'>
                <h3 class="resto__title">${resto.name}</h3>
                <p>${resto.description}</p>
                <p class='loc-label'>${resto.city}</p>
            </div>
        </div>
    </a>
`;

const createRestoDetailView = ((resto) => `
        <div class='card-resto detail-card'>    
            <div class='card-img'>
                <img alt='${resto.name}' src='${CONFIG.BASE_IMG_URL + resto.pictureId}'/>
            </div>
            <div class='card-body'>
                <div class='resto-content'>
                    <h3>${resto.name}</h3>
                    <div class='resto-info'> 
                        <div class='loc-label'>${`${resto.address}, ${resto.city}`} </div>
                        <div class='rating-label'>${resto.rating}</div>
                        <div id='category' class='categories'></div>
                    </div>
                    <div>
                        <div>
                            <h4>Deskripsi Singkat</h4>
                            <p>${resto.description}</p>
                        </div>
                        <div>
                            <h4>Customer Reviews</h4>
                            <div id='customer-review'></div>
                        </div>
                    </div>
                </div>
                <div class='resto-menu'>
                    <h3>Menu</h3>
                    <h4>Makanan</h4>
                    <ul id='foods-menu'></ul>
                    <h4>Minuman</h4>
                    <ul id='drinks-menu'></ul>
                </div>
                
            </div>
        </div>
    `);

const createLikeButtonView = () => `
    <button aria-label ="like this resto" id="likeButton" class="like"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path fill="#FFFFFF" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
        </svg>
    </button>
`;

const createLikedButtonView = () => `
    <button aria-label="unlike this resto" id="likeButton" class="like">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path fill="#FFFFFF" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
    </button>
`;

export {
  createRestoItemView,
  createRestoDetailView,
  createLikeButtonView,
  createLikedButtonView,
};