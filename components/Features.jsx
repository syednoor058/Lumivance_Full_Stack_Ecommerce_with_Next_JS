import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 pt-14">
      <div className="w-full lg:w-[50%] aspect-[4/3] relative overflow-hidden rounded-lg group">
        <Image
          src={assets.sunglass_model}
          alt="Sunglass Model"
          className="w-full h-full object-cover object-center z-1 group-hover:brightness-75 transition duration-300"
        />
        <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-6 left-6 text-white space-y-2">
          <p className="font-medium text-xl lg:text-2xl">Armani Sunglasses</p>
          <p className="text-sm lg:text-base leading-5 max-w-60 text-gray-200">
            New Arrivals
          </p>
          <button className="flex items-center gap-1.5 bg-[#f85606] px-2 py-1 rounded">
            Buy now{" "}
            <Image
              className="h-3 w-3"
              src={assets.redirect_icon}
              alt="Redirect Icon"
            />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[50%] flex flex-col gap-4">
        <div className="w-full flex flex-row gap-4">
          <div className="w-[50%] aspect-[4/3] relative overflow-hidden rounded-lg group">
            <Image
              src={assets.headphone_model}
              alt="headphone Model"
              className="w-full h-full object-cover object-center z-1 group-hover:brightness-75 transition duration-300"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-4 left-4 text-white space-y-0.5">
              <p className="font-medium text-lg lg:text-xl">Bestsellers</p>
              <p className="text-sm lg:text-base leading-5 max-w-60 text-gray-200">
                24 items
              </p>
              <button className="flex items-center gap-1.5 bg-[#f85606] px-2 py-1 rounded">
                Browse{" "}
                <Image
                  className="h-3 w-3"
                  src={assets.redirect_icon}
                  alt="Redirect Icon"
                />
              </button>
            </div>
          </div>
          <div className="w-[50%] aspect-[4/3] relative overflow-hidden rounded-lg group">
            <Image
              src={assets.dress_model}
              alt="dress Model"
              className="w-full h-full object-cover object-center z-1 group-hover:brightness-75 transition duration-300"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-4 left-4 text-white space-y-0.5">
              <p className="font-medium text-lg lg:text-xl">Women Collection</p>
              <p className="text-sm lg:text-base leading-5 max-w-60 text-gray-200">
                Winter 2025
              </p>
              <button className="flex items-center gap-1.5 bg-[#f85606] px-2 py-1 rounded">
                All products{" "}
                <Image
                  className="h-3 w-3"
                  src={assets.redirect_icon}
                  alt="Redirect Icon"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-40 lg:h-full relative overflow-hidden rounded-lg group">
          <Image
            src={assets.watch_model}
            alt="watch Model"
            className="w-full h-full object-cover object-center z-1 group-hover:brightness-75 transition duration-300"
          />
          <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-6 left-6 text-white space-y-2">
            <p className="font-medium text-xl lg:text-2xl">Men Wrist Watches</p>
            <p className="text-sm lg:text-base leading-5 max-w-60 text-gray-200">
              Smart watch
            </p>
            <button className="flex items-center gap-1.5 bg-[#f85606] px-2 py-1 rounded">
              Visit store{" "}
              <Image
                className="h-3 w-3"
                src={assets.redirect_icon}
                alt="Redirect Icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
