import Layout from '../components/Layout';


const  Home = () => {
  return (
    <Layout
    title='Home'
    >
      <div className='hero flex flex-wrap items-center justify-between h-full w-full'>
        <div className="left my-5 lg:my-3 w-full lg:w-[45%] xl:w-[45%]">
          <article className="hero-details text-[#1F1F1F]">
            <h1 className='text-[42px] xl:text-6xl 2xl:text-8xl  font-bold leading-tight'>Together, we can change the World
            </h1>
            <p className='text-md sm:text-xl lg:text-2xl font-medium my-5 lg:my-7'>
              With one-quarter of our global team dedicated to trust and safety, we’ve successfully managed fundraisers worldwide for more than a decade.
            </p>
            <button className='bg-[#1F1F1F] text-white font-medium rounded-[5px]  py-2 px-5 sm:py-2.5 sm:px-6 cursor-pointer hover:scale-95'>Start a Fundraiser</button>
          </article>
        </div>
        <div className="right w-full lg:w-[50%]">
          <img
          className='h-full 
           w-full'
          src='/hero.png'
          alt=' Illustration showing fund-raising flow' />
        </div>
      </div>
    </Layout>
  )
}

//w-full lg:w-[500px] xl:w-[500px] 2xl:w-full

export default Home;
