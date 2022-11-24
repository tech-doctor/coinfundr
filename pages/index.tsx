import Head from 'next/head';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Layout from '../components/Layout';


export default function Home() {
  return (
    <Layout>
      <h1 className='text-red-500'>
        Happy coding
      </h1>
    </Layout>
  )
}
