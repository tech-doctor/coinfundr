import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';

interface Props {
  children: ReactNode,
  title: string
}
const Layout:React.FC<Props> = ({children, title}) => {
  return (
    <div>
    <Head>
    <title>{`Coinfundr. | ${title}`}</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon-32x32.png" />
  </Head>
  <main>
    <Header/>
    <div className='px-3 sm:px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-14'>
    {children}
    </div>
  </main>
</div>
  )
}

export default Layout;