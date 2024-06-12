import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-military-green">My CRUD App</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
