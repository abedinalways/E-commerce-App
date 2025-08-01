import { Product } from '../types';

export const generateProductMeta = (product: Product) => ({
  title: `${product.title} - Premium E-commerce Store`,
  description: `${product.description.substring(0, 160)}...`,
  keywords: `${product.category}, ${product.title}, online shopping, e-commerce`,
  ogTitle: product.title,
  ogDescription: product.description.substring(0, 160),
  ogImage: product.image,
});

export const defaultMeta = {
  title: 'Premium E-commerce Store - Quality Products Online',
  description:
    'Discover amazing products at unbeatable prices. Fast shipping, secure checkout, and excellent customer service.',
  keywords:
    'e-commerce, online shopping, products, deals, fashion, electronics',
};
