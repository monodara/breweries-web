import { useEffect, useState } from "react";
import { Brewery } from "../misc/type";
import axios, { AxiosError, AxiosResponse } from "axios";

export function useFetch(url: string) {
  //state
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response: AxiosResponse<Brewery[]>) => {
        setBreweries(response.data);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);
  return { breweries, loading, error };
}
