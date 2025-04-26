
import React, { useEffect, useState } from 'react';
import Header from '../component/Header.jsx';
import { db } from '../../configs/index.js';
import { CarImage, CarListing } from '../../configs/schema.js';
import { eq } from 'drizzle-orm';
import Cars from './Cars';
import Footer from '../component/Footer.jsx';

function NewCars() {
  const [newCars, setNewCars] = useState([]);

  useEffect(() => {
    fetchNewCars();
  }, []);

  const fetchNewCars = async () => {
    try {
      const result = await db
        .select()
        .from(CarListing)
        .innerJoin(CarImage, eq(CarListing.id, CarImage.carListingId))
        .where(eq(CarListing.condition, 'New'));

      console.log(' DB data:', result); 
       const dA = setNewCars(result || []); 
       
    } catch (error) {
      console.error('Error fetching new cars:', error);
      setNewCars([]); 
    }
  };

  return (
    <div className="max-w-7xl mx-auto relative">
      <Header />
      <div>
        <h2 className='font-bold text-2xl mt-3'>New Cars Listing</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
        {newCars.length > 0 ? (
          newCars.map((item, index) => (
            <div key={index}>
              <Cars cars={item} /> 
            </div>
          ))
        ) : (
          [1, 2, 3, 4].map((index) => (
            <div key={index} className="h-[320px] rounded-t-xl bg-slate-300 animate-pulse">
              <h1 className="flex justify-center text-slate-500 mt-10">Sorry! Not available</h1>
            </div>
          ))
        )}
      </div>
      <div className='mt-5'>     
         <Footer/>
      </div>
    </div>
  );
}

export default NewCars;
