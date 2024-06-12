// pages/api/auth/selection/permission/list/dropdown.ts
import { NextApiRequest, NextApiResponse } from 'next';
import api from '../../../../../../src/services/api';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await api.get('/auth/selection/permission/list/dropdown');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
