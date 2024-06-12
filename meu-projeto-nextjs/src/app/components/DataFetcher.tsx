//components/DataFetcher
"use client"
import { useEffect, useState } from 'react';
import api from '../services/api';

const DataFetcher = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/auth/selection/user/list');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Erro ao buscar dados da API');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Tentando</h1>
      {error && <div>{error}</div>}
      {data && (
        <div>
          <h2>Dados da API:</h2>
          <ul>
            {data.map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DataFetcher;
