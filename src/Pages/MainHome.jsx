import React, { useEffect, useState } from "react";
import Hero from "../HomeComponent/Hero";
import Services from "../AboutComponent/Services";
import BestSeller from "../HomeComponent/BestSeller";
import axios from "axios";
import { domain } from "../store/Store";
import Recommended from "../HomeComponent/Recommended";
import FlashSales from "../HomeComponent/FlashSales";

const MainHome = () => {
  const [bestSeller, setBestSeller] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [flashSales, setFlashSales]= useState([])
  useEffect(() => {
    axios.get(domain + "/home").then((res) => {
      console.log(res.data.data);
      setFlashSales(res.data.data.flashSales)
      setBestSeller(res.data.data.best_selling_image);
      setRecommended(res.data.data.recommended);
    });
  }, []);
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <BestSeller bestSeller={bestSeller} />
      <Recommended recommended={recommended} />
      <FlashSales flashSales={flashSales}/>
    </div>
  );
};

export default MainHome;
