"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

interface Product {
  id: number;
  nameKey: string;
  price: number;
  image: string;
  categoryKey: string;
  color: string;
  size: string;
}

const allProducts: Product[] = [
  { id: 1, nameKey: "stainlessSteelCookwareSet", price: 149.99, image: "🥘", categoryKey: "cookware", color: "Silver", size: "Large" },
  { id: 2, nameKey: "nonStickFryingPanSet", price: 104.99, image: "🍳", categoryKey: "cookware", color: "Black", size: "Medium" },
  { id: 3, nameKey: "ceramicCookwareCollection", price: 129.99, image: "🔥", categoryKey: "cookware", color: "White", size: "Large" },
  { id: 4, nameKey: "professionalKnifeBlockSet", price: 129.99, image: "🔪", categoryKey: "kitchenware", color: "Black", size: "Medium" },
  { id: 5, nameKey: "cuttingBoardSet", price: 49.99, image: "🪵", categoryKey: "kitchenware", color: "Brown", size: "Large" },
  { id: 6, nameKey: "kitchenUtensilsSet", price: 39.99, image: "🍴", categoryKey: "kitchenware", color: "Silver", size: "Medium" },
  { id: 7, nameKey: "ceramicDinnerSet", price: 119.99, image: "🍽️", categoryKey: "dishesPlates", color: "White", size: "Large" },
  { id: 8, nameKey: "melaminePlatesSet", price: 89.99, image: "🍲", categoryKey: "dishesPlates", color: "Multicolor", size: "Medium" },
  { id: 9, nameKey: "porcelainDinnerware", price: 139.99, image: "🍶", categoryKey: "dishesPlates", color: "White", size: "Large" },
  { id: 10, nameKey: "bambooServingTraySet", price: 59.99, image: "🪴", categoryKey: "servingPlates", color: "Brown", size: "Medium" },
  { id: 11, nameKey: "glassServingBowlSet", price: 79.99, image: "🥣", categoryKey: "servingPlates", color: "Clear", size: "Large" },
  { id: 12, nameKey: "stainlessSteelPlatter", price: 94.99, image: "🍱", categoryKey: "servingPlates", color: "Silver", size: "Large" },
  { id: 13, nameKey: "stainlessSteelUtensilSet", price: 54.99, image: "🍴", categoryKey: "utensils", color: "Silver", size: "Standard" },
  { id: 14, nameKey: "woodenCutlerySet", price: 34.99, image: "🪵", categoryKey: "utensils", color: "Brown", size: "Standard" },
  { id: 15, nameKey: "titaniumCookwareUtensils", price: 69.99, image: "🥄", categoryKey: "utensils", color: "Silver", size: "Standard" },
  { id: 16, nameKey: "electricKettle", price: 79.99, image: "♨️", categoryKey: "appliances", color: "White", size: "Large" },
  { id: 17, nameKey: "standMixer", price: 299.99, image: "🥣", categoryKey: "appliances", color: "Red", size: "Extra Large" },
  { id: 18, nameKey: "foodProcessor", price: 199.99, image: "🔪", categoryKey: "appliances", color: "Black", size: "Large" },
];

const categoryMap: { [key: string]: string } = {
  "Cookware": "cookware",
  "Kitchenware": "kitchenware",
  "Dishes & Plates": "dishesPlates",
  "Serving Plates": "servingPlates",
  "Utensils": "utensils",
  "Appliances": "appliances",
};

export default function NaamanPage() {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", ...Array.from(new Set(allProducts.map(p => p.categoryKey)))];
  const colors = Array.from(new Set(allProducts.map(p => p.color)));
  const sizes = Array.from(new Set(allProducts.map(p => p.size)));

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === "All" || product.categoryKey === selectedCategory;
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(product.size);
    const priceMatch = product.price >= minPrice && product.price <= maxPrice;
    
    return categoryMatch && colorMatch && sizeMatch && priceMatch;
  });

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedColors([]);
    setSelectedSizes([]);
    setMinPrice(0);
    setMaxPrice(500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">{t("naamanCollection")}</h1>
        <p className="text-xl text-gray-600">{t("premiumKitchenware")}</p>
      </div>

      {/* Filter Banner */}
      <div className="bg-gray-50 border rounded-lg mb-8 overflow-hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-between hover:bg-gray-100 p-4 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform ${showFilters ? 'rotate-45' : ''}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-lg font-semibold">{t("filters")}</span>
          </div>
          <svg className={`w-5 h-5 text-gray-500 transition-transform ${showFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Expandable Filter Panel */}
        <div className={`transition-all duration-300 ease-in-out ${showFilters ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="p-6 border-t bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold mb-3">{t("category")}</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2 text-red-600 focus:ring-red-500"
                      />
                      <span>{cat === "All" ? t("all") : t(cat)}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold mb-3">{t("priceRange")}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                      className="w-20 px-2 py-1 border rounded text-sm"
                      placeholder={t("min")}
                    />
                    <span>-</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-20 px-2 py-1 border rounded text-sm"
                      placeholder={t("max")}
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="font-semibold mb-3">{t("colors")}</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {colors.map((color) => (
                    <label key={color} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => toggleColor(color)}
                        className="mr-2 text-red-600 focus:ring-red-500"
                      />
                      <span>{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="font-semibold mb-3">{t("size")}</h3>
                <div className="space-y-2">
                  {sizes.map((size) => (
                    <label key={size} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSizes.includes(size)}
                        onChange={() => toggleSize(size)}
                        className="mr-2 text-red-600 focus:ring-red-500"
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={resetFilters}
              className="mt-6 w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              {t("resetFilters")}
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <div className="mb-6">
          <p className="text-gray-600">
            {t("showing")} {filteredProducts.length} {filteredProducts.length !== 1 ? t("products") : t("product")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-red-500 overflow-hidden group"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 h-64 flex items-center justify-center">
                  <div className="text-9xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-1">{t(product.categoryKey)}</p>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg line-clamp-2 min-h-[3rem]">
                  {t(product.nameKey)}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{product.color}</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{product.size}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">
                    ₪{product.price}
                  </span>
                  <button 
                    onClick={() => addToCart({ _id: product.id.toString(), name: t(product.nameKey), price: product.price })}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    {t("addToCart")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">{t("noProductsFound")}</p>
            <button
              onClick={resetFilters}
              className="mt-4 text-red-600 hover:text-red-800 font-medium"
            >
              {t("clearAllFilters")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
