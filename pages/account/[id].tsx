import Layout from '../../components/Layout'
import { data } from '../data'
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
      page={'account'}
      isOpen={item?.isOpen}
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
  
  FundraiserDetail.getInitialProps = ({ query: { id } }) => {
    return { id }
  }