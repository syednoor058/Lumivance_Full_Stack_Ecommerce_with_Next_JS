"use client";
import React from "react";
import { assets, BagIcon, CartIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    <nav className="w-full px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <div className="flex flex-col gap-7 justify-center items-center">
        <div className="w-full flex items-center justify-between">
          <Image
            className="cursor-pointer w-28 md:w-32"
            onClick={() => router.push("/")}
            src={assets.logo}
            alt="logo"
          />
          <div className="hidden md:flex items-center gap-3">
            <a href="#">
              <Image src={assets.facebook_icon} alt="facebook_icon" />
            </a>
            <a href="#">
              <Image src={assets.twitter_icon} alt="twitter_icon" />
            </a>
            <a href="#">
              <Image src={assets.instagram_icon} alt="instagram_icon" />
            </a>
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
                <Image src={assets.user_icon} alt="user icon" />
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
                <Image src={assets.user_icon} alt="user icon" />
                Account
              </button>
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-4 lg:gap-10 max-md:hidden">
          <Link href="/" className="hover:text-gray-900 transition">
            Home
          </Link>
          <Link href="/all-products" className="hover:text-gray-900 transition">
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
      </div>
    </nav>
  );
};

export default Navbar;
