// import Layout from '../../components/Layout'
// import { LinearProgress } from '@mui/material'
// import { data } from '../../components/data'


// interface Props {
//   id: number
// }

// const  FundraiserDetail:React.FC<Props> = ({ id }) => {
//     return  (
//     <Layout
//     title='Individual Fundraiser'
//   >
//     <div className="flex justify-around">
//     <div className="w-full mt-16 xl:w-3/4 md:w-full sm:w-full ">
//         <h2 className="text-[1.5rem] font-bold text-[#1F1F1F]">{data[id].name}</h2>
//       <div className="h-[27rem] w-full mt-[1rem] flex bg-white rounded-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
//             <img className="h-full rounded-l-[8px] w-1/2" src={`${data[id].img}`}/>
//             <div className="w-1/2 p-8 flex flex-col justify-between">
//               <div className="">
//                 <h3 className="text-[1.3rem]  font-bold text-[#1F1F1F]">{data[id].name}</h3>
//                 <p className="text-sm text-[#94999A]">by {data[id].organiser}</p>
//               </div>

//               <LinearProgress 
//                 variant="determinate" 
//                 value={(data[id].currentRaised/data[id].goal) * 100} 
//                 sx={{
//                   backgroundColor: '#D9D9D9',
//                   '& .MuiLinearProgress-bar1Determinate': {
//                     backgroundColor: '#68C581', 
//                   }
//                 }}
//               />

//               <div className="flex justify-between ">
//                 <div>
//                   <h3 className="text-[1.3rem] font-bold text-[#1F1F1F] tracking-widest">${data[id].currentRaised}</h3>
//                   <p className="text-sm text-[#94999A]">Raised of ${data[id].goal}</p>
//                 </div>
//                 <div>
//                   <h3 className="text-[1.3rem] font-bold text-[#1F1F1F]">{data[id].donations}</h3>
//                   <p className="text-sm text-[#94999A]">Total donations</p>
//                 </div>
//               </div>
//               <button className="text-[1rem] font-bold bg-[#FFC300] text-[#1F1F1F] hover:bg-[#FFD60A] px-[1.2rem] py-[.8rem] rounded-[5px] self-start">Donate Now</button>
//               <h5 className="font-bold text-[#5E6364]">&bull; {data[id].tag}</h5>
//             </div>
//       </div>
//       <p className="py-8 font-semi-bold text-[1.3rem] border-b-2 border-[#D9D9D9] ">
//         {data[id].description}
//         </p>
//       <h2 className="text-[1.5rem] py-8 font-bold text-[#6D66FB] sm:text-center md:text-left">Latest Donations</h2>
//       <div className="flex justify-between sm:justify-around md:justify-between flex-wrap mb-8">
//         <div className="flex flex-col mb-8">
//           <h5 className="text-sm font-bold text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
//           <p className="text-sm text-[#94999A]">$40</p>
//         </div>
//         <div className="flex flex-col mb-8">
//           <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
//           <p className="text-sm text-[#94999A]">$40</p>
//         </div>
//         <div className="flex flex-col mb-8">
//           <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
//           <p className="text-sm text-[#94999A]">$40</p>
//         </div>
//         <div className="flex flex-col mb-8">
//           <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
//           <p className="text-sm text-[#94999A]">$40</p>
//         </div>
//         <div className="flex flex-col mb-8">
//           <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
//           <p className="text-sm text-[#94999A]">$40</p>
//         </div>
//         <div className="flex flex-col mb-8">
//           <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
//           <p className="text-sm text-[#94999A]">$40</p>
//         </div>
//       </div>
//     </div>
//   </div> 
//   </Layout>
//     )
//   }
  
//   FundraiserDetail.getInitialProps = ({ query: { id } }) => {
//     return { id }
//   }

//   export default FundraiserDetail;



import Layout from '../../components/Layout'
//import { LinearProgress } from '@mui/material'
import { data } from '../../components/data'
//import { data } from '../data'
import FundraiserDetailPage from '../../components/FundraiserDetailPage'

export default function FundraiserDetail({ id }) {

  let detailPage = data.find(item => item.id === Number(id))

  const detailPageElems = [detailPage].map(item => (
    <FundraiserDetailPage
      key={item?.id}
      id={item?.id}
      name={item?.name}
      img={item?.img}
      nft={item?.nft} 
      organiser={item?.organiser}
      goal={item?.goal}
      tag={item?.tag}
      description={item?.description}
      donations={item?.donations}
      currentRaised={item?.currentRaised}
      page={'individuals'}
    />
  ))


  return  (
    <Layout
      title='Individual Fundraiser'
    >
      {detailPageElems}
    </Layout>
  )
}
  
  FundraiserDetail.getInitialProps = ({ query: { id } }) => {
    return { id }
  }