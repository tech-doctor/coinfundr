export const time = 'hello'// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../utils/db';


export default async (req:NextApiRequest, res:NextApiResponse) => {
  const id:any = req.query.id;

  try{
  const snapshot = await db.collection('General').doc(id).get();
  const data = snapshot.data();
  res.status(200).json(
    data
  );

  } 
  catch (error) {
    res.status(400).end();
  }
}
