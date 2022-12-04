import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import Layout from '../../components/Layout';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Nft from '../../components/Nft';
//import { myFundraisers } from '../../components/myFundraisersData';
import { nftData } from '../../components/nftData';
import FundraiserCard from '../../components/FundraiserCard';
import Link from "next/link";
import { NextPage } from 'next';


const BASE_URL =  process.env.NEXT_PUBLIC_SERVER;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// interface Props {
//   data:any
// }

 const  Account = () => {
  const walletAddress:string = useAppSelector(state => state.root.walletAddress)
  const [value, setValue] = React.useState(0);
  const [myFundraisers, setMyFundraisers] = useState([]);
  const [fundraiserHistory, setFundraiserHistory] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.post(`${BASE_URL}/api/getOpenFundraisers`, {
        id: walletAddress
      })
      .then((response) => {
      const result = response?.data.optimisedResult;
        console.log(result);
    setMyFundraisers(response?.data.optimisedResult);
      })
    .catch((error) => {
       console.log(error)
    })
    }
    fetchData()
  },[walletAddress])

  useEffect(() => {
    const fetchData = () => {
      axios.post(`${BASE_URL}/api/closeFundraiser/getClosedFundraiser`, {
        id: walletAddress
      })
      .then((response) => {
      const result = response?.data.optimisedResult;
        console.log(result);
    setFundraiserHistory(response?.data.optimisedResult);
      })
    .catch((error) => {
       console.log(error)
    })
    }
    fetchData()
  },[walletAddress])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  

  const myFundraiserCardElems = myFundraisers.map((item:any) => {
    //if (item.isOpen) {
      return (
        <React.Fragment key={item?.id}>
          <Link href="/account/[id]" as={`/account/${item.id}`}>
            <FundraiserCard 
              //id={item?.id}
              name={item?.fundraiserName}
              img={item?.imageLink}
              firstName = {item?.firstName}
              lastName = {item?.lastName}
              goal={item?.amount}
              donations={item?.donations}
              currentRaised={item?.currentRaised}
              
            />
          </Link>
        </React.Fragment>
      )
    //}
  })


  const fundraiserHistoryCardElems = fundraiserHistory.map((item:any) => {
   // if (!item.isOpen) {
    return (
      <React.Fragment key = {item.id}>
        <Link  href="/account/[id]" as={`/account/${item.id}`}>
        <FundraiserCard 
          //id={item?.id}
          name={item?.fundraiserName}
          img={item?.imageLink}
          firstName = {item?.firstName}
          lastName = {item?.lastName}
          goal={item?.amount}
          donations={item?.donations}
          currentRaised={item?.currentRaised}
          closeFundraiser = {true}
        />
        </Link>
      </React.Fragment>
    )
  })

  const nftBadgeElems = nftData.map(item  => (
    <React.Fragment
    key = {item?.id}
    >
    <Nft 
      //key={item?.id}
      img={item?.img}
      name={item?.name}
    />
    </React.Fragment>
    
  ))

  return (
    <Layout
    title='Account'
    >
    <Box sx={{ width: '100%', margin: '3em 0px' }}>
      <Box sx={{ borderColor: 'divider', width:'fit-content', margin:'auto' }}>
        <Tabs
         value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{textTransform: 'capitalize', fontWeight: '700', fontSize: '15px'}}  label="Open Fundraisers" {...a11yProps(0)} />
          <Tab sx={{textTransform: 'capitalize', fontWeight: '700', fontSize: '15px'}} label="Fundraiser History" {...a11yProps(1)} />
          <Tab sx={{textTransform: 'capitalize' ,fontWeight: '700', fontSize: '15px'}} label="NFT Bagdes" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="flex justify-around mt-8">
          <div>
              <div className="text-[1.2rem] mb-2 font-bold text-[#1F1F1F]">My Fundraisers</div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                {myFundraiserCardElems}
              </div>
          </div>
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="flex justify-around mt-8">
          <div>
          <div className="text-[1.2rem] mb-2 font-bold text-[#1F1F1F]">Fundraiser History</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
              {fundraiserHistoryCardElems}
            </div>
          </div>
            
          </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="flex justify-around mt-8">
          <div>
            <div className="text-[1.2rem] mb-2 font-bold text-[#1F1F1F]">NFT Badges</div>
            <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
              {nftBadgeElems}
            </div>  
          </div>
        </div>
      </TabPanel>
    </Box>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${BASE_URL}/api/getOpenFundraisers/${'abc'}`)
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//     revalidate:10
//   }
// }

export default Account;






