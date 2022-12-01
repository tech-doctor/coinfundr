import React,  { useState } from 'react'
import { LinearProgress } from '@mui/material'
import { data } from './data'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'


// interface Props {
//     props:any
// }
const FundraiserDetailPage =  (props) => {

    const [redeemNft, setRedeemNft] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

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


    return(
        <div>
            <div className="flex justify-around">
                <div className="w-full mt-16 xl:w-3/4 md:w-full sm:w-full ">
                    <h2 className="text-[1.5rem] font-bold text-[#1F1F1F]">{props.name}</h2>
                    <div className="h-[27rem] w-full mt-[1rem] flex bg-white rounded-l-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                        <img className="h-full rounded-l-[8px] w-1/2" src={props.img}/>
                        <div className="w-1/2 p-8 flex flex-col justify-between">

                            <div className="">
                                <h3 className="text-[1.3rem]  font-bold text-[#1F1F1F]">{props.name}</h3>
                                <p className="text-sm text-[#94999A]">by {props.organiser}</p>
                            </div>

                            <LinearProgress 
                                variant="determinate" 
                                value={(props.currentRaised / props.goal) * 100} 
                                sx={{
                                backgroundColor: '#D9D9D9',
                                '& .MuiLinearProgress-bar1Determinate': {
                                    backgroundColor: '#68C581',
                
                                    
                                }
                                }}
                            />

                            <div className="flex justify-between ">
                                <div>
                                    <h3 className="text-[1.3rem] font-bold text-[#1F1F1F] tracking-widest">${props.currentRaised}</h3>
                                    <p className="text-sm text-[#94999A]">Raised of ${props.goal}</p>
                                </div>
                                <div>
                                    <h3 className="text-[1.3rem] font-bold text-[#1F1F1F]">{props.donations}</h3>
                                    <p className="text-sm text-[#94999A]">Total donations</p>
                                </div>
                            </div>
                            {props.page === 'individuals' ? <button onClick={handleOpenTwo} className="text-[1rem] font-bold bg-[#FFC300] text-[#1F1F1F] hover:bg-[#FFD60A] px-[1.2rem] py-[.8rem] rounded-[5px] self-start">Donate Now</button>
                            : (props.page === 'charities' ? <button onClick={handleOpenTwo} className="text-[1rem] font-bold bg-[#FFC300] text-[#1F1F1F] hover:bg-[#FFD60A] px-[1.2rem] py-[.8rem] rounded-[5px] self-start">Donate Now</button>
                            : (props.isOpen && <button className="text-[1rem] font-bold bg-[#BA181B] text-[#FFFFFF] hover:bg-[#6A040F] px-[1.2rem] py-[.8rem] rounded-[5px] self-start">Close Fundraiser</button>)
                            )}
                            <h5 className="font-bold text-[#5E6364]">&bull; {props.tag}</h5>
                        </div>
                    </div>

                    <p className="py-8 font-semi-bold text-[1.3rem] border-b-2 border-[#D9D9D9] ">
                        {props.description}
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
                        className="input border w-1/2 py-1.5 px-3 rounded-full outline-none"
                        required
                    />
                    {props.page === 'individuals' ? <button className="text-[1rem] font-semibold bg-[#FFC300] text-white px-[1rem] py-[.5rem] rounded-[5px] self-start">Donate</button>
                    : <button onClick={handleOpen} className="text-[1rem] font-semibold bg-[#FFC300] text-white px-[1rem] py-[.5rem] rounded-[5px] self-start">Donate</button>
                    }
                </div>
                </Box>
            </Modal> 

            {props.page === 'charities' && <Modal
                open={redeemNft}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex justify-around">
                        <img className="h-[12.5rem] w-[12.5rem] my-2 rounded-full " src={props.nft}/>
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