const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
    I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
  
    I.amOnPage('/');
  
    I.seeElement('.resto-item');
  
    const firstResto = locate('.resto-item').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');
    const likedRestoTitle = await I.grabTextFrom('.resto__title');
  
    assert.strictEqual(firstRestoTitle, likedRestoTitle);
  });
  
  Scenario('searching resto', async ({ I }) => {
    I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
  
    I.amOnPage('/');
  
    I.seeElement('.resto-item');
  
    const titles = [];
  
    for (let i = 1; i <= 3; i++) {
      I.click(locate('.resto-item').at(i));
      I.seeElement('#likeButton');
      I.click('#likeButton');
      titles.push(await I.grabTextFrom('.resto__title'));
      I.amOnPage('/');
    }
  
    I.amOnPage('/#/favorite');
    I.seeElement('#query');
  
    const searchQuery = titles[1].substring(1, 3);
    const matchingResto = titles.filter((title) => title.indexOf(searchQuery) !== -1);
  
    I.fillField('#query', searchQuery);
    I.pressKey('Enter');
  
    const visibleLikedResto = await I.grabNumberOfVisibleElements('.resto-item');
    assert.strictEqual(matchingResto.length, visibleLikedResto);
  
    matchingResto.forEach(async (title, index) => {
      const visibleTitle = await I.grabTextFrom(locate('.resto__title').at(index + 1));
      assert.strictEqual(title, visibleTitle);
    }); 
  });
