// pages/api/auth/selection/permission/update/[perId].ts
import { NextApiRequest, NextApiResponse } from 'next';
import api from '../../../../../../src/services/api';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { perId } = req.query;
  try {
    const response = await api.put(`/auth/selection/permission/update/${perId}`, req.body);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
