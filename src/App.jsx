import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const links = [
  { id: 1, name: "CHARACTERS", url: "/" },
  { id: 2, name: "COMICS", url: "/" },
  { id: 3, name: "MOVIES", url: "/" },
  { id: 4, name: "TV", url: "/" },
  { id: 5, name: "GAMES", url: "/" },
  { id: 6, name: "COLLECTIBLES", url: "/" },
  { id: 7, name: "VIDEOS", url: "/" },
  { id: 8, name: "FANS", url: "/" },
  { id: 9, name: "NEWS", url: "/" },
  { id: 10, name: "SHOP", url: "/" },
];

const footerShop = [
  { id: 1, url: "#", text: "Shop DC" },
  { id: 2, url: "#", text: "Shop DC Collectibles" },
];

const footerDC = [
  { id: 1, url: "#", text: "Therms Of Use" },
  { id: 2, url: "#", text: "Privacy policy (New)" },
  { id: 3, url: "#", text: "Ad Choices" },
  { id: 4, url: "#", text: "Advertising" },
  { id: 5, url: "#", text: "Jobs" },
  { id: 6, url: "#", text: "Subscriptions" },
  { id: 7, url: "#", text: "Talent Workshops" },
  { id: 8, url: "#", text: "CPSC Certificates" },
  { id: 9, url: "#", text: "Ratings" },
  { id: 10, url: "#", text: "Shop Help" },
  { id: 11, url: "#", text: "Contact Us" },
];

const footerSites = [
  { id: 1, url: "#", text: "DC" },
  { id: 2, url: "#", text: "MAD Magazine" },
  { id: 3, url: "#", text: "DC Kids" },
  { id: 4, url: "#", text: "DC Universe" },
  { id: 5, url: "#", text: "DC Power Visa" },
];

const App = () => {
  return (
    <>
      <Header menu={links} />
      <Main />
      <Footer
        footerShop={footerShop}
        footerDC={footerDC}
        footerSites={footerSites}
        footerComics={links}
      />
    </>
  );
};

export default App;
