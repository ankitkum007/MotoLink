import React from "react";
import carIcon from "../assets/car-icon.jpg";
import Nav from "./Nav";
import MenuList from "./MenuList";

function Header() {
  return (
    <nav>
      <div className="flex justify-between items-center shadow-sm p-6 text-white bg-black top-0">
        <div className="flex justify-center items-center gap-1">
          <img className="w-[40px] h-[40px] rounded-3xl" src={carIcon} alt="car_icon" />
          <h1 className="text-2xl font-bold">MotoLink</h1>
        </div>
        <div className="hidden md:block">
          <Nav className="flex flex-row gap-16 justify-center items-center" />
        </div>
        <MenuList />
      </div>
    </nav>
  );
}

export default Header;
