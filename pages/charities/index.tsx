import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { BASE_URL } from '../../components/constant';
import FundraiserCard from '../../components/FundraiserCard'
import { NextPage } from 'next';
//const BASE_URL =  process.env.NEXT_PUBLIC_SERVER 

interface Prop {
  data:any
}

const  charities:NextPage<Prop> = ({data}) => {
  return (
    <Layout
    title='Charities'
    >
     <div className="flex justify-around">
      <div className="my-16 flex flex-col">
        <h2 className="text-[1.3rem] mb-4 font-bold text-[#1F1F1F]">Fundraisers for Charities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {data?.map((item:any) => (
              <React.Fragment
                key = {item?.id}
              >
                <Link  href="/charities/[id]" as={`/charities/${item.id}`}>
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
             ))}
          </div>
      </div>
     </div>

    </Layout>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}/api/getCharity`)
  const data = await res.json()
  return {
    props: {
      data,
    },
    //revalidate: 10
  }
}

export default charities;

