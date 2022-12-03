import type { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../redis';
import { Message } from '../../typings';

type Data = {
  message: Message
};

type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {

  if (req.method !== 'GET') {
    res.status(405).json({ body: 'Method Not Allowed.'});
    return;
  }



  res.status(200).json({ message: newMessage })
}
