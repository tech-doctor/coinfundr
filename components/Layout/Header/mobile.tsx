import React, {useState} from 'react';
import { useAppDispatch } from '../../../Store/hooks';
import { updateWalletAddress, updateWalletStatus } from '../../../Store/slice';
import { connectWallet } from '../../../utils/Interact';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useAppSelector } from '../../../Store/hooks';
import ActiveLink from './activeLink';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const  MobileHeader = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    top: false,
  }); 
  const isConnected:boolean = useAppSelector(state => state.root.walletIsConnected) 


  const connectWalletFunc = async() => {
    const connect  = await connectWallet();
    //dispatch(updateWalletStatus(true))
    dispatch(updateWalletAddress(connect.address))
   if(connect.status === 200){
    dispatch(updateWalletStatus(true))
    //setDisplayPopup(true);
   }
    // setTimeout(() => {
    //   setDisplayPopup(false);
    // }, 4000)
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, ['top']: open });
    };


    const linkFunc = (link:string) =>{
      return (
        <ActiveLink href={`/${link}`}>
          <p className=' cursor-pointer'>{link.charAt(0).toUpperCase() + link.slice(1)}</p>
        </ActiveLink>  
      )
    }


  const list = () => (
    <Box
      sx={{ width: 'auto', paddingBottom: '10px' }}
      role="presentation"
      onClick={toggleDrawer('top', false)}
      onKeyDown={toggleDrawer('top', false)}
    >
       <List>
          <ListItemButton>
          <ActiveLink href = {'/'}>
            <img  className="w-32 cursor-pointer" src='/logo.png' alt='Coinfundr-logo'/>
          </ActiveLink>  
          </ListItemButton>
      </List>
      <List>
        {[linkFunc('search'), linkFunc('individuals'), linkFunc('charities')].map((text, index) => (
          <ListItem 
          
          key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>))}
          {!isConnected? 
          <div 
          onClick={connectWalletFunc}
          className='bg-[#6D66FB] text-white w-fit mx-3.5 px-2 py-1 text-sm rounded-md cursor-pointer'>
          Connect Wallet
        </div>: 
        <ListItem sx = {{color:'#6D66FB', textDecoration: 'underline', cursor:'pointer', width:'fit-content'}}>
          <ActiveLink href={`/account`}>
             Account
          </ActiveLink>  
        </ListItem>
        }
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('top', true)}>
        <MenuIcon
          sx= {{fontSize:'28px', color: 'black'}}
        />
      </Button>
      <SwipeableDrawer
      className='md:hidden'
        anchor={'top'}
        open={state.top}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}


export default MobileHeader;
