import { useState } from "react"
import Reason from "./Reason";
import Amount from "./Amount";
import Owner from "./Owner";



const Charity = () => {
  const [displayCurrentView, setDisplayCurrentView] = useState<boolean>(true)
  const [displayOwner, setDisplayOwner] = useState<boolean>(false);
  const [displayAmount, setDisplayAmount] = useState<boolean>(false);


  const nextFlow = (event:any) => {
       setDisplayCurrentView(false);
       setDisplayAmount(true);
   }
 
   return(
    <div>
      {displayOwner && <Owner/>}
      {displayCurrentView &&    <article className="owner_container md:max-w-[70%] md:mx-auto lg:mx-0">
        <div className="list text-[#5E6364] text-sm">
          <span>2</span> of <span>4</span>
        </div>
        <h1 className="title text-[#1F1F1F] font-medium mt-3">
         Please select a Charity of your choice
        </h1>
        <div className="owner my-5 text-sm mb-9 grid sm:grid-cols-2 gap-3">
          <img 
          className="w-full  sm:h-[210px] shadow-sm my-1 mr-3 rounded-[8px] border-2 border-black"
          src="/human-right.png" alt="Human right charity banner"/>

          <img 
          className="w-full sm:h-[210px]  shadow-sm my-1 mr-3 rounded-[8px]"
          src="/red-cross.png" alt="Human right charity banner"/>

          <img 
          className=" w-full sm:h-[210px] shadow-sm my-1 mr-3 rounded-[8px]"
          src="/amnesty.png" alt="Human right charity banner"/>

          <img 
          className="w-full sm:h-[210px] shadow-sm my-1  mr-3 rounded-[8px]"
          src="/human-right.png" alt="Human right charity banner"/>
        </div> 
        <div className="buttons flex justify-between">
        <button 
          onClick={() => {
            setDisplayCurrentView(false);
            setDisplayOwner(true);
          }}
          className="back border-2 py-2 px-4 rounded-md font-medium hover:bg-gray-400  hover:text-white">
            Back
        </button>

        <button 
          onClick={nextFlow}
          className="continue py-2 px-4 rounded-md font-medium bg-[#0F8E4B] text-white hover:text-green-100">
            Continue
          </button>
        </div>
      </article>}

      {displayAmount && <Amount/>}
    </div>

   )
 }
   
 export default Charity;