"use client";
import { FechedTypes } from "@/lib/types/FetchDataTypes";
import React, { ChangeEvent, useState } from "react";

import CardItem from "../cartitem/CardItem";

interface Props {
  info: FechedTypes[];
}

export function CardList({ info }: Props) {
  return (
    <div>
      <div className="flex justify-center flex-wrap gap-5">
        {info.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
