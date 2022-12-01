import Layout from '../components/Layout';
import FundraiserCard from '../components/FundraiserCard'
import { data } from './data'
import Link from "next/link"



const  Individuals = () => {

  const fundraiserCardElems = data.map(item => {
    if (item.isOpen) {
      return (
        <Link  href="/individuals/[id]" as={`/individuals/${item.id}`}>
          <FundraiserCard 
            key={item?.id}
            id={item?.id}
            name={item?.name}
            img={item?.img}
            organiser={item?.organiser}
            goal={item?.goal}
            donations={item?.donations}
            currentRaised={item?.currentRaised}
            isOpen={item?.isOpen}
          />
    
        </Link>
    
      )
    }
  })

  return (
    <Layout
    title='Individual Fundraisers'
    >
     <div className="flex justify-around">
      <div className="my-16 md:mx-8">
        <h2 className="text-[1.3rem] mb-4 font-semibold text-[#1F1F1F]">Fundraisers for Individuals</h2>
          <div className="flex flex-wrap">
            {fundraiserCardElems}
          </div>
      </div>
     </div>

    </Layout>
  )
}

export default Individuals;
