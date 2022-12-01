import Layout from '../components/Layout';
import FundraiserCard from '../components/FundraiserCard'
import { data } from '../components/data'
import Link from "next/link"



const  Charities = () => {
  const fundraiserCardElems = data.map(item => (
    <Link  href="/charities/[id]" as={`/charities/${item.id}`}>
      <FundraiserCard 
        //id={item?.id}
        name={item?.name}
        img={item?.imgTwo}
        organiser={item?.organiser}
        goal={item?.goal}
        donations={item?.donations}
        currentRaised={item?.currentRaised}
      />
    </Link>
  ))

  return (
    <Layout
    title='Charity Fundraisers'
    >
     <div className="flex justify-around">
      <div className="my-16 md:mx-8">
        <h2 className="text-[1.3rem] mb-4 font-semibold text-[#1F1F1F]">Fundraisers for Charities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {fundraiserCardElems}
          </div>
      </div>
     </div>

    </Layout>
  )
}

export default Charities;