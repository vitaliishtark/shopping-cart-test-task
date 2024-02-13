import Image from "next/image";
import React from "react";
import trashcan from "@/public/trashcan.svg";
import { useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeFromCart,
} from "@/redux/slices/CartSlice";
import toast from "react-hot-toast";

export const CartProduct = ({ cartItem }) => {
  console.log(cartItem);
  const dispatch = useDispatch();
  function deleteFromCart(cartID) {
    dispatch(removeFromCart(cartID));
    toast.success("Deleted successfully");
  }
  function Itemincrement(cartID) {
    dispatch(incrementItem(cartID));
  }
  function Itemdecrement(cartID) {
    dispatch(decrementItem(cartID));
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center  rounded-[20px]">
        <div className="flex flex-row items-center justify-between w-[500px] p-[20px] max-sm:flex-col max-sm:max-w-[300px]">
          <Image
            src={cartItem.image}
            width={150}
            height={150}
            alt={cartItem.title}
          />
          <h1 className="font-sm max-w-[100px]">{cartItem.title}</h1>
          <div className="flex flex-col items-center gap-1">
            <h3>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                currencyDisplay: "narrowSymbol",
              }).format(cartItem.price)}
            </h3>
            <div className="flex flex-row gap-2 items-center">
              <button
                onClick={() => Itemdecrement(cartItem.id)}
                className="text-xl font-bold p-1 hover:cursor-pointer hover:text-red-700"
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={() => Itemincrement(cartItem.id)}
                className="text-xl font-bold p-1 hover:cursor-pointer hover:text-red-700"
              >
                +
              </button>
            </div>
          </div>
          <button
            className="max-w-[19px] "
            onClick={() => deleteFromCart(cartItem.id)}
          >
            <Image src={trashcan} width={40} height={40} alt="trashcan"></Image>
          </button>
        </div>
      </div>
    </div>
  );
};
