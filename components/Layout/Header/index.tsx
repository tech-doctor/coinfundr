import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector, useAppDispatch } from '../../../Store/hooks';
import { updateWalletStatus } from '../../../Store/slice';
import ActiveLink from './activeLink';
import AccountComponent from '../../AccountHeader';
import MobileHeader from './mobile';
import { useConnect, useAccount, useEnsName } from 'wagmi' 
import { InjectedConnector } from 'wagmi/connectors/injected'

const Header = () => {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  
  return (
    <div className=' px-3 sm:px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-14 shadow-md md:shadow-none pb-1 md:pb-0'>
      <div className='flex items-center  justify-between py-2 md:py-0 md:my-3 lg:my-4 xl:my-5'>
        <div className="left">
          <ActiveLink href = {'/'}>
            <img  className="w-32" src='/logo.png' alt='Coinfundr-logo'/>
          </ActiveLink>  
        </div>
        <ul className = "flex items-center text-gray-600 hidden md:flex">
          <li className="search font-medium mx-3 cursor-pointer">
            <ActiveLink href={"/search"}>
              <span><SearchIcon
              sx = {{color: '#498DFC', fontSize: '18px'}}
              /></span>
              <span>Search</span>
            </ActiveLink>  
          </li>
          <li className="individual font-medium mx-3 cursor-pointer">
          <ActiveLink href={"/individuals"}>
              Individual
            </ActiveLink>  
          </li>
          <li className="charities font-medium mx-3 cursor-pointer">
           <ActiveLink href={"/charities"}>
              Charities
           </ActiveLink>
          </li>
          {!isConnected ?
            <li 
            onClick={() => connect()}
            className="search font-medium ml-3 border-2 border-black py-1 px-3 rounded-sm cursor-pointer
            hover:bg-black hover:text-white
            ">
              Connect MetaMask  Wallet
            </li> : 
          <AccountComponent displayPopUp={false} />
          }
        </ul>
        <ul className=' mobile_account md:hidden'>
          <li className='cursor-pointer'>
            <MobileHeader/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;