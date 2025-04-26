import React, { useEffect, useState } from "react";
import CartData from "../utils/CartData";
import CarItem from "../component/CarItem.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { db } from '../../configs';
import { CarImage, CarListing } from '../../configs/schema.js';
import { desc, eq } from 'drizzle-orm';
import FormatResult from '../utils/Service.jsx'

function MostSearch() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for larger screens
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // Devices with a width of 1024px or less
        settings: {
          slidesToShow: 3, // Show 3 items
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets or smaller devices
        settings: {
          slidesToShow: 2, // Show 2 items
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Small devices (mobile phones)
        settings: {
          slidesToShow: 1, // Show 1 item
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  // console.log(CartData.CarLists);
  const [carList, setCarList] = useState([])
  useEffect(()=>{
    GetCarList();
  },[])

  const GetCarList = async()=>{
    const result = await db.select().from(CarListing)
        .leftJoin(CarImage,eq(CarListing.id,CarImage.carListingId))
        .orderBy(desc(CarListing.id))
        .limit(10)
    
        const finalResult = FormatResult(result)
        // console.log(finalResult);

        setCarList(finalResult)
  }

  return (
    <div className="mt-20">
  <h1 className="font-bold text-3xl text-center mb-4">Most Search Cars</h1>
  <div className=" mt-6 p-3 sm:p-5"> {/* Adjust padding for smaller screens */}
    <Slider className="max-w-6xl mx-auto" {...settings}>
      {carList.map((item, index) => (
        <div key={index}>
          <CarItem car={item} />
        </div>
      ))}
    </Slider>
  </div>
</div>

  );
}

export default MostSearch;
