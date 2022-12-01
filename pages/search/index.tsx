import Layout from '../../components/Layout';
import { LinearProgress } from '@mui/material';
import { data } from '../../components/data'


const  Search = () => {
  return (
    <Layout
      title='Search'
    >
      <div className="flex justify-around pt-16">
        <input className="border-2 rounded-full border-[#FFFFFF] w-2/3 lg:w-1/3  px-4 py-2 bg-[#E5E6E4] font-[Circular] text-[#94999A] text-xl text-center" type="text" placeholder="Search for fundraisers"/>
      </div>

      <div className="flex justify-around hidden lg:block lg:flex">
        <div className="flex font-[Circular] mt-16">
          <div className="lg:h-[30rem] lg:w-[22rem] xl:h-[32rem] xl:w-[25rem] h-[32rem] w-[25rem] flex flex-col bg-white rounded-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
            <img className="w-full rounded-t-[8px] h-1/2" src={data[0].img}/>
            <div className="h-1/2 p-4 mt-4 flex flex-col justify-between">
              <div>
                <h3 className="text-[1.3rem] font-bold text-[#1F1F1F]">{data[0].name}</h3>
                <p className="text-sm text-[#94999A]">by {data[0].organiser}</p>
              </div>
              <div className="flex justify-between mb-16">
                <div>
                  <h3 className="text-[1.3rem] font-bold text-[#1F1F1F] tracking-widest">${data[0].currentRaised}</h3>
                  <p className="text-sm text-[#94999A]">Raised of ${data[0].goal}</p>
                </div>
                <div>
                  <h3 className="text-[1.3rem] font-bold text-[#1F1F1F]">{data[0].donations}</h3>
                  <p className="text-sm text-[#94999A]">Total donations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col ml-[2rem]">
            <div className="lg:h-[14rem] lg:w-[38rem] xl:h-[15rem] xl:w-[42rem] h-[15rem] w-[42rem] flex mb-[1rem] bg-white rounded-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
              <img className="rounded-l-[8px] w-1/2" src={data[1].img}/>
              <div className="w-1/2 p-4 mt-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-[1.3rem]  font-bold text-[#1F1F1F]">{data[1].name}</h3>
                  <p className="text-sm text-[#94999A]">by {data[1].organiser}</p>
                </div>
                <div className="flex justify-between mb-16">
                  <div>
                    <h3 className="text-[1.3rem] font-bold text-[#1F1F1F] tracking-widest">${data[1].currentRaised}</h3>
                    <p className="text-sm text-[#94999A]">Raised of ${data[1].goal}</p>
                  </div>
                  <div>
                    <h3 className="text-[1.3rem] font-bold text-[#1F1F1F]">{data[1].donations}</h3>
                    <p className="text-sm text-[#94999A]">Total donations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:h-[14rem] lg:w-[38rem] xl:h-[15rem] xl:w-[42rem] h-[15rem] w-[42rem] mt-[1rem] flex bg-white rounded-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
              <img className="rounded-l-[8px] w-1/2" src={data[2].img}/>
              <div className="w-1/2 p-4 mt-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-[1.3rem]  font-bold text-[#1F1F1F]">{data[2].name}</h3>
                  <p className="text-sm text-[#94999A]">by {data[2].organiser}</p>
                </div>
                <div className="flex justify-between mb-16">
                  <div>
                    <h3 className="text-[1.3rem] font-bold text-[#1F1F1F] tracking-widest">${data[2].currentRaised}</h3>
                    <p className="text-sm text-[#94999A]">Raised of ${data[2].goal}</p>
                  </div>
                  <div>
                    <h3 className="text-[1.3rem] font-bold text-[#1F1F1F]">{data[2].donations}</h3>
                    <p className="text-sm text-[#94999A]">Total donations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:flex sm:justify-around lg:hidden mt-16">
        <div className="flex flex-wrap">
            <div className=" h-[21rem] w-[16rem] mr-4 mt-4 flex flex-col bg-white rounded-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className="w-[16rem] rounded-t-[8px] h-1/2" src={data[0].img}/>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[1rem]  font-bold text-[#1F1F1F]">{data[0].name}</h3>
                    <p className="text-xs text-[#94999A]">by {data[0].organiser}</p>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F] tracking-widest">${data[0].currentRaised}</h3>
                      <p className="text-xs text-[#94999A]">Raised of ${data[0].goal}</p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F]">{data[0].donations}</h3>
                      <p className="text-xs text-[#94999A]">Total donations</p>
                    </div>
                  </div>
                </div>
            </div>

            <div className=" h-[21rem] w-[16rem] mr-4 mt-4  flex flex-col bg-white rounded-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className="w-[16rem] rounded-t-[8px] h-1/2" src={data[1].img}/>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[1rem]  font-bold text-[#1F1F1F]">{data[1].name}</h3>
                    <p className="text-xs text-[#94999A]">by {data[1].organiser}</p>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F] tracking-widest">${data[1].currentRaised}</h3>
                      <p className="text-xs text-[#94999A]">Raised of ${data[1].goal}</p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F]">{data[1].donations}</h3>
                      <p className="text-xs text-[#94999A]">Total donations</p>
                    </div>
                  </div>
                </div>
            </div>

            <div className=" h-[21rem] w-[16rem] mr-4 mt-4  flex flex-col bg-white rounded-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className="w-[16rem] rounded-t-[8px] h-1/2" src={data[2].img}/>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[1rem]  font-bold text-[#1F1F1F]">{data[2].img}</h3>
                    <p className="text-xs text-[#94999A]">by {data[2].name}</p>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F] tracking-widest">${data[2].currentRaised}</h3>
                      <p className="text-xs text-[#94999A]">Raised of ${data[2].goal}</p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F]">{data[2].donations}</h3>
                      <p className="text-xs text-[#94999A]">Total donations</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Search;