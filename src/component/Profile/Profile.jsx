import React from 'react'
import Header from '../Header.jsx'
import Tab from './Tab.jsx'


function Profile() {
  return (
    <div className='max-w-7xl mx-auto relative'>
        <Header/>
        <div className='px-10 md:px-20 my-10'>
            <Tab/>
            
        </div>
    </div>
  )
}

export default Profile