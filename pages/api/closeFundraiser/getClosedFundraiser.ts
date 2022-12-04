// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../utils/db';

type Data = {
  name: string
}



export default async (req:NextApiRequest, res:NextApiResponse) => {

    const id:any = req.query.id;
    try{
      if(req.method === 'POST') {
        const snapshot = await db.collection('General').where('closed', '==', true).where('walletAddress', '==', req.body.id).get();
        const data =  snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })  
        );
        const optimisedResult = Object.assign(data.map((item:any) => {
          const {id, amount, imageLink, currentRaised, donations,charity, closed, form: {firstName, fundraiserName, lastName}} = item;
          return{
            amount, fundraiserName, firstName, lastName, imageLink, currentRaised,donations,charity,id,closed
          }
        }))
        res.status(200).json({
          status: 'data successfully added',
          optimisedResult
        })
      }
  } catch (error) {
    res.status(400).end();
  }
}
