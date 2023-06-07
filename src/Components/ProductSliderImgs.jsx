import React from "react";
import ProductSlider from "./ProductSlider";
import P1 from "../assets/imgs/p1.jpeg";
import P2 from "../assets/imgs/p2.jpeg";
import P3 from "../assets/imgs/p3.jpeg";
import P4 from "../assets/imgs/p4.jpeg";
import P5 from "../assets/imgs/p5.jpeg";

const ProductSliderImgs = () => {
  const prodcutimgs = [P1, P2, P3, P4, P5];
  return (
    <>
      <ProductSlider images={prodcutimgs} />
    </>
  );
};

export default ProductSliderImgs;
