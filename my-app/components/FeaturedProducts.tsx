"use client";

import { useRef } from "react";
import { useCart } from "@/context/CartContext";

const featuredProducts = [
  { id: 1, name: "Premium Cookware Set", price: 89.99, originalPrice: 149.99, discount: 40, image: "🍳" },
  { id: 2, name: "Egyptian Cotton Bed Sheets", price: 64.99, originalPrice: 99.99, discount: 35, image: "🛏️" },
  { id: 3, name: "Stainless Steel Utensils", price: 39.99, originalPrice: 59.99, discount: 33, image: "🍴" },
  { id: 4, name: "Luxury Bath Towel Set", price: 54.99, originalPrice: 79.99, discount: 31, image: "🧺" },
  { id: 5, name: "Memory Foam Pillow", price: 44.99, originalPrice: 69.99, discount: 36, image: "🪶" },
  { id: 6, name: "Ceramic Dinner Set", price: 79.99, originalPrice: 129.99, discount: 39, image: "🍽️" },
  { id: 7, name: "Silk Comforter", price: 124.99, originalPrice: 199.99, discount: 38, image: "🛌" },
  { id: 8, name: "Professional Knife Set", price: 94.99, originalPrice: 149.99, discount: 37, image: "🔪" },
  { id: 9, name: "Bamboo Bedding Set", price: 69.99, originalPrice: 109.99, discount: 36, image: "🎋" },
  { id: 10, name: "Designer Gift Set", price: 49.99, originalPrice: 89.99, discount: 44, image: "🎁" },
];

export default function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Hot Sale</h2>
        <p className="text-gray-600 mt-2">Featured products on sale</p>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-64 bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-red-500 overflow-hidden"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 h-48 flex items-center justify-center">
                  <div className="text-8xl">{product.image}</div>
                </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{product.discount}%
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-red-600">
                    ₪{product.price}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    ₪{product.originalPrice}
                  </span>
                </div>
                <button 
                  onClick={() => addToCart({ _id: product.id.toString(), name: product.name, price: product.price })}
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={scrollLeft}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

