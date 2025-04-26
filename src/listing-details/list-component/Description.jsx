import React from 'react'

function Description({cars}) {
  return (
 <div>
     {cars?.listingDescription?<div className='p-10 rounded-b-xl bg-white shadow-md mt-6 border'>
        <h2 className='font-medium text-2xl'>Description</h2>
        <p className='my-2'>{cars?.listingDescription}</p>
    </div>:
    <div className='w-full h-[250px] bg-slate-200 animate-pulse rounded-lg'><h2 className="flex justify-center">loading....</h2></div>}

    </div>
  )
}

export default Description