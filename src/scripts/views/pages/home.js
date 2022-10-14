import '../../component/hero';
import '../../component/resto-list';

const Home = {
  async render() {
    return `
    <hero-el></hero-el>
    <div class="container">
      <div class="content-header">
        <h2 id="explore">Yuk Makan!</h2>
        <p>
          Mau cari makan? 
          Cari di omaem aja!
        </p>
      </div>
      <list-resto></list-resto>
    </div>
    `;
  },
  async afterRender() {
    console.log('Home sudah dirender');
  },
};

export default Home;
