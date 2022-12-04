import  React, {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { updateAmount, updateImageLink, updateWalletAddress, updateWalletStatus } from '../../../Store/slice';
import { connectWallet, getCurrentwalletConnected } from '../../../utils/Interact';
import { getCharityDetails } from '../charityDetails';
import FundraiserField from './FundraiserField';
import Owner from './Owner';


const Amount = () => {
  const dispatch = useAppDispatch();
  const charity = useAppSelector(state => state.root.charity);
  //const [isConnected, setIsConnected] = useState<boolean>(true);
  const isConnected:boolean = useAppSelector(state => state.root.walletIsConnected) 
  const [value, setValue] = useState<number| undefined>();
  const [displayCurrentView, setDisplayCurrentView] = useState<boolean>(true)
  const [displayOwner, setDisplayOwner] = useState<boolean>(false);
  const [displayField, setDisplayField] = useState<boolean>(false);


 useEffect(() => {
    if(charity !== null){
      dispatch(updateImageLink(getCharityDetails(charity)?.imageLink))
    }
 },[])

 useEffect (() => {
  const getWalletStatus =  async() => {
  const connect  = await getCurrentwalletConnected();
    dispatch(updateWalletAddress(connect.address))
    if(connect.status === 200){
      dispatch(updateWalletStatus(true))
    }
  }
  getWalletStatus()
},[])

 const connectWalletFunc = async() => {
  const connect  = await connectWallet();
  dispatch(updateWalletAddress(connect.address))
 if(connect.status === 200){
  dispatch(updateWalletStatus(true))
 }
}

  const handleChange = (event:any) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event:any) => {
   event.preventDefault();
    if(value !== undefined){
      setDisplayCurrentView(false);
      setDisplayField(true);
      dispatch(updateAmount(value));
    }
    
  }
  return(
    <div>
      {displayOwner && <Owner/>}
      {displayCurrentView && <article className="amount_container md:max-w-[70%] md:mx-auto lg:mx-0">
      <div className="list text-[#5E6364] text-sm">
        <span>3</span> of <span>4</span>
      </div>
      <h1 className="title text-[#1F1F1F] font-medium mt-3">
      How much do you want to raise?
      </h1>
      <div className="amount my-5 text-sm">
        <form 
         onSubmit={handleSubmit}
        >
          <input 
          className="input border w-full py-1.5 px-3 rounded-full outline-none"
          type = "number"
          value = {value}
          onChange={handleChange}
          placeholder = "Enter amount (in dollars)"
          //pattern = "[0-9]"
          required
          />
          <div className="buttons flex justify-between mt-7">
            <button 
            onClick={() => {
              setDisplayCurrentView(false)
              setDisplayOwner(true)
            }}
            type='button' className="back border-2 py-2 px-4 rounded-md font-medium hover:bg-gray-400  hover:text-white">
              Back
            </button>
            {isConnected? <button
            type='submit'
            className="continue py-2 px-4 rounded-md font-medium bg-[#0F8E4B] text-white hover:text-green-100">
              Continue
            </button>: <button
            type='button'
            onClick={connectWalletFunc}
             className="connect_wallet py-2 px-4 rounded-md font-medium bg-[#BA181B] text-white hover:text-green-100">
              Connect Wallet
            </button>}
          </div>
        </form>
      </div>
    </article>}
      {displayField && <FundraiserField/>}
    </div>
  )
 }
   
 export default Amount;