// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../utils/db';

type Data = {
  name: string
}

export default async (req:NextApiRequest, res:NextApiResponse) => {
  try{
    // const snapshot = await db.collection('General').where('charity', '==', null).get();
    // const data =  snapshot.docs.map(doc => 
    //     doc.data()
    // );
    // const optimisedResult = Object.assign(data.map(item => {
    //     const {amount, imageLink, currentRaised, donations} = item;
    //     const {fundraiserName, firstName, lastName,} = item.form;
    //     return{
    //         amount, fundraiserName, firstName, lastName, imageLink, currentRaised,donations
    //     }
    // }))
    // res.status(200).json(
    //   optimisedResult
    // );
  

    const id:any = req.query.id

    if(req.method === 'POST') {
    const docRef = db.collection('General').doc(id);
     await docRef.set(
        req.body
      );

      res.status(200).json(
        {status: 'data successfully added'}
    )
    }
    res.status(500).json({message: 'sorry we only accept a POST request'})
  } catch (error) {
    res.status(400).end();
  }
}
