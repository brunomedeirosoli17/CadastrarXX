import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../globals.css';
import Layout from './layout';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
