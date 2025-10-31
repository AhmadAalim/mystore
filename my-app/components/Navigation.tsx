"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const naamanItems = [
    "Kitchenware",
    "Cookware",
    "Dishes & Plates",
    "Serving Plates",
    "Utensils",
    "Appliances"
  ];

  const vardinonItems = [
    "Towels",
    "Bath Robes",
    "Bed Sheets",
    "Bed Covers",
    "Pillows",
    "Bathroom Accessories"
  ];

  return (
    <nav className="w-full bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-center items-center space-x-8">
          {/* Naaman Dropdown */}
          <div 
            className="relative py-4"
            onMouseEnter={() => setActiveCategory("naaman")}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <Link 
              href="/naaman" 
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors"
            >
              Naaman
            </Link>
            
            {activeCategory === "naaman" && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white border shadow-lg rounded-lg py-4 px-6 min-w-[200px] z-50">
                {naamanItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`/naaman/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Vardinon Dropdown */}
          <div 
            className="relative py-4"
            onMouseEnter={() => setActiveCategory("vardinon")}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <Link 
              href="/vardinon" 
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors"
            >
              Vardinon
            </Link>
            
            {activeCategory === "vardinon" && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white border shadow-lg rounded-lg py-4 px-6 min-w-[200px] z-50">
                {vardinonItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`/vardinon/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Login Link */}
          <Link 
            href="/login" 
            className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors py-4"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

