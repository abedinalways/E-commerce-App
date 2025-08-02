import Footer from '@/Components/Layout/Footer';
import Navbar from '@/Components/Layout/Navbar';
import Link from 'next/link';



const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200 font-medium"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
};



export default NotFoundPage;
