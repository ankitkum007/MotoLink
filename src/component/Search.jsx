import React, { useState } from "react";
import { carMakers, Pricing } from "../component/DataList.jsx";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";

const SearchBar = () => {
  const [selectedCar, setSelectedCar] = useState();
  const [selectedMake, setSelectedMake] = useState();
  const [selectedPrice, setSelectedPrice] = useState();

  const handleSearch = () => {
    if (!selectedCar && !selectedMake && !selectedPrice) {
      alert("Please select at least one search criterion.");
      return;
    }
  };


  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-3 rounded-xl  shadow-md">
      <select
        className="text-base md:text-xl p-2 border rounded-full hover:bg-slate-300 w-full sm:w-auto"
        value={selectedCar}
        onChange={(e) => setSelectedCar(e.target.value)}
        
      >
        <option value="Cars">Cars</option>
        <option value="New">New</option>
        <option value="Used-Cars">Used Cars</option>
      </select>
      <select
        className="text-base md:text-xl p-2 border rounded-full hover:bg-slate-300 w-full sm:w-auto"
        value={selectedMake}
        onChange={(e) => setSelectedMake(e.target.value)}
      >
        <option value="">Car Makes</option>
        {carMakers.map((maker) => (
          <option key={maker.id} value={maker.name}>
            {maker.name}
          </option>
        ))}
      </select>

      <select
        className="text-base md:text-xl p-2 border rounded-full hover:bg-slate-300 w-full sm:w-auto"
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
      >
        <option value="">Pricing</option>
        {Pricing.map((price) => (
          <option key={price.id} value={price.amount}>
            {price.amount}
          </option>
        ))}
      </select>
    <Link to={'/search?cars='+selectedCar+'&make='+selectedMake+'&price='+selectedPrice}>
      <button 
      onClick={handleSearch} // Add the search handler here
      className="bg-blue-600 text-white text-base md:text-xl py-2 px-4 rounded-full hover:bg-blue-700 flex items-center gap-2 w-full sm:w-auto">
        <span className="mr-2">Search</span>
        <IoSearch />
      </button>
      </Link>
    </div>
  );
};

export default SearchBar;
