// server.ts

import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rota para criar um novo usuário
app.post('/auth/selection/user/create', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.json(newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
