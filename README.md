ShopSphere - E-Commerce Platform
live link- [ https://bigshop-rho.vercel.app ]
 
ShopSphere is a modern e-commerce web application built with Next.js, Typescript featuring a dynamic product catalog, responsive design, and a professional UI. It fetches product data from the Fake Store API and showcases products with a gradient-animated logo, smooth navigation, and a custom 404 page.
Features

Product Listing: Displays all products in a responsive grid at /Products, with details like price, rating, and category.
Individual Product Pages: Dynamic routes (/Products/[id]) for detailed product views.
Custom 404 Page: User-friendly error page with consistent navigation.
Animated Logo: Professional gradient logo with Framer Motion animations for the "ShopSphere" branding.
Responsive Design: Built with Tailwind CSS for a mobile-friendly, modern UI.
Performance Optimized: Uses Next.js Incremental Static Regeneration (ISR) for fast page loads.
Type Safety: TypeScript ensures robust, error-free code.

Tech Stack

Framework: Next.js (Pages Router)
Styling: Tailwind CSS
Animations: Framer Motion
Type System: TypeScript
API: Fake Store API (https://fakestoreapi.com)
Image Optimization: Next.js Image component (webp/avif formats)
Other: Styled Components (optional, for enhanced styling)

Project Structure
shopsphere/
├── components/
│   └── ShopSphereLogo.tsx      # Animated logo component
├── pages/
│   ├── Products/
│   │   ├── index.tsx          # Products listing page (/Products)
│   │   └── [id].tsx           # Individual product page (/Products/[id])
│   ├── 404.tsx                # Custom 404 page
│   └── _app.tsx               # Global app configuration
├── styles/
│   └── globals.css            # Tailwind CSS setup
├── types/
│   └── index.ts               # TypeScript type definitions
├── next.config.js             # Next.js configuration
├── README.md                  # Project documentation
├── package.json               # Dependencies and scripts
└── .babelrc                   # Styled Components configuration

Getting Started
Prerequisites

Node.js (v16 or higher)
npm or Yarn

Installation

Clone the Repository:
git clone https://github.com/your-username/shopsphere.git
cd shopsphere


Install Dependencies:
npm install

or
yarn install


Run the Development Server:
npm run dev

or
yarn dev


Open the Application:

Visit http://localhost:3000/Products to view the product listing.
Navigate to http://localhost:3000/Products/[id] (e.g., /Products/1) for individual product details.
Test the 404 page with a non-existent route, e.g., http://localhost:3000/random.



Build for Production
npm run build
npm run start

Configuration

Tailwind CSS: Ensure styles/globals.css includes Tailwind directives:
@tailwind base;
@tailwind components;
@tailwind utilities;


Fonts: The project uses the Sora font (optional). Configure it in pages/_app.tsx:
import '../styles/globals.css';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={sora.className}>
      <Component {...pageProps} />
    </main>
  );
}


Styled Components (if used): Ensure .babelrc is configured:
{
  "presets": ["next/babel"],
  "plugins": ["styled-components"]
}


Image Domains: The next.config.js supports fakestoreapi.com:
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};



Troubleshooting

Stylesheet Errors:

If styles (e.g., styles_globals_79636149.css) are missing, rebuild the project:rm -rf .next
npm run build


Remove the Sora font import if unused to avoid font stylesheet errors.


Empty href Errors:

The project includes guards to prevent empty href or src attributes in ProductCard and data fetching.


Slow Page Load:

The app uses ISR (revalidate: 3600) and next/image for optimization.
Run ANALYZE=true npm run build to analyze bundle size with @next/bundle-analyzer.



Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or feedback, reach out via GitHub Issues or email at your-email@example.com.

ShopSphere - Built with 🚀 by [Sheikh Minhajul Abedin]
