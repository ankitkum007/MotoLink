import { BsMenuButtonWideFill } from "react-icons/bs";
import React, { useState } from "react";
import Nav from "./Nav";

const MenuList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <div onClick={toggleNavbar}>
        <BsMenuButtonWideFill className="text-5xl" />
      </div>
      {isOpen && (
        <Nav className="flex flex-col gap-3 text-white" />
      )}
    </div>
  );
};

export default MenuList;
