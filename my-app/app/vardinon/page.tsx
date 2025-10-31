"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const categories = [
  {
    name: "Towels",
    icon: "🧺",
    items: [
      { id: 1, name: "Egyptian Cotton Bath Towel Set", price: 79.99, image: "🧺" },
      { id: 2, name: "Bamboo Towel Collection", price: 69.99, image: "🎋" },
      { id: 3, name: "Microfiber Quick Dry Towels", price: 54.99, image: "🌊" },
    ]
  },
  {
    name: "Bath Robes",
    icon: "🛁",
    items: [
      { id: 4, name: "Luxury Bathrobe", price: 99.99, image: "🛁" },
      { id: 5, name: "Terry Cloth Bathrobe", price: 89.99, image: "👘" },
      { id: 6, name: "Hooded Bathrobe", price: 94.99, image: "🧥" },
    ]
  },
  {
    name: "Bed Sheets",
    icon: "🛏️",
    items: [
      { id: 7, name: "Egyptian Cotton Bed Sheets", price: 129.99, image: "🛏️" },
      { id: 8, name: "Silk Bedding Set", price: 199.99, image: "✨" },
      { id: 9, name: "Bamboo Bed Sheets", price: 149.99, image: "🪴" },
    ]
  },
  {
    name: "Bed Covers",
    icon: "🛌",
    items: [
      { id: 10, name: "Duvet Cover Set", price: 139.99, image: "🛌" },
      { id: 11, name: "Comforter Cover", price: 119.99, image: "🌙" },
      { id: 12, name: "Quilt Cover Collection", price: 109.99, image: "🌟" },
    ]
  },
  {
    name: "Pillows",
    icon: "🪶",
    items: [
      { id: 13, name: "Memory Foam Pillow", price: 89.99, image: "🪶" },
      { id: 14, name: "Down Feather Pillow", price: 79.99, image: "💤" },
      { id: 15, name: "Bamboo Pillow", price: 69.99, image: "🎋" },
    ]
  },
  {
    name: "Bathroom Accessories",
    icon: "🧴",
    items: [
      { id: 16, name: "Shower Curtain Set", price: 59.99, image: "🚿" },
      { id: 17, name: "Bath Mat Set", price: 49.99, image: "🦶" },
      { id: 18, name: "Toilet Seat Cover Set", price: 39.99, image: "🚽" },
    ]
  }
];

export default function VardinonPage() {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Vardinon Collection</h1>
        <p className="text-xl text-gray-600">Luxury Bedding & Bath Essentials</p>
      </div>

      <div className="space-y-16">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="border-b border-gray-200 pb-16 last:border-b-0">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-6xl">{category.icon}</div>
              <h2 className="text-3xl font-bold">{category.name}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500 overflow-hidden group"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 h-64 flex items-center justify-center">
                      <div className="text-9xl group-hover:scale-110 transition-transform duration-300">
                        {item.image}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-3 text-lg line-clamp-2 min-h-[3rem]">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        ${item.price}
                      </span>
                      <button 
                        onClick={() => addToCart({ _id: item.id.toString(), name: item.name, price: item.price })}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href={`/vardinon/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                View All {category.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

