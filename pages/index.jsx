'use client';
import productsData from '../data/products';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('products');
    setProducts(saved ? JSON.parse(saved) : productsData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">EXL Products</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </div>
  );
}

