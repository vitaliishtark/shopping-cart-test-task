"use client";
import React, { useEffect, useState, ChangeEvent } from "react";
import { FechedTypes } from "@/lib/types/FetchDataTypes";
import { GetData } from "@/lib/getdata/GetData";

import Image from "next/image";
import search from "@/public/search.svg";
import { CardList } from "@/components/cartlist/CardList";

const Page = () => {
  const [info, setInfo] = useState<FechedTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await GetData.getAllData();
        setInfo(data);
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter items based on search input
  const filteredItemList = info.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  // Paginate based on the entire dataset
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItemList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
    setCurrentPage(1); // Reset current page when search query changes
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="flex justify-center mb-6">
            <div className="flex border border-black-400 rounded-lg p-1 bg-white">
              <input
                className="rounded-l-lg max-w-[100%] pl-2 focus:outline-none  "
                placeholder="What you are looking for ..."
                onChange={handleSearchChange}
              />
              <span className="bg-white pr-2 rounded-r-lg  ">
                <Image width={25} height={25} src={search} alt="CartImg" />
              </span>
            </div>
          </div>
          <CardList info={currentItems} />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredItemList.length} // Pass the total length of the filtered items
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default Page;

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}) => {
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);

  return (
    <nav>
      <ul className="flex flex-row justify-center gap-1">
        {Array.from({ length: pageNumbers }, (_, index) => index + 1).map(
          (number) => (
            <li key={number} className="">
              <a
                onClick={() => paginate(number)}
                href="#"
                className={`page-link ${
                  currentPage === number ? "active" : ""
                }`}
              >
                {number}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
