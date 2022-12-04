// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../utils/db';


export default async (req:NextApiRequest, res:NextApiResponse) => {
  try{
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
