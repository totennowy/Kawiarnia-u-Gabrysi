import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Categories from "./components/categories/Categories";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Categories />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
