// pages/api/auth/selection/user/delete/[userUuid].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userUuid } = req.query;

  if (req.method === 'DELETE') {
    try {
      await prisma.user.delete({
        where: { id: Number(userUuid) },
      });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
