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

const App = () => {
  return (
    <>
      <Header menu={links} />
      <Main />
      <Footer />
    </>
  );
};

export default App;
