import "./Home.css";
import Product, { ProductProps } from "../../components/Product/Product";
import products from "../../products.json";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product {...(products["the-lean-start-up"] as ProductProps)} />
          <Product {...(products["kenwood_mixer_bowl"] as ProductProps)} />
        </div>

        <div className="home__row">
          <Product {...(products["samsung-smart-watch"] as ProductProps)} />
          <Product {...(products["amazon-echo-third-gen"] as ProductProps)} />
          <Product {...(products["apple-ipad-pro"] as ProductProps)} />
        </div>

        <div className="home__row">
          <Product {...(products["samsung-49-inch-tv"] as ProductProps)} />
        </div>
      </div>
    </div>
  );
}

export default Home;
