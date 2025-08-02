import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EcomStore" />
        <link rel="preconnect" href="https://fakestoreapi.com" />
        <link rel="dns-prefetch" href="https://fakestoreapi.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'EcomStore',
              description: 'Premium e-commerce store with quality products',
              url: 'https://your-domain.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://your-domain.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
