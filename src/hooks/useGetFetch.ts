import toastMessage from "@/helpers/toastMessage";
import axios from "axios";
import { useState } from "react";

function useGetFetch() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const fetchData = async (url: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      setData(response.data);
    } catch (error: any) {
      toastMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, fetchData };
}

export default useGetFetch;
