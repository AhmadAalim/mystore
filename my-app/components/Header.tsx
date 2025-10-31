"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { cartItems, removeFromCart } = useCart();
  const { language, setLanguage, t } = useLanguage();

  // Auto-close cart after 5 seconds
  useEffect(() => {
    if (showCart) {
      const timer = setTimeout(() => {
        setShowCart(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showCart]);

  // Close cart on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (showCart) {
        setShowCart(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showCart]);

  return (
    <header className="w-full flex justify-between items-center px-8 py-6 bg-white border-b">
      <div className="flex-1 flex justify-start items-center gap-2">
        <button 
          onClick={() => router.back()} 
          className="p-2 hover:bg-gray-100 rounded-full"
          aria-label="Go back"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="black" 
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </button>
        <Link href="/" className="p-2 hover:bg-gray-100 rounded-full">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="black" 
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </Link>
      </div>
      
      <div className="flex-1 flex justify-center items-center gap-8">
        <Link href="/vardinon" className="hover:opacity-70 transition-opacity">
          <Image 
            src="/vardinon.jpeg" 
            alt="Vardinon Brand" 
            width={150} 
            height={150}
            className="object-contain"
          />
        </Link>
        <Link href="/naaman" className="hover:opacity-70 transition-opacity">
          <Image 
            src="/naaman-icon.png" 
            alt="Naaman Brand" 
            width={150} 
            height={150}
            className="object-contain"
          />
        </Link>
      </div>

      <div className="flex-1 flex justify-end items-center gap-4 relative">
        {/* Language Switcher */}
        <div className="relative">
          <button 
            onClick={() => {
              setShowLanguageMenu(!showLanguageMenu);
              setShowSearch(false);
              setShowCart(false);
            }}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="black" 
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </button>

          {showLanguageMenu && (
            <div className="absolute top-12 right-0 bg-white border shadow-lg rounded-lg z-50 min-w-[120px]">
              <button
                onClick={() => {
                  setLanguage("en");
                  setShowLanguageMenu(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${language === "en" ? "bg-blue-50 text-blue-600 font-semibold" : ""}`}
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => {
                  setLanguage("ar");
                  setShowLanguageMenu(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${language === "ar" ? "bg-blue-50 text-blue-600 font-semibold" : ""}`}
              >
                🇸🇦 العربية
              </button>
              <button
                onClick={() => {
                  setLanguage("he");
                  setShowLanguageMenu(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors rounded-b-lg ${language === "he" ? "bg-blue-50 text-blue-600 font-semibold" : ""}`}
              >
                🇮🇱 עברית
              </button>
            </div>
          )}
        </div>

        <button 
          onClick={() => {
            setShowSearch(!showSearch);
            setShowCart(false);
            setShowLanguageMenu(false);
          }}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="black" 
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>

        {showSearch && (
          <div className="absolute top-12 right-0 bg-white border shadow-lg rounded-lg w-96 p-4 z-50">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <p className="text-sm text-gray-500 mt-2">Search functionality coming soon...</p>
          </div>
        )}

        <button 
          onClick={() => {
            setShowCart(!showCart);
            setShowSearch(false);
            setShowLanguageMenu(false);
          }}
          className="relative p-2 hover:bg-gray-100 rounded-full"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="black" 
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>

        {showCart && (
          <div className="absolute top-14 right-0 bg-white border shadow-lg rounded-lg w-80 max-h-96 overflow-y-auto z-50">
            <div className="p-4 border-b">
              <h2 className="text-lg font-bold">{t("shoppingCart")}</h2>
            </div>
            {cartItems.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                {t("emptyCart")}
              </div>
            ) : (
              <div className="p-4">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">₪{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      {t("remove")}
                    </button>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between font-bold">
                    <span>{t("total")}:</span>
                    <span>₪{cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

