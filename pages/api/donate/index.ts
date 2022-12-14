// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../utils/db';


export default async (req:NextApiRequest, res:NextApiResponse) => {
  try{
    const id:any = req.query.id
    
    if(req.method === 'POST') {
    const docRef = db.collection('General').doc(req.body.id);
    await docRef.update(
      {
        currentRaised: req.body.amount,
        donations: req.body.donations + 1,
        //donators: []
      }
    );
        const snapshot = await db.collection('General').doc(req.body.id).get();
        const data = snapshot.data();
        res.status(200).json(
          data
        );
    res.status(200).json(
      {status: 'data successfully updated'}
    )
    }
    res.status(500).json({message: 'sorry we only accept a POST request'})
  } catch (error) {
    res.status(400).end();
  }
}
