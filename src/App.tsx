import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Breweries from "./components/breweries/Breweries";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BreweryDetails from "./components/brewerydetails/BreweryDetails";
import Search from "./components/search/Search";
import SearchResult from "./pages/searchresultpage";
import ContactForm from "./components/contact/ContactForm";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/allbreweries"
          element={<Breweries urlSuffix="" />}
        ></Route>
        <Route path="/breweries/:id" element={<BreweryDetails />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/breweries" element={<SearchResult />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
