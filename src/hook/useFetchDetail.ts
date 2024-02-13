import { useEffect, useState } from "react";
import { Brewery } from "../misc/type";
import axios, { AxiosError, AxiosResponse } from "axios";

export function useFetchDetail(url: string) {
  //state
  const [brewery, setBrewery] = useState<Brewery | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response: AxiosResponse<Brewery>) => {
        setBrewery(response.data);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);
  return { brewery, loading, error };
}
