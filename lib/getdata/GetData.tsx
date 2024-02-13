import { FechedTypes } from "../types/FetchDataTypes";
import axios from "axios";

export const GetData = {
  getAllData: async (): Promise<FechedTypes[]> => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return an empty array in case of an error
    }
  },
  getById: async (id: number): Promise<FechedTypes | undefined> => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/` + id
      );
      return response.data as FechedTypes;
    } catch (error) {
      console.error("Eror fetching product by id :", error);
    }
  },
};
