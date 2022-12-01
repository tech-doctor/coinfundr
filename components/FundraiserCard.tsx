import React from 'react'
import { LinearProgress } from '@mui/material'

interface Props{
  img: string;
  name: string;
  organiser: string;
  currentRaised: number;
  goal: number;
  donations: number;
}


const  FundraiserCard:React.FC<Props> = ({img, name, organiser, currentRaised, goal, donations}) => {
  return (
    <div className="h-[21rem] w-[16rem] flex flex-col bg-white rounded-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
      <img className="w-[16rem] rounded-t-[8px] h-1/2" src={img}/>
      <div className="h-1/2 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-[0.95rem]  font-bold text-[#1F1F1F]">{name}</h3>
          <p className="text-xs text-[#94999A]">by {organiser}</p>
        </div>
        <LinearProgress 
          variant="determinate" 
          value={(currentRaised / goal) * 100} 
          sx={{
            backgroundColor: '#D9D9D9',
            borderRadius: '10px',
            '& .MuiLinearProgress-bar1Determinate': {
              backgroundColor: '#68C581', 
            }
          }}
        />
        <div className="flex justify-between">
          <div>
            <h3 className="text-[0.95rem] font-bold text-[#1F1F1F] tracking-wide">${currentRaised}</h3>
            <p className="text-xs text-[#94999A]">Raised of ${goal}</p>
          </div>
          <div>
            <h3 className="text-[0.95rem] font-bold text-[#1F1F1F] tracking-wide">{donations}</h3>
            <p className="text-xs text-[#94999A]">Total donations</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundraiserCard;
