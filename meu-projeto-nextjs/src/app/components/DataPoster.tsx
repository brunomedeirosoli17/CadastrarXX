import axios from 'axios';
import React, { useState } from 'react';

const DataPoster = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPermissionId, setUserPermissionId] = useState(2);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('https://api-sci2-4ycuahis2a-rj.a.run.app/auth/selection/user/create', {
        userName,
        userPassword,
        userEmail,
        userPermissionId
      });
      alert('Usuário criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <div>
      <h1>Criação de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome de usuário" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={userPassword} 
          onChange={(e) => setUserPassword(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={userEmail} 
          onChange={(e) => setUserEmail(e.target.value)} 
        />
        <button type="submit">Criar Usuário</button>
      </form>
    </div>
  );
};

export default DataPoster;
