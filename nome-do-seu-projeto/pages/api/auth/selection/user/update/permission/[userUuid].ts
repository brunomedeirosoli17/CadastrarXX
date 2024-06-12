// pages/api/auth/selection/user/update/permission/[userUuid].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userUuid } = req.query;

  if (req.method === 'PUT') {
    try {
      const { permission } = req.body;
      const updatedUser = await prisma.user.update({
        where: { id: Number(userUuid) },
        data: { permission },
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
