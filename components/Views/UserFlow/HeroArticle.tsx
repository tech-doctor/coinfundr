import {useEffect, useState} from 'react';
import { useAppDispatch } from '../../../Store/hooks';
import { reset, updateCharity } from '../../../Store/slice';
import Reason from './Reason';

const HeroArticle = () => {
  const dispatch = useAppDispatch();
  const [displayReasonComponent, setDisplayReasonComponent] = useState<boolean>(false)
  
  // useEffect(() => {
  //   dispatch(updateCharity(null))
  // },[])

  const handleClick = () =>{
    setDisplayReasonComponent(!displayReasonComponent);
  }

  return(
    <div>
      {!displayReasonComponent ? <article className="hero-details text-[#1F1F1F]">
        <h1 className='text-[42px] xl:text-6xl 2xl:text-8xl  font-bold leading-tight'>Together, we can change the 
        <div> 
        World
        <hr className='w-[120px] xl:w-[180px] 2xl:w-[280px] text-right mt-[-15px] xl:mt-[-20px] 2xl:mt-[-25px] border-[5px] xl:border-[10px] border-[#6BC683]'/>
        </div>
        </h1>
        <p className='text-md sm:text-xl lg:text-2xl font-medium my-5 lg:my-7'>
          With one-quarter of our global team dedicated to trust and safety, we’ve successfully managed fundraisers worldwide for more than a decade.
        </p>
        <button 
        onClick = {handleClick}
        className='bg-[#1F1F1F] text-white font-medium rounded-[5px]  py-2 px-5 sm:py-2.5 sm:px-6 2xl:py-3 2xl:px-7 cursor-pointer hover:scale-95'>Start a Fundraiser.</button>
    </article> : <Reason/>}
    </div>
    
  )
}

export default HeroArticle;