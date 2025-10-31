"use client";

import { useRef } from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

const bestSellers = [
  { id: 1, nameKey: "professionalKnifeBlockSet", price: 129.99, image: "🔪", badge: "bestseller" },
  { id: 2, nameKey: "egyptianCottonDuvetCover", price: 89.99, image: "🛏️", badge: "bestseller" },
  { id: 3, nameKey: "stainlessSteelCookwareSet", price: 149.99, image: "🥘", badge: "bestseller" },
  { id: 4, nameKey: "luxuryBathrobe", price: 79.99, image: "🛁", badge: "bestseller" },
  { id: 5, nameKey: "memoryFoamMattressPad", price: 199.99, image: "🛌", badge: "bestseller" },
  { id: 6, nameKey: "ceramicDinnerwareSet", price: 119.99, image: "🍽️", badge: "bestseller" },
  { id: 7, nameKey: "organicCottonTowelSet", price: 69.99, image: "🧺", badge: "bestseller" },
  { id: 8, nameKey: "nonStickFryingPanSet", price: 104.99, image: "🍳", badge: "bestseller" },
];

export default function BestSellers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  const { t } = useLanguage();

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
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{t("bestSellers")}</h2>
        <p className="text-gray-600 mt-2">{t("mostPopular")}</p>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-64 bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500 overflow-hidden"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 h-48 flex items-center justify-center">
                  <div className="text-8xl">{product.image}</div>
                </div>
                <div className="absolute top-2 left-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  ⭐ {t(product.badge)}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
                  {t(product.nameKey)}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ₪{product.price}
                  </span>
                </div>
                <button 
                  onClick={() => addToCart({ _id: product.id.toString(), name: t(product.nameKey), price: product.price })}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-md hover:shadow-lg"
                >
                  {t("addToCart")}
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
