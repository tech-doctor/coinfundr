import Layout from '../../components/Layout';
import {data} from "../../components/data"
import FundraiserDetailPage from '../../components/FundraiserDetailPage'
import { NextPage } from 'next'


const BASE_URL =  process.env.NEXT_PUBLIC_SERVER 
interface Props {
  data:any;
}

const  FundraiserAccountDetail:NextPage<Props> = ({ data }) => {
    const {imageLink, amount, reason,donations,currentRaised, form: {firstName, lastName,fundraiserName, reasonForFund}} = data;
  return  (
    <Layout
      title='Account'>
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
      openFundraiser = {true}
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

export default FundraiserAccountDetail;