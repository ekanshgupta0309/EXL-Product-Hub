'use client';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 mt-1">{product.description}</p>
      <span
        className={`inline-block mt-2 text-sm px-2 py-1 rounded ${
          product.status === 'Available'
            ? 'bg-green-100 text-green-700'
            : 'bg-yellow-100 text-yellow-700'
        }`}
      >
        {product.status}
      </span>
    </div>
  );
}
