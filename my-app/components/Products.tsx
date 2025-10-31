"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {products.map((p: any) => (
        <div key={p._id} className="p-4 border rounded-xl">
          {p.image && <img src={p.image} className="w-full h-40 object-cover rounded-md" />}
          <h2 className="mt-2 font-semibold">{p.name}</h2>
          <p className="font-bold text-lg">₪{p.price}</p>
          <button
            onClick={() => addToCart(p)}
            className="mt-3 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

