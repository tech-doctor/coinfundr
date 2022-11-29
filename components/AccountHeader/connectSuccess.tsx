import React, {useState} from 'react';


const ConnectSuccess = () => {
  
  return (
    <div className="success_popup absolute right-5 w-[200px] z-[10] bg-white top-[65px] lg:top-[75px] shadow-[1px_1px_40px_-2px_#BEBEBE] rounded-xl px-5  font-medium">
        <div className=' text-center text-[#0A8544] text-sm pt-7 pb-12'>
        <img 
        className='text-center mx-auto w-[50px] mb-5'
        src='/success.png' alt='image containing success icon'/>
          Successfully connected <br/> to <br/> wallet
        </div>
      </div>
  )
}


export default ConnectSuccess;