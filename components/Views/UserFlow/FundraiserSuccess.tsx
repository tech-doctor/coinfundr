import Link from  'next/link';
import  React, {useState} from 'react';


const FundraiserSuccess = () => {
  
  return(
    <div className="success_container md:max-w-[70%] md:mx-auto lg:mx-0">
      <h1 className="title text-[#1F1F1F] font-medium mt-3">
        Congratulation! You've successfully created your fundraiser.
      </h1>
      <div className="button mt-10">
        <Link href={"/account"}>
          <button className="view_fundraiser py-2 px-4 rounded-md font-medium bg-[#0F8E4B] text-white hover:text-green-100">
            View Fundraiser
          </button>
        </Link>
      </div>
    </div>
  )
 }
   
 export default FundraiserSuccess;