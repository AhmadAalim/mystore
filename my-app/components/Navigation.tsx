"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navigation() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { t } = useLanguage();

  const naamanItems = [
    { key: "kitchenware", label: "kitchenware" },
    { key: "cookware", label: "cookware" },
    { key: "dishesPlates", label: "dishesPlates" },
    { key: "servingPlates", label: "servingPlates" },
    { key: "utensils", label: "utensils" },
    { key: "appliances", label: "appliances" },
  ];

  const vardinonItems = [
    { key: "towels", label: "towels" },
    { key: "bathRobes", label: "bathRobes" },
    { key: "bedSheets", label: "bedSheets" },
    { key: "bedCovers", label: "bedCovers" },
    { key: "pillows", label: "pillows" },
    { key: "bathroomAccessories", label: "bathroomAccessories" },
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
              {t("naaman")}
            </Link>
            
            {activeCategory === "naaman" && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white border shadow-lg rounded-lg py-4 px-6 min-w-[200px] z-50">
                {naamanItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`/naaman/${item.key.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    {t(item.label)}
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
              {t("vardinon")}
            </Link>
            
            {activeCategory === "vardinon" && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white border shadow-lg rounded-lg py-4 px-6 min-w-[200px] z-50">
                {vardinonItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`/vardinon/${item.key.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    {t(item.label)}
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
            {t("login")}
          </Link>
        </div>
      </div>
    </nav>
  );
}

