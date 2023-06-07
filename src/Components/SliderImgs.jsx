import React from "react";
import Slider from "./Slider";
import S1 from "../assets/imgs/s1.jpg";
import S2 from "../assets/imgs/s2.jpg";
import S3 from "../assets/imgs/s3.jpg";

const SliderImgs = () => {
  const imgs = [S1, S2, S3];

  return (
    <>
      <Slider images={imgs} />
    </>
  );
};

export default SliderImgs;
