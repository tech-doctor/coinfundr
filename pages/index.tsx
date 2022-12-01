import Layout from '../components/Layout';
import HeroArticle from '../components/Views/UserFlow/HeroArticle';
import Reason from '../components/Views/UserFlow/Reason';
import Owner from '../components/Views/UserFlow/Owner';
import Amount from '../components/Views/UserFlow/Amount';
import FundraiserField from '../components/Views/UserFlow/FundraiserField';
import FundraiserSuccess from '../components/Views/UserFlow/FundraiserSuccess';
import {app, storage} from '../firebase/clientApp';

const  Home = () => {
 console.log(storage)
  return (
    <Layout
    title='Home'
    >
      <div className='hero flex flex-wrap items-center justify-between h-full w-full'>
        <div className="left  my-5 lg:my-3 w-full lg:w-[45%] xl:w-[45%]">
          <HeroArticle/>
          {/* <Reason/> */}
          {/* <Owner/> */}
          {/* <Amount/> */}
          {/* <FundraiserField/> */}
          {/* <FundraiserSuccess/> */}
        </div>
        <div className="right w-full lg:w-[50%]">
          <img
          className='h-full w-full'
          src='/hero.png'
          alt=' Illustration showing fund-raising flow' />
        </div>
      </div>
    </Layout>
  )
}

export default Home;
