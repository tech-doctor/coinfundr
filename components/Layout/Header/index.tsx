import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useAppSelector, useAppDispatch } from '../../../Store/hooks';
import { updateWalletAddress, updateWalletStatus } from '../../../Store/slice';
import { connectWallet, getCurrentwalletConnected } from '../../../utils/Interact';
import ActiveLink from './activeLink';
import AccountComponent from '../../AccountHeader';
import MobileHeader from './mobile';


import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  //  const isConnected:boolean = useAppSelector(state => state.root.walletIsConnected)
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { isLoading, pendingConnector, connect, connectors } = useConnect();
  const [open , setOpen] = useState(isConnected)


  const [displayPopUp, setDisplayPopup] = useState<boolean>(false);


  useEffect (() => {
    const getWalletStatus =  async() => {
    const connect  = await getCurrentwalletConnected();
      dispatch(updateWalletAddress(connect.address))
      if(connect.status === 200){
        dispatch(updateWalletStatus(true))
      }
    }
    getWalletStatus()
  },[])

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  const connectWalletFunc = async() => {
    const connect  = await connectWallet();
    //dispatch(updateWalletStatus(true))
    dispatch(updateWalletAddress(connect.address))
   if(connect.status === 200){
    dispatch(updateWalletStatus(true))
    setDisplayPopup(true);
   }
    setTimeout(() => {
      setDisplayPopup(false);
    }, 3000)
  }

  const action = (
    <React.Fragment>
      <button className="px-4 text-[#E5383B]" onClick={() => disconnect()}>
        DISCONNECT
      </button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className=' px-3 sm:px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-14 shadow-md md:shadow-none pb-1 md:pb-0'>
      <div className='flex items-center  justify-between py-2 md:py-0 md:my-3 lg:my-4 xl:my-5'>
        <div className="left">
          <ActiveLink href = {'/'}>
            <img 
            // onClick={() => {
            //   router.reload()
            // }}
             className="w-32" src='/logo.png' alt='Coinfundr-logo'/>
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
          {isConnected ?
            <AccountComponent
              displayPopUp = {displayPopUp}
            /> 
                :
            <li>
              {connectors.map((connector) => (
                <button 
                  disabled={!connectors[0].ready}
                  key={connectors[0].id}
                  onClick={() => connect({ connector })}
                  className="search font-medium ml-3 border-2 border-black py-1 px-3 rounded-sm cursor-pointer hover:bg-black hover:text-white">Connect Metamask Wallet</button>
              ))}
            </li> 
          }
        </ul>
        <ul className=' mobile_account md:hidden'>
          <li className='cursor-pointer'>
            <MobileHeader/>
          </li>
        </ul>
      </div>
      {isConnected &&
      
      //<div>
      //     Connected to {address}
      //     <button onClick={() => disconnect()}>Disconnect</button>
      //  </div>
        <Snackbar
          open={open}
          autoHideDuration={2500}
          onClose={handleClose}
          message={`Connected to ${address}`}
          action={action}
        />
      }
    </div>
  )
}

export default Header;