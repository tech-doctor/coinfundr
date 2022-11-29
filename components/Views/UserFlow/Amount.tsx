import  React, {useState} from 'react';
import FundraiserField from './FundraiserField';
import Owner from './Owner';


const Amount = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [value, setValue] = useState<string>('$');
  const [displayCurrentView, setDisplayCurrentView] = useState<boolean>(true)
  const [displayOwner, setDisplayOwner] = useState<boolean>(false);
  const [displayField, setDisplayField] = useState<boolean>(false);

  const handleChange = (event:any) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event:any) => {
   event.preventDefault();
    console.log(value)
    if(value !== ""){
      setDisplayCurrentView(false);
      setDisplayField(true);
    }
  }

  //const data = new Object()

  
  
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