import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/hotel/getLocation");
    return response.data;
  };