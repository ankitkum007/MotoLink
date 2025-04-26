import React, { useEffect, useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router';
import { db } from '../../../configs';
import { CarImage, CarListing } from '../../../configs/schema';
import { desc, eq } from 'drizzle-orm';
import FormatResult from '../../utils/Service.jsx'
import CarItem from '../CarItem.jsx';
import { MdDelete } from "react-icons/md";


function Mylisting() {
  const [carList, setCarList] = useState([])

  useEffect(()=>{
    GetUserCarList();
  }, [])

  const GetUserCarList = async ()=>{
    const result = await db.select().from(CarListing)
    .leftJoin(CarImage,eq(CarListing.id,CarImage.carListingId))
    .orderBy(desc(CarListing.id))

    const finalResult = FormatResult(result)
    // console.log(finalResult);

    setCarList(finalResult)
    
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl">My Listing</h2>
        <Link to={"/Add-Listing"}>
          <button className="bg-blue-700 text-xl rounded-lg flex gap-2 p-2 hover:text-yellow-300">
            <div className="pt-1">
              <IoMdAddCircleOutline />
            </div>
            Add New Listing
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-4">
        {carList.map((item, index) => (
          <div key={index}>
            <CarItem car={item} />
            <div className="bg-gray-400 rounded-lg flex justify-between">
              <Link to={'/Add-listing?mode=edit&id='+item?.id} className='w-full'>
              <button className="w-full font-semibold hover:font-bold">
                Edit
              </button>
              </Link>
              <button className="text-2xl hover:text-red-700">
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mylisting