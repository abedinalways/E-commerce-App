import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { CartItem as CartItemType } from '../../types';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border">
      <div className="w-16 h-16 relative">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded"
          sizes="64px"
        />
      </div>

      <div className="flex-1">
        <h4 className="font-medium text-gray-900 line-clamp-2">{item.title}</h4>
        <p className="text-blue-600 font-semibold">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full"
        >
          -
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full"
        >
          +
        </button>
      </div>

      <div className="text-right">
        <p className="font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
