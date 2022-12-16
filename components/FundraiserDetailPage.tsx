import React,  { useState } from 'react';
import {useRouter} from 'next/router'
import axios from 'axios'
import { LinearProgress } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import { useDebounce } from 'use-debounce'

import {
    usePrepareSendTransaction,
    useSendTransaction,
    useWaitForTransaction,
} from 'wagmi'

import { utils } from 'ethers'



interface Props {
  id?:number |  undefined;
  name: string | undefined;
  img: string | undefined;
  nft?:string | undefined;
  firstName:string;
  lastName: string;
  goal?:any;
  tag:string | undefined;
  description:string | undefined;
  donations: number | undefined;
  currentRaised?: any;
  address: any
  openFundraiser?: boolean;
  page?: string | undefined;
}

const BASE_URL =  process.env.NEXT_PUBLIC_SERVER;



const FundraiserDetailPage:React.FC<Props> =  ({id, name, address, openFundraiser, img, nft,  goal, tag, description, donations, currentRaised, page, firstName, lastName}) => {
   const {query} = useRouter();
   const router = useRouter();
   //console.log(query.id)
  const [redeemNft, setRedeemNft] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setIsLoading] = useState(false)

  const [amount, setAmount] = React.useState('')
  const [debouncedValue] = useDebounce(amount, 500)

  const [displaySuccessful, setDisplaySuccessful]= useState(true)


  const { config } = usePrepareSendTransaction({
      request: {
          to: '0x75267105a55F3961929899F92FA898F94bcECBD3',
          value: debouncedValue ? utils.parseEther(debouncedValue) : undefined,
      },
  })


  const { data, sendTransaction } = useSendTransaction(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
      hash: data?.hash,
    })




  // const handleOpen = () => setRedeemNft(true);
  const handleClose = () => {
    setRedeemNft(false);
    setIsOpen(false)
  } 

  const handleOpenTwo = () => setIsOpen(true);
  const handleCloseTwo = () => setIsOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1/2,
    //height: 1/,
    bgcolor: 'white',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
  }


   const handleCloseFundraider = () => {
    setIsLoading(true)
    axios.put(`${BASE_URL}/api/closeFundraiser`, {
      id: query.id
    })
    .then((response) => {
      console.log(response);
    setIsLoading(false);
    router.push("/account")
    })
  .catch((error) => {
     console.log(error)
     setIsLoading(false);
  })
  }


  return(
    <div>
        <div className="flex justify-around">
            <div className="w-full mt-16 xl:w-3/4 ">
              <h2 className=" text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] font-bold text-[#1F1F1F]">{name}</h2>
              <div className="w-full mt-[1rem] flex bg-white rounded-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className=" rounded-l-[8px] hidden md:block w-full" src={img} alt={'fundraiser image'}/>
                <div className="w-full p-3.5 sm:p-5 md:p-8 flex flex-col justify-between">
                  <div className="">
                    <h3 className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] font-bold text-[#1F1F1F]">{name}</h3>
                    <p className="text-sm text-[#94999A]">by <span>{firstName}</span> <span>{lastName}</span>
                    </p>
                  </div>

                  <LinearProgress 
                    variant="determinate"
                    value={(currentRaised / goal) * 100} 
                    sx={{
                    backgroundColor: '#D9D9D9',
                    marginTop: '8px',
                    width:'100%',
                    '& .MuiLinearProgress-bar1Determinate': {
                      backgroundColor: '#68C581',  
                    }
                    }}
                  />

                  <div className="flex justify-between my-[3em] ">
                    <div>
                        <h3 className=" text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] font-bold text-[#1F1F1F] tracking-widest">${currentRaised}</h3>
                        <p className="text-sm text-[#94999A]">Raised of ${goal}</p>
                    </div>
                    <div>
                        <h3 className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] font-bold text-[#1F1F1F]">{donations}</h3>
                        <p className="text-sm text-[#94999A]">Total donations</p>
                    </div>
                  </div>
                  <div className='mb-8'>
                    {page === 'individuals' || page === "search" ? <button onClick={handleOpenTwo} className="text-[1rem] font-bold bg-[#FFC300] text-[#1F1F1F] hover:bg-[#FFD60A] px-[1.2rem] py-[.6rem] sm:py-[.7rem] md:py-[.8rem] rounded-[5px] self-start">Donate Now</button>
                      : (page === 'charities' ? <button onClick={handleOpenTwo} className="text-[1rem] font-bold bg-[#FFC300] text-[#1F1F1F] hover:bg-[#FFD60A] px-[1.2rem] py-[.6rem] sm:py-[.7rem] md:py-[.8rem] rounded-[5px] self-start">Donate Now</button>
                      : (openFundraiser && <button 
                        onClick={handleCloseFundraider}
                        className="text-[1rem] font-bold bg-[#BA181B] text-[#FFFFFF] hover:bg-[#6A040F] px-[1.2rem] py-[.8rem] rounded-[5px] self-start">{loading? "Closing...": "Close Fundraiser"}</button>)
                      )}
                  </div>
                    
                    <h5 className="font-bold text-sm sm:text-md text-[#5E6364]">&bull; {tag}</h5>
                </div>
              </div>

                <p className="py-8 font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] border-b-2 border-[#D9D9D9] ">
                  {description}
                </p>

                {/* <h2 className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] py-8 font-bold text-[#6D66FB] text-center lg:text-left">Latest Donations</h2>
               
               <div className="flex flex-wrap justify-between mb-8 break-all">
                  <div className="flex flex-col mb-8 mx-auto lg:mx-0">
                    <h5 className="text-sm font-bold text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                    <p className="text-sm text-[#94999A]">$40</p>
                  </div>
                  <div className="flex flex-col mb-8 mx-auto lg:mx-0">
                    <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                    <p className="text-sm text-[#94999A]">$40</p>
                  </div>
                  <div className="flex flex-col mb-8 mx-auto lg:mx-0">
                    <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                    <p className="text-sm text-[#94999A]">$40</p>
                  </div>
                  <div className="flex flex-col mb-8 mx-auto lg:mx-0">
                    <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                    <p className="text-sm text-[#94999A]">$40</p>
                  </div>
                  <div className="flex flex-col mb-8 mx-auto lg:mx-0">
                    <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                    <p className="text-sm text-[#94999A]">$40</p>
                  </div>
                  <div className="flex flex-col mb-8 mx-auto lg:mx-0">
                    <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                    <p className="text-sm text-[#94999A]">$40</p>
                  </div>
              </div> */}
          </div>
      </div>

    <Modal
      open={isOpen}
      onClose={handleCloseTwo}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box 
      sx={style}
       className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]  rounded-lg'
      >
      <Typography id="modal-modal-title" variant="h6" component="h2" className="font-[Circular] text-[18px] md:text-md text-center" sx={{ mt: 4 }}>
          Kindly comfirm much would you like to donate?
      </Typography>
      
      <div className="flex justify-around mt-8 w-full">
        <input 
          aria-label="Amount (ether)" 
          className="input border w-2/3 py-1 sm:py-1.5 px-3  rounded-[8px] outline-none"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Please Input amount of MATIC you want to send"
          value={amount}
          required
        />
        {page === 'individuals' || page === "search" ? <button onClick={(e) => {sendTransaction?.()}} disabled={isLoading || !sendTransaction  || !amount} className="text-[1rem] font-semibold bg-[#0F8E4B] text-white px-[1rem] py-[.3rem] sm:py-[.5rem] rounded-[5px]">{isLoading ? 'Sending...' : 'Send'}</button>
        : <button onClick={(e) => {
          sendTransaction?.()
          if (isSuccess) {setRedeemNft(true)}
          }} disabled={isLoading || !sendTransaction  || !amount} className="text-[1rem] font-semibold bg-[#0F8E4B] text-white px-[1rem] py-[.3rem] sm:py-[.5rem] rounded-[5px] ">{isLoading ? 'Sending...' : 'Send'}</button>
        }
      </div>
      {isSuccess && 
        <div>
          <p>Successfully sent {amount} MATIC to {address}</p>
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>}
      </Box>
    </Modal> 

    {page === 'charities' && <Modal
      open={redeemNft}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}
      className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]  rounded-lg'
      >
        <div className="flex justify-around">
          <img className="h-[12.5rem] w-[12.5rem] my-2 rounded-full " src={nft}/>
        </div>
      <Typography id="modal-modal-title" variant="h6" component="h2" className="font-[Circular] text-center" sx={{ mt: 4 }}>
          Congratulations! You&apos;ve just recieved an NFT Badge
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 1 }} className="font-[Circular] text-center">
          Check your Nfts in your Account page
      </Typography>
      </Box>
      </Modal>}
    </div>
  )
}

export default FundraiserDetailPage