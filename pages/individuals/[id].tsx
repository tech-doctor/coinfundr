import React from 'react';
import Layout from '../../components/Layout';
import FundraiserDetailPage from '../../components/FundraiserDetailPage';
import { NextPage } from 'next';


const BASE_URL =  process.env.NEXT_PUBLIC_SERVER; 

interface Props {
  data: any;
}
const FundraiserDetail:NextPage<Props> = ({ data }) => {

  const {imageLink, amount, reason,donations,currentRaised, form: {firstName, lastName,fundraiserName, reasonForFunding}} = data;

  return  (
    <Layout
      title='Individual Fundraiser'
    >
      <FundraiserDetailPage
      name={fundraiserName}
      img={imageLink}
      firstName = {firstName}
      lastName = {lastName}
      goal={amount}
      tag={reason}
      description={reasonForFunding}
      donations={donations}
      currentRaised={currentRaised}
      page={'individuals'}
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

export default FundraiserDetail;

