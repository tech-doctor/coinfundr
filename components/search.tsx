import Layout from './Layout';
import {useState} from 'react'
import { LinearProgress } from '@mui/material';
import { data } from './data'
import Link from "next/link"
import SearchInput from './Views/search/SearchInput'


const  Search = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false)
  const checkSearchStatus = (status: boolean) => {
    if (status) {
      setSearchActive(true)
    } else {
      setSearchActive(false)
    }
  }
  return (
    <Layout
      title='Search'
    >
      <div className="">
        {/* <input className="border-2 rounded-full border-[#FFFFFF] w-2/3 lg:w-1/3  px-4 py-2 bg-[#E5E6E4] font-[Circular] text-[#94999A] text-xl text-center" type="text" placeholder="Search for fundraisers"/> */}
        <SearchInput onFocusHandler={(status) => checkSearchStatus(status)} />
      </div>


      {/* <h2 className="text-[1.5rem] font-bold text-[#1F1F1F]">Popular Fundraisers</h2> */}
      {!searchActive && <div className="flex justify-around hidden lg:block lg:flex">
        <div className="flex font-[Circular]">

          <Link href="/search/[id]" as={`/search/${data[0].id}`}>
            <div className="lg:h-[30rem] lg:w-[22rem] xl:h-[32rem] xl:w-[25rem] h-[32rem] w-[25rem] flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
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
          </Link>

          <div className="flex flex-col ml-[2rem]">

            <Link href="/search/[id]" as={`/search/${data[1].id}`}>
                <div className="lg:h-[14rem] lg:w-[38rem] xl:h-[15rem] xl:w-[42rem] h-[15rem] w-[42rem] flex mb-[1rem] bg-white rounded-l-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
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
            </Link>

            
            <Link href="/search/[id]" as={`/search/${data[2].id}`}>
              <div className="lg:h-[14rem] lg:w-[38rem] xl:h-[15rem] xl:w-[42rem] h-[15rem] w-[42rem] mt-[1rem] flex bg-white rounded-l-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
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
            </Link>

          </div>
        </div>
      </div>}

      {!searchActive &&  <div className="sm:flex sm:justify-around lg:hidden mt-16">
        <div className="flex flex-wrap">
            <div className=" h-[21rem] w-[16rem] mr-4 mt-4 flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
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

            <div className=" h-[21rem] w-[16rem] mr-4 mt-4  flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
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

            <div className=" h-[21rem] w-[16rem] mr-4 mt-4  flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
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
      </div>}




      {/* <div className="flex justify-around">
        <div className="w-full mt-16 xl:w-3/4 md:w-full sm:w-full ">
            <h2 className="text-[1.5rem] font-bold text-[#1F1F1F]">Help Dustin the Cat</h2>
          <div className="h-[27rem] w-full mt-[1rem] flex bg-white rounded-l-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className="h-full rounded-l-[8px] w-1/2" src="/dustin_the_cat.png"/>
                <div className="w-1/2 p-8 flex flex-col justify-between">

                  <div className="">
                    <h3 className="text-[1.3rem]  font-bold text-[#1F1F1F]">Help Dustin the Cat</h3>
                    <p className="text-sm text-[#94999A]">by Femi Abubakar</p>
                  </div>

                  <LinearProgress 
                    variant="determinate" 
                    value={30} 
                    sx={{
                      backgroundColor: '#D9D9D9',
                      '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: '#68C581',
      
                        
                      }
                    }}
                  />

                  <div className="flex justify-between ">
                    <div>
                      <h3 className="text-[1.3rem] font-bold text-[#1F1F1F] tracking-widest">$1450</h3>
                      <p className="text-sm text-[#94999A]">Raised of $5000</p>
                    </div>
                    <div>
                      <h3 className="text-[1.3rem] font-bold text-[#1F1F1F]">240</h3>
                      <p className="text-sm text-[#94999A]">Total donations</p>
                    </div>
                  </div>
                  <button className="text-[1rem] font-bold bg-[#FFC300] text-[#1F1F1F] hover:bg-[#FFD60A] px-[1.2rem] py-[.8rem] rounded-[5px] self-start">Donate Now</button>
                  <h5 className="font-bold text-[#5E6364]">&bull; Animals</h5>
                </div>
          </div>
          <p className="py-8 font-semi-bold text-[1.3rem] border-b-2 border-[#D9D9D9] ">
            Hi, my name is Femi and I am fundraising for Dustin’s surgery. Dustin is a stray who I found hurt really badly on the streets. I managed to catch him and take him to the vet and it seems like the poor thing has been hurt for at least a couple of months. The costs were extremely high but my heart wouldn’t let me allow tiger to die just for financial reasons when he had full chance of recovery and living a painless , happy life. Anything helps , no matter how small
          </p>
          <h2 className="text-[1.5rem] py-8 font-bold text-[#6D66FB] sm:text-center md:text-left">Latest Donations</h2>
          <div className="flex justify-between sm:justify-around md:justify-between flex-wrap mb-8">
            <div className="flex flex-col mb-8">
              <h5 className="text-sm font-bold text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
              <p className="text-sm text-[#94999A]">$40</p>
            </div>
            <div className="flex flex-col mb-8">
              <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
              <p className="text-sm text-[#94999A]">$40</p>
            </div>
            <div className="flex flex-col mb-8">
              <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
              <p className="text-sm text-[#94999A]">$40</p>
            </div>
            <div className="flex flex-col mb-8">
              <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
              <p className="text-sm text-[#94999A]">$40</p>
            </div>
            <div className="flex flex-col mb-8">
              <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
              <p className="text-sm text-[#94999A]">$40</p>
            </div>
            <div className="flex flex-col mb-8">
              <h5 className="text-sm font-bold  text-[#1F1F1F]">0xf21148F8d967dDD0C2a2e014b6Dba065ce214Ea85ce214Ea8</h5>
              <p className="text-sm text-[#94999A]">$40</p>
            </div>
          </div>
        </div>
      </div> */}


      {/* <div className="flex justify-around pt-16">
        <input className="border-2 rounded-full border-[#FFFFFF] w-1/3 px-4 py-2 bg-[#E5E6E4] font-[Circular] text-[#94999A] text-xl text-center" type="text" placeholder="Search for fundraisers"/>
      </div>

      <div>
        <div >
          <h2 className="text-[1.3rem] mt-16 mb-4 font-bold text-[#1F1F1F]">Search Results</h2>

          <div className="flex flex-wrap">
            <div className="h-[21rem] w-[16rem] mr-4 flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className="w-[16rem] rounded-t-[8px] h-1/2" src="/dustin_the_cat.png"/>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[1rem]  font-bold text-[#1F1F1F]">Help Dustin the Cat</h3>
                    <p className="text-xs text-[#94999A]">by Femi Abubakar</p>
                  </div>

                  <LinearProgress 
                    variant="determinate" 
                    value={30} 
                    sx={{
                      backgroundColor: '#D9D9D9',
                      '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: '#68C581',
      
                        
                      }
                    }}
                  />

                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F] tracking-widest">$1450</h3>
                      <p className="text-xs text-[#94999A]">Raised of $5000</p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F]">240</h3>
                      <p className="text-xs text-[#94999A]">Total donations</p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="h-[21rem] w-[16rem] mr-4 flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className="w-[16rem] rounded-t-[8px] h-1/2" src="/dustin_the_cat.png"/>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[1rem]  font-bold text-[#1F1F1F]">Help Dustin the Cat</h3>
                    <p className="text-xs text-[#94999A]">by Femi Abubakar</p>
                  </div>

                  <LinearProgress 
                    variant="determinate" 
                    value={30} 
                    sx={{
                      backgroundColor: '#D9D9D9',
                      '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: '#68C581',
      
                        
                      }
                    }}
                  />

                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F] tracking-widest">$1450</h3>
                      <p className="text-xs text-[#94999A]">Raised of $5000</p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F]">240</h3>
                      <p className="text-xs text-[#94999A]">Total donations</p>
                    </div>
                  </div>
                </div>
            </div>

          
            <div className="h-[21rem] w-[16rem] mr-4 flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className="w-[16rem] rounded-t-[8px] h-1/2" src="/dustin_the_cat.png"/>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[1rem]  font-bold text-[#1F1F1F]">Help Dustin the Cat</h3>
                    <p className="text-xs text-[#94999A]">by Femi Abubakar</p>
                  </div>

                  <LinearProgress 
                    variant="determinate" 
                    value={30} 
                    sx={{
                      backgroundColor: '#D9D9D9',
                      '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: '#68C581',
      
                        
                      }
                    }}
                  />

                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F] tracking-widest">$1450</h3>
                      <p className="text-xs text-[#94999A]">Raised of $5000</p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F]">240</h3>
                      <p className="text-xs text-[#94999A]">Total donations</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  )
}

export default Search;
