import React, { useState } from 'react'
import { ImCalculator } from "react-icons/im";
import { MdOutlineCurrencyRupee } from "react-icons/md";

function Calculator({cars}) {

    const[carPrice, setCarPrice]= useState(0);
    const[intrestRate, setIntrestRate]= useState(0);
    const[loanTerm, setLoanTerm]= useState(0);
    const[downPayment, setDownPayment]= useState(0);
    const[monthlyPayment, setMonthlyPayment]= useState();

    const CalculatePayment= ()=>{
        const Principal= carPrice-downPayment;
        const MonthlyInterestRate=intrestRate/1200;

        const MonthlyPayment=(Principal*MonthlyInterestRate*Math.pow(1+MonthlyInterestRate,loanTerm))/
        (Math.pow(1+MonthlyInterestRate, loanTerm)-1);

        setMonthlyPayment(MonthlyPayment.toFixed(2));
        
         
    }

  return (
    <div className="p-8 border rounded-xl shadow-sm mt-4">
      <h1 className="font-semibold text-2xl"> Financial Calculator</h1>
      <div className="  mt-3">
        <div className='flex gap-5 mt-3'>
          <div className=' w-full'>
            <h2 className="font-mono flex">Price<MdOutlineCurrencyRupee className='font-bold mt-1'/></h2>
            <input
                onChange={(e)=>setCarPrice(e.target.value)}
              type="Number"
              placeholder="Amount"
              className="w-full p-2 border mt-1 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='w-full'>
            <h2 className="font-mono">Interest Rate</h2>
            <input
                onChange={(e)=>setIntrestRate(e.target.value)}
              type="Number"
              placeholder="Interest-Rate"
              className=" w-full p-2 border mt-1 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className='flex gap-5 mt-3'>
          <div className='w-full'>
            <h2 className="font-mono">Loan Term (Months)</h2>
            <input
                onChange={(e)=>setLoanTerm(e.target.value)}
              type="Number"
              placeholder="Months"
              className=" w-full p-2 border mt-1 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='w-full'>
            <h2 className="font-mono">Down Payment</h2>
            <input
                onChange={(e)=>setDownPayment(e.target.value)}
              type="Number"
              placeholder="Amount"
              className="w-full p-2 border mt-1 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        {monthlyPayment>=0 && <h2 className=' flex text-2xl mt-5'>Monthly Payment : <span className='text-3xl font-medium flex'>{monthlyPayment} <MdOutlineCurrencyRupee className='font-semibold mt-1'/></span></h2>}
        <button
        className='w-full border rounded-lg flex gap-2 items-center justify-center mt-5 text-xl bg-blue-500 size-10'
         type="button"
         onClick={CalculatePayment}
         ><ImCalculator className='font-bold text-x'/>
         Calculate
         </button>
      </div>
    </div>
  );
}

export default Calculator