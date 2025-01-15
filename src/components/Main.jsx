import comicsCardsContent from "../data/comics";
import ComicsLine from "./comicsLine/ComicsLine.jsx";

const Main = (props) => {
  return (
    <main>
      <section className="content">
        <div className="jumbotron"></div>
        <div className="container">
          <div className="card-container">
            <div className="card-row">
              {comicsCardsContent.map((card) => (
                <ComicsLine key={card.id} cardData={card} />
              ))}
            </div>
          </div>
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
