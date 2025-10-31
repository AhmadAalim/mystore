"use client";

import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  async function addProduct() {
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    });
    alert("Product added!");
  }

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Add New Product</h1>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 mr-2" />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="border p-2 mr-2" />
      <button onClick={addProduct} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </div>
  );
}

