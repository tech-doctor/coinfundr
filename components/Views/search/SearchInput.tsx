import React, { useCallback, useRef, useEffect, useState } from 'react'
import { LinearProgress } from '@mui/material';
//import { data } from '../../data'
import Link from "next/link"
import FundraiserCard from '../../FundraiserCard'
const BASE_URL =  process.env.NEXT_PUBLIC_SERVER 

interface SearchProps {
  onFocusHandler: (status: boolean) => void
}

function  SearchInput({ onFocusHandler }: SearchProps) {
  const searchRef = useRef<any>(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState<any[]>([])
  const [data, setData] = useState<any>([])

  const searchEndpoint = (query: string) => `/api/search?q=${query}`

const fetchData = async() => {
  const res = await fetch(`${BASE_URL}/api/getAll`)
  const data = await res.json()
  console.log(data)
  setData(data)
}

useEffect(() => {
  fetchData()
},[])

//console.log(data)



  const onChange = useCallback((event: any) => {
      const query = event.target.value
      setQuery(query)
      if (query.length) {
      //   fetch(searchEndpoint(query))
      //     .then((res) => res.json())
      //     .then((res) => {
      //       setResults(res.results)
      //     })
        let newArr: any = []
        data?.map((item:any) => {
          if (item?.fundraiserName.toLowerCase().includes(query.toLowerCase())) {
            newArr.push(item)
          }
        })
        setResults(newArr)
      } else {
        setResults(data)
       //setResults(data)
      }
  }, [query])

  const onFocus = () => {
      setActive(true)
      window.addEventListener('click', onClick)
  }

  const onClick = useCallback((event: any) => {
      onFocusHandler(true)
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setActive(false)
        onFocusHandler(false)
        setQuery('')
        setResults([])
        window.removeEventListener('click', onClick)
      }
  }, [])




  return (
  <>
    <div className="flex justify-around my-16">
      <input 
        className="border-2 rounded-full outline-[#68C581] border-[#FFFFFF] w-2/3 lg:w-1/3  px-4 py-2 bg-[#E5E6E4] font-[Circular] text-[#94999A] text-xl text-center" type="text" placeholder="Search for fundraisers"
        onChange={onChange}
        onFocus={onFocus}
        ref={searchRef}
        value={query}
      />
    </div>

      {active && results.length > 0 && (
        <div className="flex justify-around">
          <div>
            <h2 className="text-[1.3rem] mb-4 font-bold text-[#1F1F1F]">Search Results</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mb-16">
                {results.map(item => (
                  <React.Fragment key = {item.id}>
                  <Link  href="/search/[id]" as={`/search/${item.id}`}>
                    <FundraiserCard 
                      //id={item?.id}
                      name={item?.fundraiserName}
                      img={item?.imageLink}
                      firstName = {item?.firstName}
                      lastName = {item?.lastName}
                      //organiser={item?.organiser}
                      goal={item?.amount}
                      donations={item?.donations}
                      currentRaised={item?.currentRaised}
                    />
                  </Link>
                  </React.Fragment>
                  
                ))}
              </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchInput