import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '../../store';
import { addOrder } from '../../store/orderSlice';
import { clearCart } from '../../store/cartSlice';
import { CheckoutFormData, Order } from '../../types';
import Link from 'next/link';

const CheckoutForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { items, totalAmount, totalItems } = useSelector(
    (state: RootState) => state.cart
  );

  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    shippingAddress: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState<Partial<CheckoutFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<CheckoutFormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.shippingAddress.trim()) {
      newErrors.shippingAddress = 'Shipping address is required';
    } else if (formData.shippingAddress.trim().length < 10) {
      newErrors.shippingAddress = 'Please provide a complete address';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please provide a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error as user types
    setErrors(prev => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm() || items.length === 0) return;

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // simulate delay

      const order: Order = {
        id: `ORDER-${Date.now()}`,
        customerName: formData.fullName.trim(),
        shippingAddress: formData.shippingAddress.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        items: [...items],
        totalAmount: parseFloat((totalAmount * 1.1).toFixed(2)),
        totalItems,
        orderDate: new Date().toISOString(),
      };

      dispatch(addOrder(order));
      dispatch(clearCart());

      router.push(`/orders?success=${order.id}`);
    } catch (error) {
      console.error('Order submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="w-16 h-16 text-gray-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0L5 3H2M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Your cart is empty
        </h3>
        <p className="text-gray-600 mb-4">
          Add some products to your cart before checkout
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div >
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-800 mb-1"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded-md text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.fullName ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Shipping Address */}
      <div>
        <label
          htmlFor="shippingAddress"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Shipping Address *
        </label>
        <textarea
          id="shippingAddress"
          name="shippingAddress"
          value={formData.shippingAddress}
          onChange={handleInputChange}
          rows={3}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.shippingAddress ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your complete shipping address"
        />
        {errors.shippingAddress && (
          <p className="text-red-500 text-sm mt-1">{errors.shippingAddress}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone Number *
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your phone number"
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </>
        ) : (
          `Place Order - $${(totalAmount * 1.1).toFixed(2)}`
        )}
      </button>
    </form>
  );
};

export default CheckoutForm;
