import dynamic from 'next/dynamic';
import React from 'react';

// Componente dinâmico para garantir que DataPoster só seja renderizado no lado do cliente
const DynamicDataPoster = dynamic(() => import('../components/DynamicDataPoster'), { ssr: false });

const Home = () => {
  return (
    <div>
      {/* Renderiza DynamicDataPoster no lado do cliente */}
      <DynamicDataPoster />
    </div>
  );
};

export default Home;
