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
  gender?: string;
}

const allProducts: Product[] = [
  { id: 1, name: "Egyptian Cotton Bath Towel Set", price: 79.99, image: "🧺", category: "Towels", color: "White", size: "Large" },
  { id: 2, name: "Bamboo Towel Collection", price: 69.99, image: "🎋", category: "Towels", color: "Beige", size: "Large" },
  { id: 3, name: "Microfiber Quick Dry Towels", price: 54.99, image: "🌊", category: "Towels", color: "Blue", size: "Medium" },
  { id: 4, name: "Luxury Bathrobe", price: 99.99, image: "🛁", category: "Bath Robes", color: "White", size: "Large", gender: "Unisex" },
  { id: 5, name: "Terry Cloth Bathrobe", price: 89.99, image: "👘", category: "Bath Robes", color: "Blue", size: "Large", gender: "Men" },
  { id: 6, name: "Hooded Bathrobe", price: 94.99, image: "🧥", category: "Bath Robes", color: "Pink", size: "Large", gender: "Women" },
  { id: 7, name: "Egyptian Cotton Bed Sheets", price: 129.99, image: "🛏️", category: "Bed Sheets", color: "White", size: "King" },
  { id: 8, name: "Silk Bedding Set", price: 199.99, image: "✨", category: "Bed Sheets", color: "Ivory", size: "Queen" },
  { id: 9, name: "Bamboo Bed Sheets", price: 149.99, image: "🪴", category: "Bed Sheets", color: "Grey", size: "King" },
  { id: 10, name: "Duvet Cover Set", price: 139.99, image: "🛌", category: "Bed Covers", color: "White", size: "Queen" },
  { id: 11, name: "Comforter Cover", price: 119.99, image: "🌙", category: "Bed Covers", color: "Blue", size: "King" },
  { id: 12, name: "Quilt Cover Collection", price: 109.99, image: "🌟", category: "Bed Covers", color: "Pink", size: "Queen" },
  { id: 13, name: "Memory Foam Pillow", price: 89.99, image: "🪶", category: "Pillows", color: "White", size: "Standard" },
  { id: 14, name: "Down Feather Pillow", price: 79.99, image: "💤", category: "Pillows", color: "White", size: "King" },
  { id: 15, name: "Bamboo Pillow", price: 69.99, image: "🎋", category: "Pillows", color: "Green", size: "Standard" },
  { id: 16, name: "Shower Curtain Set", price: 59.99, image: "🚿", category: "Bathroom Accessories", color: "Clear", size: "Standard" },
  { id: 17, name: "Bath Mat Set", price: 49.99, image: "🦶", category: "Bathroom Accessories", color: "Grey", size: "Standard" },
  { id: 18, name: "Toilet Seat Cover Set", price: 39.99, image: "🚽", category: "Bathroom Accessories", color: "White", size: "Standard" },
];

const categories = ["All", ...Array.from(new Set(allProducts.map(p => p.category)))];
const colors = Array.from(new Set(allProducts.map(p => p.color)));
const sizes = Array.from(new Set(allProducts.map(p => p.size)));

export default function VardinonPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(250);
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
    setMaxPrice(250);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Vardinon Collection</h1>
        <p className="text-xl text-gray-600">Luxury Bedding & Bath Essentials</p>
      </div>

      {/* Filter Banner */}
      <div className="bg-gray-50 border rounded-lg mb-8 overflow-hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-between hover:bg-gray-100 p-4 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center transition-transform ${showFilters ? 'rotate-45' : ''}`}>
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
                        className="mr-2 text-blue-600 focus:ring-blue-500"
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
                    max="250"
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
                        className="mr-2 text-blue-600 focus:ring-blue-500"
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
                        className="mr-2 text-blue-600 focus:ring-blue-500"
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
              className="bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500 overflow-hidden group"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 h-64 flex items-center justify-center">
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
                  {product.gender && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{product.gender}</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ₪{product.price}
                  </span>
                  <button 
                    onClick={() => addToCart({ _id: product.id.toString(), name: product.name, price: product.price })}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
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
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
