import React from 'react'
import Layout from '../../components/Layout'
import FundraiserDetailPage from '../../components/FundraiserDetailPage';
import { NextPage } from 'next'

interface Props {
  data:any
}

const BASE_URL =  process.env.NEXT_PUBLIC_SERVER; 


const FundraiserDetail:NextPage<Props> = ({ data }) => {
  console.log(data)
  const {imageLink, amount, reason,donations,currentRaised, form: {firstName, lastName,fundraiserName, reasonForFund}} = data;
    return  (
    <Layout
    title='Popular Fundraisers'
  >
     <FundraiserDetailPage
      name={fundraiserName}
      img={imageLink}
      firstName = {firstName}
      lastName = {lastName}
      goal={amount}
      tag={reason}
      description={reasonForFund}
      donations={donations}
      currentRaised={currentRaised}
      page={'search'}
    />
  </Layout>
    )
  }

  export async function getServerSideProps(context:any) {
    const id = context.params.id
    const res = await fetch(`${BASE_URL}/api/getIndividuals/${id}`)
    const data = await res.json()
    return {
      props: {
        data,
      },
    }
  }

  export default  FundraiserDetail;