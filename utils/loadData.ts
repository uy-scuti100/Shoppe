// utils/loadData.js
import { Product } from "@/types/type";
import * as fs from "fs/promises";

const loadData = async (filePath: any): Promise<any> => {
   try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
   } catch (error) {
      console.error("Error loading data:", error);
      return null;
   }
};

export default loadData;
