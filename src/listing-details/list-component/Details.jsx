import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { GiGearStick } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";

function Details({ cars }) {
  return (
    <div>
       {cars?.listingTitle? <div>
            <h2 className="font-bold text-4xl">{cars?.listingTitle}</h2>
            <p className="text-sm">{cars?.tagline}</p>
        <div className="flex gap-8 mt-4">
          <div className="flex gap-4 items-center bg-blue-300 rounded-full p-2 px-3">
            <FaCalendarAlt className="text-xl text-pretty" />
            <h2 className="text-pretty text-sm">{cars?.year}</h2>
          </div>
          <div className="flex gap-4 items-center bg-blue-300 rounded-full p-2 px-3">
            <IoSpeedometer className="text-xl text-pretty" />
            <h2 className="text-pretty text-sm">{cars?.mileage}</h2>
          </div>
          <div className="flex gap-4 items-center bg-blue-300 rounded-full p-2 px-3">
            <GiGearStick className="text-xl text-pretty" />
            <h2 className="text-pretty text-sm">{cars?.transmission}</h2>
          </div>
          <div className="flex gap-4 items-center bg-blue-300 rounded-full p-2 px-3">
            <BsFuelPumpFill className="text-xl text-pretty" />
            <h2 className="text-pretty text-sm">{cars?.transmission}</h2>
          </div>
        </div>
      </div>:
       <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-pulse"><h2 className="flex justify-center">loading....</h2></div>}



    </div>
  );
}

export default Details;
