import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/auth/selection/user/list')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Erro ao obter usuários:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
