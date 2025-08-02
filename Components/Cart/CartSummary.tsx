import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const CartSummary = () => {
  const { totalItems, totalAmount } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border text-purple-600">
      <h3 className="text-lg font-semibold mb-4 text-blue-600">
        Order Summary
      </h3>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Items ({totalItems})</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-600">FREE</span>
        </div>
        <div className="flex justify-between text-purple-600">
          <span>Tax</span>
          <span>${(totalAmount * 0.1).toFixed(2)}</span>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${(totalAmount * 1.1).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
