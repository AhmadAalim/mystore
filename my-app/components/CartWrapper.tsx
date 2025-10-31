"use client";

import { CartProvider } from "@/context/CartContext";
import Header from "./Header";
import AnnouncementBanner from "./AnnouncementBanner";
import Navigation from "./Navigation";
import WhatsAppButton from "./WhatsAppButton";
import Footer from "./Footer";

export default function CartWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <AnnouncementBanner />
      <Header />
      <Navigation />
      {children}
      <Footer />
      <WhatsAppButton />
    </CartProvider>
  );
}

