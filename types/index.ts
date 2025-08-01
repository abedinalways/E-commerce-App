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

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

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

export interface CheckoutFormData {
  fullName: string;
  shippingAddress: string;
  phoneNumber: string;
}
