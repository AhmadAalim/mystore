"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  color: string;
  size: string;
}

const allProducts: Product[] = [
  { id: 1, name: "Stainless Steel Cookware Set", price: 149.99, image: "🥘", category: "Cookware", color: "Silver", size: "Large" },
  { id: 2, name: "Non-Stick Frying Pan Set", price: 104.99, image: "🍳", category: "Cookware", color: "Black", size: "Medium" },
  { id: 3, name: "Ceramic Cookware Collection", price: 129.99, image: "🔥", category: "Cookware", color: "White", size: "Large" },
  { id: 4, name: "Professional Knife Block Set", price: 129.99, image: "🔪", category: "Kitchenware", color: "Black", size: "Medium" },
  { id: 5, name: "Cutting Board Set", price: 49.99, image: "🪵", category: "Kitchenware", color: "Brown", size: "Large" },
  { id: 6, name: "Kitchen Utensils Set", price: 39.99, image: "🍴", category: "Kitchenware", color: "Silver", size: "Medium" },
  { id: 7, name: "Ceramic Dinner Set", price: 119.99, image: "🍽️", category: "Dishes & Plates", color: "White", size: "Large" },
  { id: 8, name: "Melamine Plates Set", price: 89.99, image: "🍲", category: "Dishes & Plates", color: "Multicolor", size: "Medium" },
  { id: 9, name: "Porcelain Dinnerware", price: 139.99, image: "🍶", category: "Dishes & Plates", color: "White", size: "Large" },
  { id: 10, name: "Bamboo Serving Tray Set", price: 59.99, image: "🪴", category: "Serving Plates", color: "Brown", size: "Medium" },
  { id: 11, name: "Glass Serving Bowl Set", price: 79.99, image: "🥣", category: "Serving Plates", color: "Clear", size: "Large" },
  { id: 12, name: "Stainless Steel Platter", price: 94.99, image: "🍱", category: "Serving Plates", color: "Silver", size: "Large" },
  { id: 13, name: "Stainless Steel Utensil Set", price: 54.99, image: "🍴", category: "Utensils", color: "Silver", size: "Standard" },
  { id: 14, name: "Wooden Cutlery Set", price: 34.99, image: "🪵", category: "Utensils", color: "Brown", size: "Standard" },
  { id: 15, name: "Titanium Cookware Utensils", price: 69.99, image: "🥄", category: "Utensils", color: "Silver", size: "Standard" },
  { id: 16, name: "Electric Kettle", price: 79.99, image: "♨️", category: "Appliances", color: "White", size: "Large" },
  { id: 17, name: "Stand Mixer", price: 299.99, image: "🥣", category: "Appliances", color: "Red", size: "Extra Large" },
  { id: 18, name: "Food Processor", price: 199.99, image: "🔪", category: "Appliances", color: "Black", size: "Large" },
];

const categories = ["All", ...Array.from(new Set(allProducts.map(p => p.category)))];
const colors = Array.from(new Set(allProducts.map(p => p.color)));
const sizes = Array.from(new Set(allProducts.map(p => p.size)));

export default function NaamanPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [showFilters, setShowFilters] = useState(false);

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
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
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
        <h1 className="text-5xl font-bold mb-4">Naaman Collection</h1>
        <p className="text-xl text-gray-600">Premium Kitchenware & Cookware</p>
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
            <span className="text-lg font-semibold">Filters</span>
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
                <h3 className="font-semibold mb-3">Category</h3>
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
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                      className="w-20 px-2 py-1 border rounded text-sm"
                      placeholder="Min"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-20 px-2 py-1 border rounded text-sm"
                      placeholder="Max"
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
                <h3 className="font-semibold mb-3">Colors</h3>
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
                <h3 className="font-semibold mb-3">Size</h3>
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
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
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
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg line-clamp-2 min-h-[3rem]">
                  {product.name}
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
                    onClick={() => addToCart({ _id: product.id.toString(), name: product.name, price: product.price })}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found matching your filters.</p>
            <button
              onClick={resetFilters}
              className="mt-4 text-red-600 hover:text-red-800 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
