"use client";

import Link from "next/link";

const categories = [
  { name: "Men", link: "/men", icon: "👔" },
  { name: "Women", link: "/women", icon: "👗" },
  { name: "Kids", link: "/kids", icon: "🧸" },
  { name: "Bed Sheets", link: "/bed-sheets", icon: "🛏️" },
  { name: "Covers", link: "/covers", icon: "🛌" },
  { name: "Pillows", link: "/pillows", icon: "🪶" },
  { name: "Cookware", link: "/cookware", icon: "🍳" },
  { name: "Utensils", link: "/utensils", icon: "🍴" },
  { name: "Gifts", link: "/gifts", icon: "🎁" },
  { name: "Kitchenware", link: "/kitchenware", icon: "🥘" },
  { name: "Towels", link: "/towels", icon: "🧺" },
  { name: "Bath Robes", link: "/bath-robes", icon: "🛁" },
];

export default function CategoryGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
            <h3 className="text-center font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

