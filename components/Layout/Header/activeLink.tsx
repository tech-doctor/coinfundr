import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface Props {
    children:ReactNode,
    href: any
  }
  
  const ActiveLink:React.FC<Props> = ({children, href}) => {
    const router =  useRouter();
    const path = router.asPath
    const style = {
     color: path === href && path !== '/' ?  'black' : '',
     //transform: path === href && path !== '/' ? 'scale(1.5)' : 'scale(1)'
    }
  
    const handleClick = (e:any) => {
      e.preventDefault()
      router.push(href)
    }
  
    return (
      <a href={href} onClick={handleClick} style={style}>
        {children}
      </a>
    )
  }

  export default ActiveLink;