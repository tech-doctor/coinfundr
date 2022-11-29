import { useCallback, useRef, useState } from 'react'
import { LinearProgress } from '@mui/material';
import { data } from '../pages/data'
import Link from "next/link"
import FundraiserCard from './FundraiserCard'


interface SearchProps {
    onFocusHandler: (status: boolean) => void
}

function  SearchInput({ onFocusHandler }: SearchProps) {
    const searchRef = useRef(null)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [results, setResults] = useState<any[]>([])

    const searchEndpoint = (query: string) => `/api/search?q=${query}`

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
            data.map(item => {
                if (item.name.toLowerCase().includes(query.toLowerCase())) {
                    newArr.push(item)
                }
            })
            setResults(newArr)
        } else {
          setResults([])
        }
    }, [])

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
            className="border-2 rounded-full border-[#FFFFFF] w-2/3 lg:w-1/3  px-4 py-2 bg-[#E5E6E4] font-[Circular] text-[#94999A] text-xl text-center" type="text" placeholder="Search for fundraisers"
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

                <div className="flex flex-wrap mb-16">
                    {results.map(item => (
                        <Link  href="/search/[id]" as={`/search/${item.id}`}>
                            <FundraiserCard 
                            id={item?.id}
                            name={item?.name}
                            img={item?.img}
                            organiser={item?.organiser}
                            goal={item?.goal}
                            donations={item?.donations}
                            currentRaised={item?.currentRaised}

                        />
                        </Link>
                    ))}
                </div>
            </div>

        </div>

      )}
    </>
  )
}

export default SearchInput