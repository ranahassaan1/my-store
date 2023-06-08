import React from "react";
import { useState, useEffect } from "react";
import ProductSlider from "./ProductSlider";
import P1 from "../assets/imgs/p1.jpeg";
import P2 from "../assets/imgs/p2.jpeg";
import P3 from "../assets/imgs/p3.jpeg";
import P4 from "../assets/imgs/p4.jpeg";
import P5 from "../assets/imgs/p5.jpeg";

const Products = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update current date every second

    return () => {
      clearInterval(timer);
    };
  }, []);

  const calculateTimeAgo = (postedDate) => {
    const differenceInMilliseconds = currentDate - postedDate;
    const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    return { hours, days, weeks };
  };

  const products = [
    {
      name: "Mobile Phonw",
      price: 2560,
      image: P1,
      postedDate: new Date("2023-05-15"),
      currentDate: currentDate,
      calculateTimeAgo: calculateTimeAgo,
    },
    {
      name: "gym setup",
      price: 240000,
      image: P2,
      postedDate: new Date("2023-05-25"),
    },
    {
      name: "speaker",
      price: 3000,
      image: P3,
      postedDate: new Date("2023-06-01"),
    },
    {
      name: "joy stick",
      price: 6500,
      image: P4,
      postedDate: new Date("2023-02-01"),
    },
    {
      name: "ac",
      price: 210000,
      image: P5,
      postedDate: new Date("2023-06-23"),
    },
  ];

  return (
    <>
      <ProductSlider images={products} />
    </>
  );
};

export default Products;
