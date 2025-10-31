"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "ar" | "he";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: "Home",
    naaman: "Naaman",
    vardinon: "Vardinon",
    login: "Login",
    register: "Register",
    cart: "Cart",
    search: "Search",
    
    // Common
    addToCart: "Add to Cart",
    remove: "Remove",
    total: "Total",
    filters: "Filters",
    reset: "Reset",
    category: "Category",
    price: "Price",
    colors: "Colors",
    size: "Size",
    all: "All",
    
    // Cart
    emptyCart: "Your cart is empty",
    itemAdded: "added to cart!",
    
    // Product sections
    hotSale: "Hot Sale",
    featuredProducts: "Featured products on sale",
    bestSellers: "Best Sellers",
    mostPopular: "Our most popular items",
    
    // Brands
    naamanCollection: "Naaman Collection",
    vardinonCollection: "Vardinon Collection",
    premiumKitchenware: "Premium Kitchenware & Cookware",
    luxuryBedding: "Luxury Bedding & Bath Essentials",
    
    // Footer
    allRightsReserved: "All rights reserved",
    returnsPolicy: "Returns Policy",
    contactUs: "Contact Us",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    naaman: "نعمان",
    vardinon: "فاردينون",
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    cart: "السلة",
    search: "بحث",
    
    // Common
    addToCart: "أضف إلى السلة",
    remove: "إزالة",
    total: "المجموع",
    filters: "تصفية",
    reset: "إعادة تعيين",
    category: "الفئة",
    price: "السعر",
    colors: "الألوان",
    size: "الحجم",
    all: "الكل",
    
    // Cart
    emptyCart: "سلة التسوق فارغة",
    itemAdded: "تم إضافته إلى السلة!",
    
    // Product sections
    hotSale: "عروض ساخنة",
    featuredProducts: "منتجات مميزة للبيع",
    bestSellers: "الأكثر مبيعاً",
    mostPopular: "أكثر المنتجات شعبية",
    
    // Brands
    naamanCollection: "مجموعة نعمان",
    vardinonCollection: "مجموعة فاردينون",
    premiumKitchenware: "أدوات وأواني مطبخ فاخرة",
    luxuryBedding: "أدوات النوم والحمام الفاخرة",
    
    // Footer
    allRightsReserved: "جميع الحقوق محفوظة",
    returnsPolicy: "سياسة الإرجاع",
    contactUs: "اتصل بنا",
  },
  he: {
    // Navigation
    home: "בית",
    naaman: "נעמן",
    vardinon: "ורדינון",
    login: "התחברות",
    register: "הרשמה",
    cart: "עגלה",
    search: "חיפוש",
    
    // Common
    addToCart: "הוסף לעגלה",
    remove: "הסר",
    total: "סה\"כ",
    filters: "מסננים",
    reset: "איפוס",
    category: "קטגוריה",
    price: "מחיר",
    colors: "צבעים",
    size: "גודל",
    all: "הכל",
    
    // Cart
    emptyCart: "העגלה שלך ריקה",
    itemAdded: "נוסף לעגלה!",
    
    // Product sections
    hotSale: "מבצעים חמים",
    featuredProducts: "מוצרים מומלצים במבצע",
    bestSellers: "הנמכרים ביותר",
    mostPopular: "המוצרים הפופולריים ביותר",
    
    // Brands
    naamanCollection: "קולקציית נעמן",
    vardinonCollection: "קולקציית ורדינון",
    premiumKitchenware: "כלי מטבח וכלי בישול פרימיום",
    luxuryBedding: "מוצרי מצעים ואמבטיה יוקרתיים",
    
    // Footer
    allRightsReserved: "כל הזכויות שמורות",
    returnsPolicy: "מדיניות החזרות",
    contactUs: "צור קשר",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang && ["en", "ar", "he"].includes(savedLang)) {
        setLanguage(savedLang);
      }
    }
  }, []);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

