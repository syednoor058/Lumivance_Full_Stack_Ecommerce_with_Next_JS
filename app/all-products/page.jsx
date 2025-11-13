"use client";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";
import NewsLetter from "@/components/NewsLetter";
import Image from "next/image";
import { assets } from "@/assets/assets";

const AllProducts = () => {
  const { products } = useAppContext();

  return (
    <>
      <Navbar />
      <div className="w-full aspect-[12/3] relative overflow-hidden">
      <Image src={assets.all_products_banner} alt="all product banner" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex flex-col items-start px-4 md:px-14 lg:px-20 bg-[#f5f5f5]">
        <div className="flex flex-col items-end pt-12">
          <p className="text-2xl font-medium">All products</p>
          <div className="w-16 h-0.5 bg-[#f85606] rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="w-full px-4 md:px-14 lg:px-20 bg-[#f5f5f5]">
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
