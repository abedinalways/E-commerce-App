// Product related types
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Cart related types
export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

// Order related types
export interface Order {
  id: string;
  customerName: string;
  shippingAddress: string;
  phoneNumber: string;
  items: CartItem[];
  totalAmount: number;
  totalItems: number;
  orderDate: string;
}

// Form related types
export interface CheckoutFormData {
  fullName: string;
  shippingAddress: string;
  phoneNumber: string;
}
