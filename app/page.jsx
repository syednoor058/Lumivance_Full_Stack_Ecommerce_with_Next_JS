"use client";
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import TopCategory from "@/components/TopCategory";
import { LogoMarquee } from "@/components/LogoMarquee";
import { useAppContext } from "@/context/AppContext";



const Home = () => {

  const {loading} = useAppContext();

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#f85606] border-solid"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5]">
      <Navbar />
      <div className="px-4 md:px-10">
        <HeaderSlider />
      </div>

      <div className="px-4 md:px-10 lg:px-20">
        <TopCategory />
        <Features />
        <HomeProducts />
        <FeaturedProduct />
      </div>
      <LogoMarquee />
      <div className="px-4 md:px-10 lg:px-20">
        <Banner />
        <NewsLetter />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
