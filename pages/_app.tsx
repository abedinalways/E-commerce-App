import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import '../styles/globals.css';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextShop - Modern E-commerce</title>
        <meta
          name="description"
          content="A professional e-commerce site built with Next.js."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <>
          <Component {...pageProps} />
          <Toaster
            position="top-right"
            toastOptions={{
              success: {
                style: {
                  background: '#4ade80', // green
                  color: '#000',
                },
              },
              error: {
                style: {
                  background: '#f87171', // red
                  color: '#000',
                },
              },
            }}
          />
        </>
      </Provider>
    </>
  );
}
