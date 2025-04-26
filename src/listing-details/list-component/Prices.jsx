import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";

function Prices({cars}) {
  return (
    <div className='p-8 rounded-lg border shadow-sm'>
        <h2 className='text-xl font-semibold'>Price</h2>
        <h2 className='font-bold text-3xl flex'><MdCurrencyRupee className='mt-1'/>{cars?.sellingPrice}</h2>

        <button type='button' className='w-full border rounded-lg flex gap-2 items-center justify-center mt-5 text-xl bg-blue-500 size-10'><MdOutlineLocalOffer className='font-bold text-xl'/>Make an Offer Price</button>
    </div>
  )
}

export default Prices