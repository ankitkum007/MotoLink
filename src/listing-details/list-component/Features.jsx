import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

function Features({features }) {
    console.log("features =>",features );
    
  return (
    <div>
        <div className='p-10 bg-white rounded-xl border shadow-md mt-6'>
            <h2 className='font-medium text-2xl'>Features</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {features ? (
                        Object.entries(features).map(([key, value]) => (
                            <div className='flex items-center gap-3 p-2 text-black' key={key}>
                              <IoMdCheckmark className='text-sm rounded-full bg-blue-500'/>
                                <h2>{key}</h2>                             
                            </div>
                        ))
                    ) : (
                        <p>Loading features...</p>
                    )}
               </div>     
                </div>
        </div>
  )
}

export default Features