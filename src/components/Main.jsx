import { comics } from "../data/comics";
import ComicCard from "./ComiCard";

const Main = (props) => {
  const ComicCard = props.comics;
  return (
    <main>
      <section className="content">
        <div className="container">
          {comics.map((comic) => (
            <ComicCard key={comic.id} title={comic.title} thumb={comic.thumb} />
          ))}
        </div>
      </section>
      <section className="dc_info">
        <div className="row container">
          <div className="col">
            <img src="/img/buy-comics-digital-comics.png" alt="" />
            <p>DIGITAL COMICS</p>
          </div>
          <div className="col">
            <img src="/img/buy-comics-merchandise.png" alt="" />
            <p>DC MERCHANDISE</p>
          </div>
          <div className="col">
            <img src="/img/buy-comics-subscriptions.png" alt="" />
            <p>SUBSCRIPTION</p>
          </div>
          <div className="col">
            <img src="/img/buy-comics-shop-locator.png" alt="" />
            <p>COMIC SHOP LOCATOR</p>
          </div>
          <div className="col">
            <img src="/img/buy-dc-power-visa.svg" alt="" />
            <p>DC POWER VISA</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
