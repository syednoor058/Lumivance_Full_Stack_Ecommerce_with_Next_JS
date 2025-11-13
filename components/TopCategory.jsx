import { assets } from "@/assets/assets";
import React from "react";

const TopCategory = () => {
  const catDetails = [
    { id: 1, title: "Headphones", img: assets.headphone_cat },
    { id: 2, title: "Bags", img: assets.bag_cat },
    { id: 3, title: "Watches", img: assets.watch_cat },
    { id: 4, title: "Smartphones", img: assets.smartphone_cat },
    { id: 4, title: "Laptop", img: assets.laptop_cat },
    { id: 4, title: "Water Bottle", img: assets.water_bottle_cat },
  ];
  return (
    <div className="pt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Top Categories</p>
        <div className="w-28 h-0.5 bg-[#f85606] mt-2"></div>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
        {catDetails.map((cat) => (
          <div
            key={cat.id}
            className="w-full flex flex-col items-center justify-center p-4 rounded cursor-pointer group"
          >
            <img
              src={cat.img.src}
              alt={cat.title}
              className="w-32 h-32 object-contain group-hover:-translate-y-2 transition duration-300"
            />
            <p className="text-sm md:text-base font-medium">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
