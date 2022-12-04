// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../utils/db';

type Data = {
  name: string
}

export default async (req:NextApiRequest, res:NextApiResponse) => {
  try{
    //const { slug } = req.body;
    //const entries = await db.collection('entries').get();
    //const entriesData = entries.docs.map(entry => entry.data());

    const snapshot = await db.collection('General').where('charity', '==', null).get();
    // snapshot.forEach((doc) => {
    //   //console.log(doc.id, '=>', doc.data());
    //   res.status(200).json(
    //     [{ id: doc.id, ...doc.data()}]
    //   );
    // });

   const data =  snapshot.docs.map(doc => {
      //console.log(doc.id, '=>', doc.data());
      // doc.data().filter(doc.data().forEach((item:any) => {
      //   item?.charity === null
      // }))

      // function check (arr:any) {
      //   return arr.charity !== null
      // }
      const neededData = doc.data()
      return (
        neededData
      )
    });

    
    res.status(200).json(
      data
    );



  //   walletIsConnected: false,  
  // reason: '',
  // owner: '',
  // charity: null,
  // amount: 0,
  // form: {
  //   firstName: '',
  //   lastName: '',
  //   fundraiserName: '',
  //   reasonForFund: '',
  // },
  // imageLink: null,






    // if (entriesData.some(entry => entry.slug === slug)) {
    //   res.status(400).end();
    // } 

    // else {
    //   const { id } = await db.collection('entries').add({
    //     ...req.body,
    //     created: new Date().toISOString(),
    //   });
      // res.status(200).json({ id });
    // }

  } catch (error) {
    res.status(400).end();
  }
}


// const snapshot = await db.collection('users').get();
// snapshot.forEach((doc) => {
//   console.log(doc.id, '=>', doc.data());
// });

