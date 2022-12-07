import {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import FundraiserCard from '../../components/FundraiserCard';
import Link from 'next/link';
import React,{Fragment} from 'react';
import { NextPage } from 'next';

const BASE_URL =  process.env.NEXT_PUBLIC_SERVER;

// interface Prop {
//   data:any
// }

const  individuals = () => {
   const [data, setdata] = useState<any>([]);

  useEffect(() => {
    const fetchData = async() => {
    const res = await fetch(`${BASE_URL}/api/getIndividuals`)
    const data = await res.json();
    setdata(data)
    }
    fetchData()
  },[])

  return (
    <Layout
    title='Individuals'
    >
     <div className="flex justify-around">
      <div className="my-16 flex flex-col">
        <h2 className="text-[1.3rem] mb-4 font-bold text-[#1F1F1F]">Fundraisers for Individuals</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {data?.map((item:any) => (
              <Fragment key={item.id}>
                <Link  href="/individuals/[id]" as={`/individuals/${item.id}`}>
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
              </Fragment>
  ))}
          </div>
      </div>
     </div>
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch(`${BASE_URL}/api/getIndividuals`)
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//     //revalidate:10
//   }
// }

export default individuals;