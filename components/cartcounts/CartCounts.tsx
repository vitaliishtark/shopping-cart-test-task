"use client";

import React from "react";
import { useSelector } from "react-redux";

export default function CartCounts() {
  const cartItems = useSelector((store) => store.AllCarts);

  const itemCount = cartItems.length;

  return <span>{itemCount}</span>;
}
