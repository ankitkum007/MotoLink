import React, { useEffect, useState } from 'react'
import Header from '../../component/Header'
import Details from '../list-component/Details'
import { useParams, useSearchParams } from 'react-router'
import { db } from '../../../configs';
import { CarImage, CarListing } from '../../../configs/schema';
import { eq } from 'drizzle-orm';
import FormatResult from '../../utils/Service.jsx'
import ImageGallery from '../list-component/ImageGallery.jsx'
import Description from '../list-component/Description.jsx';
import Features from '../list-component/Features.jsx';
import Prices from '../list-component/Prices.jsx';
import Specification from '../list-component/Specification.jsx';
import Footer from '../../component/Footer.jsx'
import Calculator from '../list-component/Calculator.jsx';
import MostSearch from '../../component/MostSearch.jsx';

function ListingDetail() {
    const {id}= useParams();
    const [cars, setCars] = useState();

    useEffect(()=>{
        GetCarDetails();
    },[])

    const GetCarDetails= async()=>{
        const result = await db.select().from(CarListing)
        .innerJoin(CarImage,eq(CarListing.id,CarImage.carListingId))
        .where(eq(CarListing.id, id));

        const resp = FormatResult(result)
        setCars(resp[0]);
        console.log('resp of selected data-->',resp);
    }

  return (
    <div className='max-w-7xl mx-auto relative'>
        <Header/>
        <div className='p-10 md:px-10'>
            <Details cars={cars}/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 w-full mt-4 gap-5'>
            {/* left */}
            <div className='md:col-span-2'>
                <ImageGallery cars={cars}/>
                <Description cars={cars}/>
                <Features features={cars?.features}/>
                <Calculator cars={cars}/>
            </div>
            {/* right */}
            <div className=''>
                <Prices cars={cars}/>
                <Specification cars={cars}/>
                
            </div>
        </div>
        <MostSearch/>
        <div className='mt-16'>
        <Footer/>
        </div>
    </div>
  )
}

export default ListingDetail