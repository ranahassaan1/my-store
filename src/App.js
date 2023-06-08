import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SliderImgs from "./Components/SliderImgs";
import CategoryMenu from "./Components/CategoryMenu";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <NavBar />
      <CategoryMenu />
      <SliderImgs />
      <Products />
    </>
  );
}

export default App;
