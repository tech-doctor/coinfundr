import { useState } from "react"
import Reason from "./Reason";
import Amount from "./Amount";
import Charity from "./Charity";

const owner = [
  {
    name: 'Self',
    info: 'Create a fundraiser for yourself'
  },
  {
    name: 'Charity',
    info: 'Create a fundraiser for non profit of your choice'
  }
]


const Owner = () => {
  const [charity, setCharity] = useState(false);
  const [selectCharity, setSelectCharity] = useState(false);
  const [displayCurrentView, setDisplayCurrentView] = useState<boolean>(true)
  const [displayReason, setDisplayReason] = useState<boolean>(false);
  const [displayAmount, setDisplayAmount] = useState<boolean>(false);


  const selectOwner = (event:any) => {
    const parentElementAccessKey = event.target.parentElement.accessKey;
    const accessKey = event.target.accessKey;
    if(parentElementAccessKey || accessKey === "Charity") {
      //console.log('Got it')
      setCharity(true)
    }
  }

  const nextFlow = (event:any) => {
    if(charity === true){
      setSelectCharity(true)
    }
    else{
    setDisplayCurrentView(false);
    setDisplayAmount(true);
    }
  }
 
   return(
    <div>
      {displayReason && <Reason/>}
      {displayCurrentView &&   !selectCharity && 
      <article className="owner_container md:max-w-[70%] md:mx-auto lg:mx-0">
        <div className="list text-[#5E6364] text-sm">
          <span>2</span> of <span>4</span>
        </div>
        <h1 className="title text-[#1F1F1F] font-medium mt-3">
          Who are you fundraising for?
        </h1>
       <div className="owner my-5 text-sm mb-9">
          {owner.map((owner,i) => (
            <div key = {i}
            onClick = {selectOwner}
            accessKey = {owner.name}
              className="border-2 py-2 px-5 rounded-2xl border-[#D9D9D9] hover:border-[#6BC683] text-[#1F1F1F] my-3 hover:bg-[#c9e8cd] cursor-pointer">
              <p>{owner.name === 'Self'? "For Self" : "For Charity"}</p>
              <p className="text-[#5E6364] text-xs">{owner.info}</p>
              </div>
            ))}
        </div>
        <div className="buttons flex justify-between">
          <button 
          onClick={() => {
            setDisplayCurrentView(false)
            setDisplayReason(true)
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
      {selectCharity &&  <Charity/>}

      {displayAmount && <Amount/>}
    </div>

   )
 }
   
 export default Owner;