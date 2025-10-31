"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {products.map((p: any) => (
        <div key={p._id} className="p-4 border rounded-xl">
          <img src={p.image} className="w-full h-40 object-cover rounded-md" />
          <h2 className="mt-2 font-semibold">{p.name}</h2>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

