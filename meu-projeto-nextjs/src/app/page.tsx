import { AlignJustify } from 'lucide-react';
import DataFetcher from './components/DataFetcher';
import dynamic from 'next/dynamic';

const DynamicDataPoster = dynamic(() => import('./components/DataPoster'), { ssr: false });

const Home = () => {
  return (
    <div>
      <DataFetcher />
      <DynamicDataPoster />
    </div>
  );
};

export default Home;
