import React,  { useState } from 'react'
import { LinearProgress } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import userFundmeabi from './../constantabi/configFundme.json'
import ethers from 'ethers'
import qualityEducation from './../constantabi/qualityeducation.json'

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
  page: string | undefined;
}


const FundraiserDetailPage:React.FC<Props> =  ({id, name, img, nft,  goal, tag, description, donations, currentRaised, page, firstName, lastName}) => {
    const addressfund ='0x79d168071fa13d324bd806e0e3a490ac2e33f85e'
    const addressnft ='0x5A6E5b46eBaE183A1CB458030a082ae81Cf2CfD5'
    const [redeemNft, setRedeemNft] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] =useState('')

    const handleOpen = () => setRedeemNft(true);
    const handleClose = () => setRedeemNft(false);

    const handleOpenTwo = () => setIsOpen(true);
    const handleCloseTwo = () => setIsOpen(false);

    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 1/2,
      height: 1/2,
      bgcolor: 'white',
      borderRadius: '15px',
      boxShadow: 24,
      p: 4,
    }

    

    const { config } = usePrepareContractWrite({
        address: addressfund,
        abi:userFundmeabi,
        functionName:'fund',
        chainId:80001,
        overrides: {
            value: ethers.utils.parseEther(value)
        }
    })

    const { data, isLoading, isSuccess, write } = useContractWrite(config)
    
    


    return(
        <div>
            <div className="flex justify-around">
                <div className="w-full mt-16 xl:w-3/4 md:w-full sm:w-full ">
                    <h2 className="text-[1.5rem] font-bold text-[#1F1F1F]">{name}</h2>
                    <div className="h-[27rem] w-full mt-[1rem] flex bg-white rounded-l-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                        <img className="h-full rounded-l-[8px] w-1/2" src={img}/>
                        <div className="w-1/2 p-8 flex flex-col justify-between">
                          <div className="">
                              <h3 className="text-[1.3rem]  font-bold text-[#1F1F1F]">{name}</h3>
                              <p className="text-sm text-[#94999A]">by <span>{firstName}</span> <span>{lastName}</span>
                              </p>
                          </div>

                          <LinearProgress 
                              variant="determinate"
                              value={(currentRaised / goal) * 100} 
                              sx={{
                              backgroundColor: '#D9D9D9',
                              '& .MuiLinearProgress-bar1Determinate': {
                                backgroundColor: '#68C581',  
                              }
                              }}
                          />

                          <div className="flex justify-between ">
                              <div>
                                  <h3 className="text-[1.3rem] font-bold text-[#1F1F1F] tracking-widest">${currentRaised}</h3>
                                  <p className="text-sm text-[#94999A]">Raised of ${goal}</p>
                              </div>
                              <div>
                                  <h3 className="text-[1.3rem] font-bold text-[#1F1F1F]">{donations}</h3>
                                  <p className="text-sm text-[#94999A]">Total donations</p>
                              </div>
                          </div>
                          {page === 'individuals' ? <button onClick={handleOpenTwo} className="text-[1rem] font-bold bg-[#FFC300] text-[#1F1F1F] hover:bg-[#FFD60A] px-[1.2rem] py-[.8rem] rounded-[5px] self-start">Donate Now</button>
                          : (page === 'charities' ? <button onClick={() => write()} className="text-[1rem] font-bold bg-[#FFC300] text-[#1F1F1F] hover:bg-[#FFD60A] px-[1.2rem] py-[.8rem] rounded-[5px] self-start">Donate Now</button>
                          : (isOpen && <button className="text-[1rem] font-bold bg-[#BA181B] text-[#FFFFFF] hover:bg-[#6A040F] px-[1.2rem] py-[.8rem] rounded-[5px] self-start">Close Fundraiser</button>)
                          )}
                          <h5 className="font-bold text-[#5E6364]">&bull; {tag}</h5>
                      </div>
                  </div>

                    <p className="py-8 font-semi-bold text-[1.3rem] border-b-2 border-[#D9D9D9] ">
                        {description}
                    </p>

                    <h2 className="text-[1.5rem] py-8 font-bold text-[#6D66FB] sm:text-center md:text-left">Latest Donations</h2>
                    <div className="flex justify-between sm:justify-around md:justify-between flex-wrap mb-8">
                      <div className="flex flex-col mb-8">
                      <h5 className="text-sm font-bold text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                      <p className="text-sm text-[#94999A]">$40</p>
                      </div>
                      <div className="flex flex-col mb-8">
                      <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                      <p className="text-sm text-[#94999A]">$40</p>
                      </div>
                      <div className="flex flex-col mb-8">
                      <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                      <p className="text-sm text-[#94999A]">$40</p>
                      </div>
                      <div className="flex flex-col mb-8">
                      <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                      <p className="text-sm text-[#94999A]">$40</p>
                      </div>
                      <div className="flex flex-col mb-8">
                      <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                      <p className="text-sm text-[#94999A]">$40</p>
                      </div>
                      <div className="flex flex-col mb-8">
                      <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
                      <p className="text-sm text-[#94999A]">$40</p>
                      </div>
                  </div>
              </div>
          </div>

          <Modal
              open={isOpen}
              onClose={handleCloseTwo}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" className="font-[Circular] text-center" sx={{ mt: 4 }}>
                  Kindly comfirm much would you like to donate?
              </Typography>
              
              <div className="flex justify-around mt-8">
                  <input 
                      type="number"
                      onChange={(e) => setValue(e.target.value)}
                      className="input border w-1/2 py-1.5 px-3 rounded-full outline-none"
                      required
                  />
                  {!isSuccess && (
                  <button>
                    Mint

                  </button>
                  )}
                  {page === 'individuals' ? <button className="text-[1rem] font-semibold bg-[#FFC300] text-white px-[1rem] py-[.5rem] rounded-[5px] self-start">Donate</button>
                  : <button onClick={handleOpen} className="text-[1rem] font-semibold bg-[#FFC300] text-white px-[1rem] py-[.5rem] rounded-[5px] self-start">Donate</button>
                  }
              </div>
              </Box>
          </Modal> 

          {page === 'charities' && <Modal
              open={redeemNft}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
                  <div className="flex justify-around">
                      <img className="h-[12.5rem] w-[12.5rem] my-2 rounded-full " src={nft}/>
                  </div>
              <Typography id="modal-modal-title" variant="h6" component="h2" className="font-[Circular] text-center" sx={{ mt: 4 }}>
                  Congratulations! You've just recieved an NFT Badge
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