import { ReactNode } from 'react';
import Layout from './layout'; // Importe o layout global

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <Layout> {/* Renderize o layout global */}
      {children} {/* Renderize o conteúdo específico da página dentro do layout */}
    </Layout>
  );
}

export default Page;
