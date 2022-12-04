import Layout from '../../components/Layout';
import FundraiserDetailPage from '../../components/FundraiserDetailPage';
import React from 'react';
import { NextPage } from 'next';

const BASE_URL =  process.env.NEXT_PUBLIC_SERVER 
interface Props {
  data:any;
}


const  FundraiserDetail:NextPage<Props> = ({ data }) => {
  // console.log(data)
  const {imageLink, amount, reason,donations, charity, currentRaised, form: {firstName, lastName, fundraiserName, reasonForFund}} = data;
  console.log(charity)
   const nftLink = () => {
    switch(charity) {
        case "chess-in-slum":
          return "/quality-education.png"
        case "lagos-food-bank":
          return "/zero-hunger.png"
        case "nigerian-red-cross":
          return "/good-health.png"
        case "kokun-foundation":
          return "/no-poverty.png"
        default:
          break
      } 
   }

  return  (
    <Layout
      title='Charities Fundraiser'
    >
      <FundraiserDetailPage
        name={fundraiserName}
        img={imageLink}
        firstName = {firstName}
        lastName = {lastName}
        goal={amount}
        tag={reason}
        nft = {nftLink()}
        description={reasonForFund}
        donations={donations}
        currentRaised={currentRaised}
        page={'charities'}
      />
    </Layout>
  )
}

export async function getServerSideProps(context:any) {
  const id = context.params.id
  const res = await fetch(`${BASE_URL}/api/getCharity/${id}`)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default  FundraiserDetail;