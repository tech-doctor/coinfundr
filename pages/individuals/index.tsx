import Layout from '../../components/Layout';
import FundraiserCard from '../../components/FundraiserCard'
import { data } from '../../components/data'


const  Individuals = () => {

  const fundraiserCardElems = data.map(item => (
    <FundraiserCard 
      //id={item?.id}
      name={item?.name}
      img={item?.img}
      organiser={item?.organiser}
      goal={item?.goal}
      donations={item?.donations}
      currentRaised={item?.currentRaised}
    />

  ))
  return (
    <Layout
    title='Search'
    >
     <div className="flex justify-around">
      <div className="my-16 flex flex-col">
        <h2 className="text-[1.3rem] mb-4 font-bold text-[#1F1F1F]">Fundraisers for Individuals</h2>
          <div className="flex flex-wrap">
            {fundraiserCardElems}
          </div>
      </div>
     </div>

    </Layout>
  )
}

export default Individuals;