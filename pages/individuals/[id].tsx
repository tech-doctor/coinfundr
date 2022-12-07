import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { BASE_URL } from '../../components/constant';
import FundraiserDetailPage from '../../components/FundraiserDetailPage';
import { NextPage } from 'next';
//const BASE_URL =  process.env.NEXT_PUBLIC_SERVER; 

interface Props {
  data: any;
}

const FundraiserIndividualDetail:NextPage<Props> = ({ data }) => {
  //console.log(data)
  const {imageLink, amount, reason,donations,currentRaised, form: {firstName, lastName,fundraiserName, reasonForFund}} = data;
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
      description={reasonForFund}
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

export default FundraiserIndividualDetail;

