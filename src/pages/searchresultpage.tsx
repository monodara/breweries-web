import React from "react";
import { useSearchParams } from "react-router-dom";
import Breweries from "../components/breweries/Breweries";
import Search from "../components/search/Search";

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const alignment = searchParams.get("by_alignment");
  const searchKeyword = searchParams.get("searchKeyword");

  return (
    <div>
      <Search />
      <Breweries urlSuffix={`?by_${alignment}=${searchKeyword}`} />
    </div>
  );
}
