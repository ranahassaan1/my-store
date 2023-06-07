import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SliderImgs from "./Components/SliderImgs";
import CategoryMenu from "./Components/CategoryMenu";
import ProductSliderImgs from "./Components/ProductSliderImgs";

function App() {
  return (
    <>
      <NavBar />
      <CategoryMenu />
      <SliderImgs />
      <ProductSliderImgs />
    </>
  );
}

export default App;
