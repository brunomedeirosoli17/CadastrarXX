// pages/index.tsx
import { AlignJustify } from 'lucide-react';
import DataFetcher from '../components/DataFetcher';

const Home = () => {
  return (
    <div>
      <header className="bg-zinc-800 border-t border-zinc-700 p-6">
        <nav className="flex flex-1 space-x-10">
          <a href=""><ul>Home</ul></a>
          <a href=""><ul>Administração</ul></a>
          <a href=""><ul>Usuário</ul></a>
          <a href=""><ul>Olá, Fulano! Operador</ul></a>
        </nav>
      </header>
      <aside className="h-screen w-10 bg-white text-zinc-950 p-3">
        <nav>
          <a href="">
            <AlignJustify />
          </a>
        </nav>
        <DataFetcher /> {/* Incluímos o componente DataFetcher aqui */}
      </aside>
    </div>
  );
};

export default Home;
