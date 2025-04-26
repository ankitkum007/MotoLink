import React from 'react'
import {categorylist} from '../component/DataList.jsx'
import { Link } from 'react-router'

function Category() {
  return (
    <div className='mt-16 lg:mt-[480px]'>
        <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-10 px-18'>
            {categorylist.map((category, index) =>(
               <Link to={'/search/'+category.name} key={index}>
                <div key ={index} className='border rounded-xl p-2 items-center flex flex-col hover:shadow-md cursor-pointer'>
                    <img src={category.icon} width={55} height={55}/>
                    <h2>{category.name}</h2>
                </div>
                </Link>
           ) )}
        </div>
    </div>
  )
}

export default Category