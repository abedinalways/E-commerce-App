
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Layout from '@/Components/Layout/Layout';

import CheckoutForm from '@/Components/Forms/CheckoutForm';
import CartItem from '@/Components/Cart/CartItem';
import CartSummary from '@/Components/Cart/CartSummary';


const Checkout = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <Layout
      title="Checkout - Complete Your Order"
      description="Secure checkout process with multiple payment options and fast shipping."
    >
      <div className="bg-gray-800 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold ">Checkout</h1>
            <p className="text-gray-600 mt-2">Complete your order securely</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Order Items</h2>
                <div className="space-y-4">
                  {items.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">
                  Shipping Information
                </h2>
                <CheckoutForm/>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <CartSummary/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
