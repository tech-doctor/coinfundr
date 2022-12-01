import React, {useState, useEffect} from 'react';
import ActiveLink from '../Layout/Header/activeLink';
import ConnectSuccess from './connectSuccess';

interface Props {
  displayPopUp: boolean
}

const AccountComponent:React.FC<Props> = ({displayPopUp}) => {

  return (
    <div>
      <li className="charities font-medium ml-3 cursor-pointer">
        <ActiveLink href={"/account"}>
        <img 
        className='border-[1.5px] border-gray-300 hover:border-gray-400 rounded-full p-[3px] w-[45px] h-[45px]'
        src='/account.png' alt=' Coinfundr account navigation logo'/>
        </ActiveLink>
      </li>
      {displayPopUp &&  <ConnectSuccess/>}
    </div>
  )
}


export default AccountComponent;