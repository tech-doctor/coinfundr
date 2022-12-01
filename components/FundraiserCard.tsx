import React from 'react'
import { LinearProgress } from '@mui/material'

export default function FundraiserCard(props) {
  console.log(props.isOpen)
    return (
        <div className="h-[21rem] w-[16rem] mr-4 mb-4 flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className="w-[16rem] rounded-t-[8px] h-1/2" src={props.img}/>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[1rem]  font-bold text-[#1F1F1F]">{props.name}</h3>
                    <p className="text-xs text-[#94999A]">by {props.organiser}</p>
                  </div>

                  {props.isOpen && <LinearProgress 
                    variant="determinate" 
                    value={(props.currentRaised / props.goal) * 100} 
                    sx={{
                      backgroundColor: '#D9D9D9',
                      '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: '#68C581',
      
                        
                      }
                    }}
                  />}

                  {props.isOpen && <div className="flex justify-between">
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F] tracking-wide">$1{props.currentRaised}</h3>
                      <p className="text-xs text-[#94999A]">Raised of ${props.goal}</p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F] tracking-wide">{props.donations}</h3>
                      <p className="text-xs text-[#94999A]">Total donations</p>
                    </div>
                  </div>}
                  {!props.isOpen && <button className="text-[.8rem] font-semibold bg-[#BA181B] text-white px-[1rem] py-[.5rem] rounded-[5px] self-start">Closed</button>}
                </div>
            </div>
    )
}