import {useState} from 'react';
import Amount from './Amount';
import FundraiserField from './FundraiserField';
import FundraiserSuccess from './FundraiserSuccess';
import HeroArticle from './HeroArticle';
import Owner from './Owner';

const reasons = ['Medical Care', 'Community','Family', 'Animals', 'Feeding', 'Events', 'Housing', 'Travel', 'Sports', 'Monthly Bills', 'Funeral Services', 'Education', 'Utilities', 'Other']


// const component = [
//   <Owner/>, <Amount/>, <FundraiserField/>
// ]


const Reason = () => {
  const [displayCurrentView, setDisplayCurrentView] = useState<boolean>(true)
  const [displayHeroArticle, setDisplayHeroArticle] = useState<boolean>(false);
  const [displayOwner, setDisplayOwner] = useState<boolean>(false);
  //  const style = {
  //   backgroundColor: '#c9e8cd',
  //   border: '2px solid #6BC683'
  //  }
  
   const select = (event:any) => {
    event.target.style = ""
    if(event.target.textContent === event.target.id){
      event.target.style = "border: 2px solid #6BC683; background-color:#c9e8cd"
    }
    console.log(event.target.textContent);
   }

   const handleClick = () => {
    console.log('engine')
    setDisplayCurrentView(false)
    setDisplayOwner(true)
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
          {reasons.map((reason,i) => (
            <p key = {i} 
            id = {reason}
            onClick = {select}
            className="border-2 py-2 px-5 rounded-full border-[#D9D9D9] hover:border-[#6BC683] w-fit text-[#1F1F1F] mr-1 my-1 hover:bg-[#c9e8cd] focus:bg-red-500 cursor-pointer">{reason}</p>
          ))}
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
          <button 
          onClick={handleClick}
          className="continue py-2 px-4 rounded-md font-medium bg-[#0F8E4B] text-white hover:text-green-100">
            Continue
          </button>
        </div>
      </article> }
      {displayOwner && <Owner/>}
    </div>
    
  )
}
  
export default Reason;