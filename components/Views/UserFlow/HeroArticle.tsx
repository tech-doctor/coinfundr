import {useState} from 'react';
import Reason from './Reason';
import axios from 'axios';
import { sendUserFlow } from '../../../utils/db/fetchData';
import { send } from 'process';
import { useConnect, useAccount } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'


const BASE_URL =  process.env.NEXT_PUBLIC_SERVER 

const HeroArticle = () => {
  const { address, isConnected } = useAccount()
  const [displayReasonComponent, setDisplayReasonComponent] = useState<boolean>(false)
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const handleClick = () =>{
    setDisplayReasonComponent(!displayReasonComponent);
    //sendUserFlow()
  }

  return(
    <div>
      {!isConnected ?
       <article className="hero-details text-[#1F1F1F]">
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
        onClick = { () => connect()}
        className='bg-[#1F1F1F] text-white font-medium rounded-[5px]  py-2 px-5 sm:py-2.5 sm:px-6 2xl:py-3 2xl:px-7 cursor-pointer hover:scale-95'>Start a Fundraiser.</button>
    </article> : <Reason/>}
    </div>
    
  )
}

export default HeroArticle;