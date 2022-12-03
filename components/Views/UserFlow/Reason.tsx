import {useState} from 'react';
import { useAppDispatch } from '../../../Store/hooks';
import { updateReason } from '../../../Store/slice';
import HeroArticle from './HeroArticle';
import Owner from './Owner';

const reasons:any = ['Medical Care', 'Community','Family', 'Animals', 'Feeding', 'Events', 'Housing', 'Travel', 'Sports', 'Monthly Bills', 'Funeral Services', 'Education', 'Utilities', 'Other']


const Reason = () => {
  const dispatch = useAppDispatch();
  const [displayCurrentView, setDisplayCurrentView] = useState<boolean>(true);
  const [displayHeroArticle, setDisplayHeroArticle] = useState<boolean>(false);
  const [displayOwner, setDisplayOwner] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
  const [reason, setReason] = useState<string>("");
  

  const select = (event:any, id:number) => {
    setSelectedIndex(id)
    const {textContent} = event.target;
    ///console.log(event.target.textContent)
    setReason(textContent);
 }

   const handleClick = () => {
    setDisplayCurrentView(false)
    setDisplayOwner(true)
    dispatch(updateReason(reason))
   }
   
   

  return(
    <div>
      {displayHeroArticle && <HeroArticle/>}
      {displayCurrentView &&  <article className="reasons_container md:max-w-[70%] md:mx-auto lg:mx-0">
        <div className="list text-[#5E6364] text-sm">
          <span>1</span> of <span>4</span>
        </div>
        <h1 className="title text-[#1F1F1F] font-medium mt-3">
          Reason for starting a fundraiser
        </h1>
        <div className="reasons my-5 text-sm flex flex-wrap">
          {reasons.map((reason:any,index:number) => {
            const activeClass = selectedIndex === index ? 'border-2 border-[#6BC683] bg-[#c9e8cd]' : ''
            return (
            <p 
            key = {index} 
            id = {reason}
            onClick = {(event) => {
              select(event, index)
            }}
            className={`border-2 py-2 px-5 rounded-full border-[#D9D9D9] hover:border-[#6BC683] w-fit text-[#1F1F1F] mr-1 my-1 hover:bg-[#c9e8cd] cursor-pointer${activeClass}`}>{reason}</p>
            )
          })}
        </div>
        <div className="buttons flex justify-between">
          <button 
          onClick={() => {
            setDisplayCurrentView(false)
            setDisplayHeroArticle(true)
          }}
          className="back border-2 py-2 px-4 rounded-md font-medium hover:bg-gray-400  hover:text-white focus:bg-red-400">
            Back
          </button>
          {reason !== "" && <button 
          onClick={handleClick}
          className="continue py-2 px-4 rounded-md font-medium bg-[#0F8E4B] text-white hover:text-green-100">
            Continue
          </button>}
        </div>
      </article> }
      {displayOwner && <Owner/>}
    </div> 
  )
}
  
export default Reason;