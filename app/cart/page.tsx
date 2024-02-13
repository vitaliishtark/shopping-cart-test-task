"use client";
import { CartProduct } from "@/components/cartproduct/CartProduct";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const cartItems = useSelector((state) => state.AllCarts);

  const totalPrice = cartItems
    .reduce((acc, currentItem) => {
      return acc + currentItem.price * currentItem.quantity;
    }, 0)
    .toFixed(2);
  const totalCount = cartItems.reduce((acc, currentCount) => {
    return acc + currentCount.quantity;
  }, 0);

  console.log(cartItems);
  return (
    <div>
      <div className="pl-[20px] flex flex-row justify-around max-md:flex-col  max-md:items-center">
        <div>
          <h1 className="text-2xl font-bold pb-[20px]">Cart</h1>
          <div className="bg-white max-w-[500px] rounded-[20px] ">
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
        <div className="text-xl font-semibold bg-white max-h-[150px] max-w-[400px] rounded-[20px] flex flex-col items-center max-sm:mt-[15px]">
          <h2 className="m-[10px]">Total Price : {totalPrice}</h2>
          <h2 className="m-[10px]">Total Count : {totalCount}</h2>

          <Link href="/orderpage">
            <button className="m-[5px] bg-sky-400 rounded-[15px] p-2 hover:bg-sky-600 active:bg-sky-800">
              Order goods
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
