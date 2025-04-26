import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { db } from '../../configs';
import { CarImage, CarListing } from '../../configs/schema';
import { eq } from 'drizzle-orm';
import FormatResult from '../utils/Service.jsx'
import Header from '../component/Header.jsx';
import SearchBar from '../component/Search.jsx';
import CarItem from '../component/CarItem';
import Footer from '../component/Footer.jsx';

function SearchByOption() {
    const [searchParam] = useSearchParams();
    const [carList, setCarList] = useState([]);

    const condition=searchParam.get('cars');
    const make=searchParam.get('make');
    const price=searchParam.get('price');

    useEffect(()=>{
        GetCarList();
    },[])

    const GetCarList= async()=>{
        const result = await db.select().from(CarListing)
        .innerJoin(CarImage,eq(CarListing.id,CarImage.carListingId))
        .where(condition!=undefined && eq(CarListing.condition,condition))
        .where(make!=undefined && eq(CarListing.make,make))

        const resp = FormatResult(result);
        console.log(resp);
        setCarList(resp)
        
        
    }
  return (
    <div className='max-w-7xl mx-auto relative'>
        <div>
            <Header/>
        </div>
        <div className=' bg-black flex justify-center items-center h-100 h-28'>
            <SearchBar/>
        </div>
        <div>
            <h2 className='font-bold text-4xl p-10 md:px-20'>Search Cars</h2>
            {/* List of carLIst */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7'>
                {carList?.length>0? carList.map((item, index)=>(
                    <div key={index}>
                        <CarItem car={item}/>
                    </div>
                )):
                [1,2,3,4].map((index)=>(
                    <div key={index} className='h-[320px] rounded-t-xl bg-slate-300 animate-pulse'>
                       <h1 className='flex justify-center text-slate-500 mt-10'> Sorry! Not available</h1>
                    </div>
                ))
                }
            </div>
        </div>

        <div className='mt-14'>
            <Footer/>
        </div>
       
    </div>
  )
}

export default SearchByOption