"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const categories = [
  {
    name: "Cookware",
    icon: "🍳",
    items: [
      { id: 1, name: "Stainless Steel Cookware Set", price: 149.99, image: "🥘" },
      { id: 2, name: "Non-Stick Frying Pan Set", price: 104.99, image: "🍳" },
      { id: 3, name: "Ceramic Cookware Collection", price: 129.99, image: "🔥" },
    ]
  },
  {
    name: "Kitchenware",
    icon: "🥘",
    items: [
      { id: 4, name: "Professional Knife Block Set", price: 129.99, image: "🔪" },
      { id: 5, name: "Cutting Board Set", price: 49.99, image: "🪵" },
      { id: 6, name: "Kitchen Utensils Set", price: 39.99, image: "🍴" },
    ]
  },
  {
    name: "Dishes & Plates",
    icon: "🍽️",
    items: [
      { id: 7, name: "Ceramic Dinner Set", price: 119.99, image: "🍽️" },
      { id: 8, name: "Melamine Plates Set", price: 89.99, image: "🍲" },
      { id: 9, name: "Porcelain Dinnerware", price: 139.99, image: "🍶" },
    ]
  },
  {
    name: "Serving Plates",
    icon: "🍱",
    items: [
      { id: 10, name: "Bamboo Serving Tray Set", price: 59.99, image: "🪴" },
      { id: 11, name: "Glass Serving Bowl Set", price: 79.99, image: "🥣" },
      { id: 12, name: "Stainless Steel Platter", price: 94.99, image: "🍱" },
    ]
  },
  {
    name: "Utensils",
    icon: "🍴",
    items: [
      { id: 13, name: "Stainless Steel Utensil Set", price: 54.99, image: "🍴" },
      { id: 14, name: "Wooden Cutlery Set", price: 34.99, image: "🪵" },
      { id: 15, name: "Titanium Cookware Utensils", price: 69.99, image: "🥄" },
    ]
  },
  {
    name: "Appliances",
    icon: "⚡",
    items: [
      { id: 16, name: "Electric Kettle", price: 79.99, image: "♨️" },
      { id: 17, name: "Stand Mixer", price: 299.99, image: "🥣" },
      { id: 18, name: "Food Processor", price: 199.99, image: "🔪" },
    ]
  }
];

export default function NaamanPage() {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Naaman Collection</h1>
        <p className="text-xl text-gray-600">Premium Kitchenware & Cookware</p>
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
                  className="bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-red-500 overflow-hidden group"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 h-64 flex items-center justify-center">
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
                      <span className="text-2xl font-bold text-red-600">
                        ${item.price}
                      </span>
                      <button 
                        onClick={() => addToCart({ _id: item.id.toString(), name: item.name, price: item.price })}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
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
                href={`/naaman/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium text-lg"
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

