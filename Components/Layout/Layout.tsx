import Head from 'next/head';

import Footer from './Footer';
import { ReactNode } from 'react';
import { Sora } from 'next/font/google';
import Navbar from './Navbar';
const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const Layout = ({
  children,
  title = 'Premium E-commerce Store',
  description = 'Discover amazing products at unbeatable prices',
  keywords = 'e-commerce, online shopping, products',
  ogImage = '/og-image.jpg',
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={typeof window !== 'undefined' ? window.location.href : ''}
        />
      </Head>
      <div className={`${sora.className} flex flex-col relative`}>
         <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
