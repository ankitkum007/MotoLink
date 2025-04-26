import React from 'react'
import CarSpecification from '../../utils/CarSpecification'
import { FaDiaspora } from "react-icons/fa";

function Specification({cars}) {
  return (
    <div className='p-8 rounded-xl border shadow-sm mt-7'>
        <h2 className='font-semibold text-2xl'>Specifications</h2>
        { cars? CarSpecification.map((item, index)=>(
            <div key={index} className='mt-5 flex items-center justify-between'>
                <h2 className='flex gap-3'><FaDiaspora className='font-semibold text-blue-800 mt-1'/>{item?.label}</h2>
                <h2>{cars?.[item?.name]}</h2>
            </div>
        )):
        <div className='w-full h-[500px] rounded-lg bg-slate-200 animate-pulse'>
                <h2 className='flex justify-center items-center'>Loading.....</h2>
        </div>}
    </div>
  )
}

export default Specification