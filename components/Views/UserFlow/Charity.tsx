import { useState, useEffect } from "react";
import { useAppDispatch } from "../../../Store/hooks";
import { updateCharity } from "../../../Store/slice";
import Amount from "./Amount";
import Owner from "./Owner";


const charityBanners = [
  {
    id: 'chess-in-slum',
    src: '/chess-in-slum.png',
    alt: 'Chess in Slum charity banner'
  },
  {
    id: 'lagos-food-bank',
    src: '/lagos-food-bank.png',
    alt: 'Lagos food bank charity banner'
  },
  { 
    id: 'nigerian-red-cross',
    src: '/nigerian-red-cross.png',
    alt: 'Nigerian red cross charity banner'
  },
  {
    id: 'kokun-foundation',
    src: '/kokun-foundation.png',
    alt: 'Kokun foundation Charity Banner'
  }
]

const Charity = () => {
  const dispatch = useAppDispatch();
  const [displayCurrentView, setDisplayCurrentView] = useState<boolean>(true)
  const [displayOwner, setDisplayOwner] = useState<boolean>(false);
  const [displayAmount, setDisplayAmount] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [charity, setCharity] = useState<string>("")


  // useEffect(() => {
  //   dispatch(updateCharity(null))
  // },[])

  const selectBanner = (id:string) => {
    setSelectedId(id)
    setCharity(id)
   }

  const nextFlow = (event:any) => {
    dispatch(updateCharity(charity))
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
          {charityBanners.map((banner, index) => {
            const {id, src, alt} = banner;
             const activeClass = selectedId === id ? 'border-2 border-[#6BC683]' : ''
            return(
              <img 
              onClick={() => {
                selectBanner(id)
              }}
              id = {id}
              key = {id}
              className={`  w-full shadow-sm my-1 mr-3 rounded-[8px] hover:border-2 hover:border-[#6BC683] cursor-pointer ${activeClass}`}
              src= {src} alt={alt}/>
            )
          })}
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
        {charity !== "" && <button 
          onClick={nextFlow}
          className="continue py-2 px-4 rounded-md font-medium bg-[#0F8E4B] text-white hover:text-green-100">
            Continue
          </button> }
        </div>
      </article>}
      {displayAmount && <Amount/>}
    </div>
   )
 }
   
 export default Charity;