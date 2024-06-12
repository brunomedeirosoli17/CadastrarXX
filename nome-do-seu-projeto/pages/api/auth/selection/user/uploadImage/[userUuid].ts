// pages/api/auth/selection/user/uploadImage/[userUuid].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userUuid } = req.query;

  if (req.method === 'POST') {
    try {
      // Lógica para upload de imagem aqui
      res.status(200).json({ message: 'Image uploaded successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
