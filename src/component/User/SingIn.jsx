import React from 'react'
import { SignIn } from "@clerk/clerk-react";
import Header from '../Header';


function SingIn() {
  return (
    <div className='max-w-7xl mx-auto relative'>
        <Header/>
    <div className='flex justify-center' forceRedirectUrl="/profile">
        <SignIn  mode="model"/>
    </div>
    </div>
  )
}

export default SingIn