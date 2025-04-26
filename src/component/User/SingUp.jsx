import React from 'react'
import { SignUp } from "@clerk/clerk-react";
import Header from '../Header';


function SingUp() {
  return (
    <div className='max-w-7xl mx-auto relative'>
        <Header/>
      <div className="flex justify-center" forceRedirectUrls='/profile'>
        <SignUp mode="model" />
      </div>
    </div>
  );
}

export default SingUp