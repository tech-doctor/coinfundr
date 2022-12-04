import Layout from '../../components/Layout';
import {useState} from 'react'
import { LinearProgress } from '@mui/material';
//import { data } from '../../components/data'
import Link from "next/link"
import SearchInput from '../../components/Views/search/SearchInput'
import { NextPage } from 'next';


const BASE_URL =  process.env.NEXT_PUBLIC_SERVER 

interface Props{
  data:any
}


const  Search:NextPage<Props> = ({data}) => {

  //console.log(data[0])
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
      {!searchActive && 
      <div className="flex justify-around hidden lg:block lg:flex">
        <div className="flex font-[Circular]">

          <Link href="/search/[id]" as={`/search/${data[0].id}`}>
            <div className="lg:h-[30rem] lg:w-[22rem] xl:h-[32rem] xl:w-[25rem] h-[32rem] w-[25rem] flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
              <img className="w-full rounded-t-[8px] h-1/2" src={data[0].imageLink}/>
              <div className="h-1/2 p-4 mt-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-[1.3rem] font-bold text-[#1F1F1F]">{data[0].fundraiserName}</h3>
                  <p className="text-sm text-[#94999A]">by <span> {data[0].firstName}</span> <span>{data[0].lastName}</span></p>
                </div>
                <div className="flex justify-between mb-16">
                  <div>
                    <h3 className="text-[1.3rem] font-bold text-[#1F1F1F] tracking-widest">${data[0].currentRaised}</h3>
                    <p className="text-sm text-[#94999A]">Raised of ${data[0].amount}</p>
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
                  <img className="rounded-l-[8px] w-1/2" src={data[1].imageLink}/>
                  <div className="w-1/2 p-4 mt-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[1.3rem]  font-bold text-[#1F1F1F]">{data[1].fundraiserName}</h3>
                      <p className="text-sm text-[#94999A]">by  <span> {data[1].firstName}</span> <span>{data[1].lastName}</span></p>
                    </div>
                    <div className="flex justify-between mb-16">
                      <div>
                        <h3 className="text-[1.3rem] font-bold text-[#1F1F1F] tracking-widest">${data[1].currentRaised}</h3>
                        <p className="text-sm text-[#94999A]">Raised of ${data[1].amount}</p>
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
                <img className="rounded-l-[8px] w-1/2" src={data[2].imageLink}/>
                <div className="w-1/2 p-4 mt-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[1.3rem]  font-bold text-[#1F1F1F]">{data[2].fundraiserName}</h3>
                    <p className="text-sm text-[#94999A]">by  <span> {data[2].firstName}</span> <span>{data[2].lastName}</span></p>
                  </div>
                  <div className="flex justify-between mb-16">
                    <div>
                      <h3 className="text-[1.3rem] font-bold text-[#1F1F1F] tracking-widest">${data[2].currentRaised}</h3>
                      <p className="text-sm text-[#94999A]">Raised of ${data[2].amount}</p>
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

      {!searchActive &&  
      
      <div className="sm:flex sm:justify-around lg:hidden mt-16">
        <div className="flex flex-wrap">
        <Link href="/search/[id]" as={`/search/${data[0].id}`}>
            <div className=" h-[21rem] w-[16rem] mr-4 mt-4 flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className="w-[16rem] rounded-t-[8px] h-1/2" src={data[0].imageLink}/>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[1rem]  font-bold text-[#1F1F1F]">{data[0].fundraiserName}</h3>
                    <p className="text-xs text-[#94999A]">by  <span> {data[0].firstName}</span> <span>{data[0].lastName}</span></p>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F] tracking-widest">${data[0].currentRaised}</h3>
                      <p className="text-xs text-[#94999A]">Raised of ${data[0].amount}</p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F]">{data[0].donations}</h3>
                      <p className="text-xs text-[#94999A]">Total donations</p>
                    </div>
                  </div>
                </div>
            </div>
            </Link>
            

            <Link href="/search/[id]" as={`/search/${data[1].id}`}>
            <div className=" h-[21rem] w-[16rem] mr-4 mt-4  flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className="w-[16rem] rounded-t-[8px] h-1/2" src={data[1].imageLink}/>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[1rem]  font-bold text-[#1F1F1F]">{data[1].fundraiserName}</h3>
                    <p className="text-xs text-[#94999A]">by  <span> {data[1].firstName}</span> <span>{data[1].lastName}</span></p>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F] tracking-widest">${data[1].currentRaised}</h3>
                      <p className="text-xs text-[#94999A]">Raised of ${data[1].amount}</p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F]">{data[1].donations}</h3>
                      <p className="text-xs text-[#94999A]">Total donations</p>
                    </div>
                  </div>
                </div>
            </div>
            </Link>


            <Link href="/search/[id]" as={`/search/${data[0].id}`}>
            <div className=" h-[21rem] w-[16rem] mr-4 mt-4  flex flex-col bg-white rounded-t-[8px] shadow-[0_.2px_30px_4px_rgba(29,48,59,0.04)]">
                <img className="w-[16rem] rounded-t-[8px] h-1/2" src={data[2].imageLink}/>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[1rem]  font-bold text-[#1F1F1F]">{data[2].fundraiserName}</h3>
                    <p className="text-xs text-[#94999A]"> <span> {data[2].firstName}</span> <span>{data[2].lastName}</span></p>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F] tracking-widest">${data[2].currentRaised}</h3>
                      <p className="text-xs text-[#94999A]">Raised of ${data[2].amount}</p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-[#1F1F1F]">{data[2].donations}</h3>
                      <p className="text-xs text-[#94999A]">Total donations</p>
                    </div>
                  </div>
                </div>
            </div>
            </Link>
        </div>
      </div>}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${BASE_URL}/api/getAll`)
  const data = await res.json()
  return {
    props: {
      data,
    },
    revalidate: 10
  }
}

export default Search;
