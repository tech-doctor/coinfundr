import Layout from '../components/Layout';
import FundraiserCard from '../components/FundraiserCard'
import { data } from '../components/data'
import Link from "next/link"


const  Individuals = () => {

  const fundraiserCardElems = data.map(item => (
    <Link  href="/individuals/[id]" as={`/individuals/${item.id}`}>
      <FundraiserCard 
        //id={item?.id}
        name={item?.name}
        img={item?.img}
        organiser={item?.organiser}
        goal={item?.goal}
        donations={item?.donations}
        currentRaised={item?.currentRaised}
      />
    </Link>
  ))

  return (
    <Layout
    title='Individual Fundraisers'
    >
     <div className="flex">
      <div className="my-16 mx-auto">
        <h2 className="text-[1.3rem] mb-4 font-semibold text-[#1F1F1F]">Fundraisers for Individuals</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {fundraiserCardElems}
          </div>
      </div>
     </div>
    </Layout>
  )
}

export default Individuals;
