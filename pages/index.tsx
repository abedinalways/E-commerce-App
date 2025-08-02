import { GetStaticProps } from 'next';
import { Product } from '../types';
import { defaultMeta } from '../utils/seo';
import Layout from '@/Components/Layout/Layout';
import ProductGrid from '@/Components/Product/ProductGrid';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
interface HomeProps {
  products: Product[];
}

const Home = ({ products }: HomeProps) => {
  const [email, setEmail] = useState('');
  const handleSubscribe = () => {
    if (!email) {
      toast.error('Please enter your email!');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address!');
      return;
    }

   
    toast.success('Thank you for subscribing!');
    setEmail('');
  };
  return (
    <Layout
      title={defaultMeta.title}
      description={defaultMeta.description}
      keywords={defaultMeta.keywords}
    >
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Premium Products
              </span>
              <span className="block text-yellow-500">Amazing Prices</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Discover our curated collection of high-quality products with fast
              shipping and excellent customer service.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link href="#product" passHref scroll={false}>
                <button className="bg-yellow-400 text-gray-900 px-12 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-md">
                  Shop Now
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Why Choose ShopSphere?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best shopping experience with quality products and
              top-notch service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Carefully curated and tested products, handpicked for you.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Lightning-fast shipping across the country to your doorstep.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                24/7 support and hassle-free return policies for peace of mind.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-6xl  font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Products
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-white">
            Browse through our extensive collection of products across various
            categories
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
      {/* Newsletter Section - Add more content */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest deals and updates
            delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products: Product[] = await res.json();

    return {
      props: {
        products,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
};

export default Home;
