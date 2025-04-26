import React from "react";
import { BsFuelPumpFill } from "react-icons/bs";
import { IoSpeedometer } from "react-icons/io5";
import { GiGearStick } from "react-icons/gi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Link } from "react-router";
import { MdOutlineCurrencyRupee } from "react-icons/md";

function CarItem({ car }) {
  return (

    <div className="rounded-t-xl bg-white border-black border-2 hover:shadow-md cursor-pointer">
      <img className="rounded-t-xl h-[180px] object-cover" src={car?.images[0]?.imageUrl} width={300} height={250} />
      <h2 className="font-bold text-black text-lg mb-2 pl-4">{car?.listingTitle}</h2>
      <hr className="border-black border-1" />
      <div className="grid grid-cols-3 mt-5" >
        <div className="flex flex-col items-center">
          <BsFuelPumpFill className="text-lg mb-2"/>
          <h2>{car?.mileage}Miles</h2>
        </div>
        <div className="flex flex-col items-center">
          <IoSpeedometer  className="lg mb-2"/>
          <h2>{car?.fuelType}</h2>
        </div>
        <div className="flex flex-col items-center">
          <GiGearStick className="lg mb-2"/>
          <h2>{car?.transmission}</h2>
        </div>
      </div>
      <hr className="border-black border-1"/>
       <div className="flex items-center justify-between p-3">
        <h2 className="font-bold text-xl flex"><MdOutlineCurrencyRupee className="font-bold mt-1"/> {car?.sellingPrice}</h2>
        <Link to={'/Listing-deatils/'+car?.id}>
         <h2 className="text-black text-lg flex items-center font-semibold hover:text-blue-600"> View Details <MdOutlineOpenInNew /></h2>
         </Link>
       </div>
    </div>
  
  
  );
}

export default CarItem;
