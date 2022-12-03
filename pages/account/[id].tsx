import Layout from '../../components/Layout'
//import { data } from '../data'
import {data} from "../../components/data"
import FundraiserDetailPage from '../../components/FundraiserDetailPage'
import { NextPage } from 'next'


interface Props {
  id: any;
}
const  FundraiserDetail:NextPage<Props> = ({ id }) => {

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
      page={'account'}
      //isOpen={item?.isOpen}
    />
  ))

  return  (
    <Layout
      title='Account'
    >
      {detailPageElems}
    </Layout>
  )
}

export default FundraiserDetail;
  
  FundraiserDetail.getInitialProps = ({ query: { id } }) => {
    return { id }
  }