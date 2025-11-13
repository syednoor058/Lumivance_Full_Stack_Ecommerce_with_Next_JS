"use client";
import React, { useEffect, useState } from "react";
import { assets, BagIcon, CartIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <nav className="w-full text-gray-700 bg-white shadow-md">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex items-center justify-center md:justify-between bg-[#f85606] text-white px-4 md:px-14 lg:px-20 py-1.5">
          <div className="flex flex-1 gap-3 text-xs font-light justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <Image
                src={assets.mail_white_icon}
                alt="user icon"
                className="w-4 h-4"
              />
              syednoor058@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={assets.phone_white_icon}
                alt="user icon"
                className="w-4 h-4"
              />
              +880 1782 734573
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#">
              <Image
                src={assets.facebook_icon}
                alt="facebook_icon"
                className="h-5 w-5"
              />
            </a>
            <a href="#">
              <Image
                src={assets.twitter_icon}
                alt="twitter_icon"
                className="h-5 w-5"
              />
            </a>
            <a href="#">
              <Image
                src={assets.instagram_icon}
                alt="instagram_icon"
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-4 md:px-14 lg:px-20 py-3">
          <Image
            className="cursor-pointer w-32 md:w-40 relative z-[1501] transition  ease-in-out"
            onClick={() => router.push("/")}
            src={openMenu ? assets.logo_white : assets.logo}
            alt="logo"
          />

          <div className="flex items-center justify-center gap-4 lg:gap-10 max-md:hidden">
            <Link href="/" className="hover:text-gray-900 transition">
              Home
            </Link>
            <Link
              href="/all-products"
              className="hover:text-gray-900 transition"
            >
              Shop
            </Link>
            <Link href="/" className="hover:text-gray-900 transition">
              About Us
            </Link>
            <Link href="/" className="hover:text-gray-900 transition">
              Contact
            </Link>

            {isSeller && (
              <button
                onClick={() => router.push("/seller")}
                className="text-xs border px-4 py-1.5 rounded-full"
              >
                Seller Dashboard
              </button>
            )}
          </div>
          <ul className="hidden md:flex items-center gap-4 ">
            <Image
              className="w-4 h-4"
              src={assets.search_icon}
              alt="search icon"
            />
            {user ? (
              <>
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="Cart"
                      labelIcon={<CartIcon />}
                      onClick={() => router.push("/cart")}
                    />
                  </UserButton.MenuItems>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="My orders"
                      labelIcon={<BagIcon />}
                      onClick={() => router.push("/my-orders")}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              </>
            ) : (
              <button
                onClick={openSignIn}
                className="flex items-center gap-2 hover:text-gray-900 transition"
              >
                <Image src={assets.user_icon} alt="user icon" className="w-5 h-5" />
                Account
              </button>
            )}
          </ul>

          <div className="flex items-center md:hidden gap-3">
            {isSeller && (
              <button
                onClick={() => router.push("/seller")}
                className="text-xs border px-4 py-1.5 rounded-full"
              >
                Seller Dashboard
              </button>
            )}
            {user ? (
              <>
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="Cart"
                      labelIcon={<CartIcon />}
                      onClick={() => router.push("/cart")}
                    />
                  </UserButton.MenuItems>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="My orders"
                      labelIcon={<BagIcon />}
                      onClick={() => router.push("/my-orders")}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              </>
            ) : (
              <button
                onClick={openSignIn}
                className="flex items-center gap-2 hover:text-gray-900 transition"
              >
                <Image
                  src={assets.user_icon}
                  alt="user icon"
                  className="w-5 h-5"
                />
              </button>
            )}
            <div className="flex md:hidden relative z-[2000]">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="flex flex-col justify-center items-center gap-1"
              >
                <div
                  className={`w-5 h-0.5  transition-transform duration-300 ease-in-out ${
                    openMenu
                      ? "rotate-45 translate-y-1.5 bg-white"
                      : "bg-gray-600"
                  }`}
                />
                <div
                  className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${
                    openMenu ? "opacity-0" : "opacity-100"
                  }`}
                />
                <div
                  className={`w-5 h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out ${
                    openMenu
                      ? "-rotate-45 -translate-y-1.5 bg-white"
                      : "bg-gray-600"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed flex md:hidden flex-col justify-between gap-10 top-0 left-0 w-screen h-screen bg-[#f85606] transition-transform duration-300 ease-in-out ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } z-[1500] pb-4`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex items-center justify-center md:justify-between bg-[#f85606] text-white px-4 md:px-14 lg:px-20 py-4"></div>
          <div className="w-full flex items-center justify-between px-4 md:px-14 lg:px-20 py-3">
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4 md:px-14 lg:px-20 text-white text-4xl uppercase font-extrabold">
          <Link
            href="/"
            className="hover:text-gray-900 transition"
            onClick={() => setOpenMenu(!openMenu)}
          >
            Home
          </Link>
          <Link
            href="/all-products"
            className="hover:text-gray-900 transition"
            onClick={() => setOpenMenu(!openMenu)}
          >
            Shop
          </Link>
          <Link
            href="/"
            className="hover:text-gray-900 transition"
            onClick={() => setOpenMenu(!openMenu)}
          >
            About Us
          </Link>
          <Link
            href="/"
            className="hover:text-gray-900 transition"
            onClick={() => setOpenMenu(!openMenu)}
          >
            Contact
          </Link>

          {isSeller && (
            <button
              onClick={() => router.push("/seller")}
              className="text-xs border px-4 py-1.5 rounded-full"
            >
              Seller Dashboard
            </button>
          )}
        </div>
        <div className="flex items-center gap-3 px-4 md:px-14 lg:px-20">
          <a href="#">
            <Image
              src={assets.facebook_icon}
              alt="facebook_icon"
              className="h-6 w-6"
            />
          </a>
          <a href="#">
            <Image
              src={assets.twitter_icon}
              alt="twitter_icon"
              className="h-6 w-6"
            />
          </a>
          <a href="#">
            <Image
              src={assets.instagram_icon}
              alt="instagram_icon"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
