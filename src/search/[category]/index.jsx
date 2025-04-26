import React, { useEffect, useState } from 'react'
import Header from '../../component/Header'
import SearchBar from '../../component/Search'
import { useParams } from 'react-router'
import {db} from '../../../configs/index.js'
import { CarImage, CarListing } from '../../../configs/schema.js'
import { eq } from 'drizzle-orm'
import FormatResult from '../../utils/Service.jsx'
import CarItem from '../../component/CarItem.jsx'
import Footer from '../../component/Footer.jsx'

function SearchByCategory() {
    const {category} = useParams();
    const [carList, setCarList] = useState([]);

    useEffect(()=>{
        GetCarList();
    },[])

    const GetCarList= async()=>{
        const result = await db.select().from(CarListing)
        .innerJoin(CarImage,eq(CarListing.id,CarImage.carListingId))
        .where(eq(CarListing.category,category))

        const formateResult = FormatResult(result)
        setCarList(formateResult);
        console.log(formateResult);
        
        
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
            <h2 className='font-bold text-4xl p-10 md:px-20'>{category}</h2>
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

export default SearchByCategory