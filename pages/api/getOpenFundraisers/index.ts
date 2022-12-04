// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../utils/db';

export default async (req:NextApiRequest, res:NextApiResponse) => {
  const id:any = req.query.id;

    try{
    if(req.method === 'POST') {
      const snapshot =  await db.collection('General').where('walletAddress', '==',  
      req.body.id
      // "0xfdd3160870008fcd24d62b0f0fd3a54eafc9f1f3"
      ).get();

     const data =  snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
      })  
    );

    const optimisedResult = Object.assign(data.map((item:any) => {
      const {id, amount, imageLink, currentRaised, donations, form: {firstName, fundraiserName, lastName}} = item;
      return{
        amount, fundraiserName, firstName, lastName, imageLink, currentRaised,donations, id
      }
    }))
    res.status(200).json({
      status: 'data successfully added',
      optimisedResult
    }
    );
    }
      res.status(500).json({message: 'sorry we only accept a POST request'})
    
  } 
  catch (error) {
    res.status(400).end();
  }
}
