"use client";
import { CartProduct } from "@/components/cartproduct/CartProduct";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const cartItems = useSelector((state) => state.AllCarts);
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl font-bold">
        Enter your info to proceed ordering your goods
      </h1>
      <div className="bg-white flex-col flex items-center text-center">
        <div className="flex flex-col max-w-[250px] justify-center">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="....@gmail.com" />
          <input type="tel" placeholder="+380671118223" />
          <button>Send</button>
        </div>

        <div className="">
          {cartItems.length > 0 ? (
            cartItems.map((item, i) => {
              return <CartProduct cartItem={item} key={i} />;
            })
          ) : (
            <h1 className="text-2xl font-bold flex justify-center p-3 ">
              Take something to the cart
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
