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
    shoppingCart: "Shopping Cart",
    
    // Common
    addToCart: "Add to Cart",
    remove: "Remove",
    total: "Total",
    filters: "Filters",
    reset: "Reset",
    resetFilters: "Reset Filters",
    category: "Category",
    price: "Price",
    priceRange: "Price Range",
    colors: "Colors",
    size: "Size",
    all: "All",
    showing: "Showing",
    products: "products",
    product: "product",
    noProductsFound: "No products found matching your filters",
    clearAllFilters: "Clear all filters",
    min: "Min",
    max: "Max",
    
    // Cart
    emptyCart: "Your cart is empty",
    itemAdded: "added to cart!",
    
    // Product sections
    hotSale: "Hot Sale",
    featuredProducts: "Featured products on sale",
    bestSellers: "Best Sellers",
    mostPopular: "Our most popular items",
    bestseller: "Bestseller",
    limitedTimeOffer: "LIMITED TIME OFFER! Get 50% OFF on all products - Use code SALE50 at checkout!",
    
    // Brands
    naamanCollection: "Naaman Collection",
    vardinonCollection: "Vardinon Collection",
    premiumKitchenware: "Premium Kitchenware & Cookware",
    luxuryBedding: "Luxury Bedding & Bath Essentials",
    
    // Categories
    cookware: "Cookware",
    kitchenware: "Kitchenware",
    dishesPlates: "Dishes & Plates",
    servingPlates: "Serving Plates",
    utensils: "Utensils",
    appliances: "Appliances",
    towels: "Towels",
    bathRobes: "Bath Robes",
    bedSheets: "Bed Sheets",
    bedCovers: "Bed Covers",
    pillows: "Pillows",
    bathroomAccessories: "Bathroom Accessories",
    
    // Products
    premiumCookwareSet: "Premium Cookware Set",
    stainlessSteelCookwareSet: "Stainless Steel Cookware Set",
    nonStickFryingPanSet: "Non-Stick Frying Pan Set",
    ceramicCookwareCollection: "Ceramic Cookware Collection",
    professionalKnifeBlockSet: "Professional Knife Block Set",
    cuttingBoardSet: "Cutting Board Set",
    kitchenUtensilsSet: "Kitchen Utensils Set",
    stainlessSteelUtensils: "Stainless Steel Utensils",
    luxuryBathTowelSet: "Luxury Bath Towel Set",
    silkComforter: "Silk Comforter",
    bambooBeddingSet: "Bamboo Bedding Set",
    designerGiftSet: "Designer Gift Set",
    egyptianCottonDuvetCover: "Egyptian Cotton Duvet Cover",
    memoryFoamMattressPad: "Memory Foam Mattress Pad",
    ceramicDinnerwareSet: "Ceramic Dinnerware Set",
    organicCottonTowelSet: "Organic Cotton Towel Set",
    ceramicDinnerSet: "Ceramic Dinner Set",
    melaminePlatesSet: "Melamine Plates Set",
    porcelainDinnerware: "Porcelain Dinnerware",
    bambooServingTraySet: "Bamboo Serving Tray Set",
    glassServingBowlSet: "Glass Serving Bowl Set",
    stainlessSteelPlatter: "Stainless Steel Platter",
    stainlessSteelUtensilSet: "Stainless Steel Utensil Set",
    woodenCutlerySet: "Wooden Cutlery Set",
    titaniumCookwareUtensils: "Titanium Cookware Utensils",
    electricKettle: "Electric Kettle",
    standMixer: "Stand Mixer",
    foodProcessor: "Food Processor",
    egyptianCottonBathTowelSet: "Egyptian Cotton Bath Towel Set",
    bambooTowelCollection: "Bamboo Towel Collection",
    microfiberQuickDryTowels: "Microfiber Quick Dry Towels",
    luxuryBathrobe: "Luxury Bathrobe",
    terryClothBathrobe: "Terry Cloth Bathrobe",
    hoodedBathrobe: "Hooded Bathrobe",
    egyptianCottonBedSheets: "Egyptian Cotton Bed Sheets",
    silkBeddingSet: "Silk Bedding Set",
    bambooBedSheets: "Bamboo Bed Sheets",
    duvetCoverSet: "Duvet Cover Set",
    comforterCover: "Comforter Cover",
    quiltCoverCollection: "Quilt Cover Collection",
    memoryFoamPillow: "Memory Foam Pillow",
    downFeatherPillow: "Down Feather Pillow",
    bambooPillow: "Bamboo Pillow",
    showerCurtainSet: "Shower Curtain Set",
    bathMatSet: "Bath Mat Set",
    toiletSeatCoverSet: "Toilet Seat Cover Set",
    
    // Footer
    allRightsReserved: "All rights reserved",
    returnsPolicy: "Returns Policy",
    contactUs: "Contact Us",
    aboutUs: "About Us",
    quickLinks: "Quick Links",
    connectWithUs: "Connect With Us",
    yourOneStopShop: "Your one-stop shop for premium kitchenware, bedding, and home essentials.",
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
    shoppingCart: "سلة التسوق",
    
    // Common
    addToCart: "أضف إلى السلة",
    remove: "إزالة",
    total: "المجموع",
    filters: "تصفية",
    reset: "إعادة تعيين",
    resetFilters: "إعادة تعيين الفلاتر",
    category: "الفئة",
    price: "السعر",
    priceRange: "نطاق السعر",
    colors: "الألوان",
    size: "الحجم",
    all: "الكل",
    showing: "إظهار",
    products: "منتجات",
    product: "منتج",
    noProductsFound: "لم يتم العثور على منتجات تطابق الفلاتر",
    clearAllFilters: "مسح كل الفلاتر",
    min: "الحد الأدنى",
    max: "الحد الأقصى",
    
    // Cart
    emptyCart: "سلة التسوق فارغة",
    itemAdded: "تم إضافته إلى السلة!",
    
    // Product sections
    hotSale: "عروض ساخنة",
    featuredProducts: "منتجات مميزة للبيع",
    bestSellers: "الأكثر مبيعاً",
    mostPopular: "أكثر المنتجات شعبية",
    bestseller: "الأكثر مبيعاً",
    limitedTimeOffer: "🎉 عرض لفترة محدودة! احصل على خصم 50% على جميع المنتجات - استخدم كود SALE50 عند الدفع! 🎉",
    
    // Brands
    naamanCollection: "مجموعة نعمان",
    vardinonCollection: "مجموعة فاردينون",
    premiumKitchenware: "أدوات وأواني مطبخ فاخرة",
    luxuryBedding: "أدوات النوم والحمام الفاخرة",
    
    // Categories
    cookware: "أواني الطبخ",
    kitchenware: "أدوات المطبخ",
    dishesPlates: "الأطباق والأوعية",
    servingPlates: "أطباق التقديم",
    utensils: "أدوات المائدة",
    appliances: "الأجهزة",
    towels: "المناشف",
    bathRobes: "الأردية",
    bedSheets: "ملاءات الأسرة",
    bedCovers: "أغطية الأسرة",
    pillows: "الوسائد",
    bathroomAccessories: "إكسسوارات الحمام",
    
    // Products
    premiumCookwareSet: "طقم أواني الطبخ الفاخر",
    stainlessSteelCookwareSet: "طقم أواني من الفولاذ المقاوم للصدأ",
    nonStickFryingPanSet: "طقم أواني غير لاصقة",
    ceramicCookwareCollection: "مجموعة أواني السيراميك",
    professionalKnifeBlockSet: "طقم سكاكين احترافي",
    cuttingBoardSet: "طقم ألواح التقطيع",
    kitchenUtensilsSet: "طقم أدوات المطبخ",
    stainlessSteelUtensils: "أدوات المائدة من الفولاذ المقاوم للصدأ",
    luxuryBathTowelSet: "طقم مناشف حمام فاخر",
    silkComforter: "بطانية من الحرير",
    bambooBeddingSet: "طقم أغطية من الخيزران",
    designerGiftSet: "طقم هدايا مصمم",
    egyptianCottonDuvetCover: "غطاء لحاف من القطن المصري",
    memoryFoamMattressPad: "وسادة فراش من الرغوة الذاكرة",
    ceramicDinnerwareSet: "طقم أدوات المائدة من السيراميك",
    organicCottonTowelSet: "طقم مناشف من القطن العضوي",
    ceramicDinnerSet: "طقم أطباق السيراميك",
    melaminePlatesSet: "طقم أطباق الميلامين",
    porcelainDinnerware: "أدوات المائدة من الخزف",
    bambooServingTraySet: "طقم صواني التقديم من الخيزران",
    glassServingBowlSet: "طقم سلطاني التقديم الزجاجية",
    stainlessSteelPlatter: "طبق من الفولاذ المقاوم للصدأ",
    stainlessSteelUtensilSet: "طقم أدوات المائدة من الفولاذ المقاوم للصدأ",
    woodenCutlerySet: "طقم أدوات المائدة الخشبية",
    titaniumCookwareUtensils: "أدوات الطبخ من التيتانيوم",
    electricKettle: "غلاية كهربائية",
    standMixer: "خلاط منضدي",
    foodProcessor: "محضر طعام",
    egyptianCottonBathTowelSet: "طقم مناشف حمام من القطن المصري",
    bambooTowelCollection: "مجموعة مناشف الخيزران",
    microfiberQuickDryTowels: "مناشف سريعة الجفاف من الألياف الدقيقة",
    luxuryBathrobe: "رداء فاخر",
    terryClothBathrobe: "رداء من القماش المخملي",
    hoodedBathrobe: "رداء بقبة",
    egyptianCottonBedSheets: "ملاءات من القطن المصري",
    silkBeddingSet: "طقم أغطية من الحرير",
    bambooBedSheets: "ملاءات من الخيزران",
    duvetCoverSet: "طقم أغطية الألحفة",
    comforterCover: "غطاء البطانية",
    quiltCoverCollection: "مجموعة أغطية اللحف",
    memoryFoamPillow: "وسادة من الرغوة الذاكرة",
    downFeatherPillow: "وسادة من ريش الإوز",
    bambooPillow: "وسادة من الخيزران",
    showerCurtainSet: "طقم ستارة الحمام",
    bathMatSet: "طقم بساط الحمام",
    toiletSeatCoverSet: "طقم أغطية مقعد المرحاض",
    
    // Footer
    allRightsReserved: "جميع الحقوق محفوظة",
    returnsPolicy: "سياسة الإرجاع",
    contactUs: "اتصل بنا",
    aboutUs: "من نحن",
    quickLinks: "روابط سريعة",
    connectWithUs: "تواصل معنا",
    yourOneStopShop: "متجرك الشامل لأدوات المطبخ الفاخرة، الأغطية، ولوازم المنزل.",
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
    shoppingCart: "עגלת קניות",
    
    // Common
    addToCart: "הוסף לעגלה",
    remove: "הסר",
    total: "סה\"כ",
    filters: "מסננים",
    reset: "איפוס",
    resetFilters: "איפוס מסננים",
    category: "קטגוריה",
    price: "מחיר",
    priceRange: "טווח מחירים",
    colors: "צבעים",
    size: "גודל",
    all: "הכל",
    showing: "מציג",
    products: "מוצרים",
    product: "מוצר",
    noProductsFound: "לא נמצאו מוצרים התואמים למסננים",
    clearAllFilters: "נקה את כל המסננים",
    min: "מינימום",
    max: "מקסימום",
    
    // Cart
    emptyCart: "העגלה שלך ריקה",
    itemAdded: "נוסף לעגלה!",
    
    // Product sections
    hotSale: "מבצעים חמים",
    featuredProducts: "מוצרים מומלצים במבצע",
    bestSellers: "הנמכרים ביותר",
    mostPopular: "המוצרים הפופולריים ביותר",
    bestseller: "הנמכר ביותר",
    limitedTimeOffer: "🎉 מבצע לתקופה מוגבלת! קבלו 50% הנחה על כל המוצרים - השתמשו בקוד SALE50 בקופה! 🎉",
    
    // Brands
    naamanCollection: "קולקציית נעמן",
    vardinonCollection: "קולקציית ורדינון",
    premiumKitchenware: "כלי מטבח וכלי בישול פרימיום",
    luxuryBedding: "מוצרי מצעים ואמבטיה יוקרתיים",
    
    // Categories
    cookware: "כלי בישול",
    kitchenware: "כלי מטבח",
    dishesPlates: "צלחות וכלים",
    servingPlates: "צלחות הגשה",
    utensils: "כלי אוכל",
    appliances: "מכשירים",
    towels: "מגבות",
    bathRobes: "חלוקי אמבטיה",
    bedSheets: "מצעי מיטה",
    bedCovers: "כיסויי מיטה",
    pillows: "כריות",
    bathroomAccessories: "אביזרי אמבטיה",
    
    // Products
    premiumCookwareSet: "סט כלי בישול פרימיום",
    stainlessSteelCookwareSet: "סט כלי בישול מפלדת אל-חלד",
    nonStickFryingPanSet: "סט מחבתות אנטי-דבק",
    ceramicCookwareCollection: "קולקציית כלי חרס",
    professionalKnifeBlockSet: "סט סכינים מקצועי",
    cuttingBoardSet: "סט קרשי חיתוך",
    kitchenUtensilsSet: "סט כלי מטבח",
    stainlessSteelUtensils: "כלי אוכל מפלדת אל-חלד",
    luxuryBathTowelSet: "סט מגבות אמבטיה יוקרתי",
    silkComforter: "שמיכה ממשי",
    bambooBeddingSet: "סט מצעים מבמבוק",
    designerGiftSet: "סט מתנה מעצב",
    egyptianCottonDuvetCover: "מכסה שמיכה מכותנה מצרית",
    memoryFoamMattressPad: "מזרן מזיכרון",
    ceramicDinnerwareSet: "סט כלי אוכל מחרס",
    organicCottonTowelSet: "סט מגבות מכותנה אורגנית",
    ceramicDinnerSet: "סט כלי אוכל מחרס",
    melaminePlatesSet: "סט צלחות מלומין",
    porcelainDinnerware: "כלי אוכל מחרסינה",
    bambooServingTraySet: "סט מגשים הגשה מבמבוק",
    glassServingBowlSet: "סט קערות הגשה מזכוכית",
    stainlessSteelPlatter: "מגש מפלדת אל-חלד",
    stainlessSteelUtensilSet: "סט כלי אוכל מפלדת אל-חלד",
    woodenCutlerySet: "סט כלי אוכל מעץ",
    titaniumCookwareUtensils: "כלי בישול מטיטניום",
    electricKettle: "קומקום חשמלי",
    standMixer: "מיקסר עמדה",
    foodProcessor: "מעבד מזון",
    egyptianCottonBathTowelSet: "סט מגבות אמבטיה מכותנה מצרית",
    bambooTowelCollection: "קולקציית מגבות במבוק",
    microfiberQuickDryTowels: "מגבות ייבוש מהיר ממיקרו-פייבר",
    luxuryBathrobe: "חלוק יוקרה",
    terryClothBathrobe: "חלוק מבד טרי",
    hoodedBathrobe: "חלוק עם ברדס",
    egyptianCottonBedSheets: "מצעי מיטה מכותנה מצרית",
    silkBeddingSet: "סט מצעי מיטה ממשי",
    bambooBedSheets: "מצעי מיטה מבמבוק",
    duvetCoverSet: "סט מכסים לשמיכה",
    comforterCover: "כיסוי לשמיכה",
    quiltCoverCollection: "קולקציית מכסים לשמיכות",
    memoryFoamPillow: "כרית מזיכרון",
    downFeatherPillow: "כרית מנוצה",
    bambooPillow: "כרית מבמבוק",
    showerCurtainSet: "סט וילון למקלחת",
    bathMatSet: "סט שטיח אמבטיה",
    toiletSeatCoverSet: "סט מכסים למושב אסלה",
    
    // Footer
    allRightsReserved: "כל הזכויות שמורות",
    returnsPolicy: "מדיניות החזרות",
    contactUs: "צור קשר",
    aboutUs: "אודותינו",
    quickLinks: "קישורים מהירים",
    connectWithUs: "התחבר אלינו",
    yourOneStopShop: "החנות הבלעדית שלך לכלי מטבח פרימיום, מצעים ומוצרי בית.",
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

