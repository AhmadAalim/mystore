"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const promotions = [
  {
    id: 1,
    title: "Kitchen Essentials Sale",
    subtitle: "Up to 50% OFF",
    description: "Transform your kitchen with premium cookware",
    cta: "Shop Now",
    link: "/naaman",
    bgColor: "bg-red-600"
  },
  {
    id: 2,
    title: "Cozy Bedding Collection",
    subtitle: "Limited Time Offer",
    description: "Sleep in style with our luxury bed sheets",
    cta: "Shop Now",
    link: "/vardinon",
    bgColor: "bg-blue-600"
  },
  {
    id: 3,
    title: "Holiday Special",
    subtitle: "Free Shipping",
    description: "On all orders over $100",
    cta: "Explore",
    link: "/products",
    bgColor: "bg-green-600"
  }
];

export default function PromotionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-xl mb-8">
      {/* Carousel Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className={`w-full flex-shrink-0 flex items-center justify-center ${promo.bgColor} text-white relative`}
          >
            <div className="text-center px-8 max-w-3xl">
              <h2 className="text-5xl font-bold mb-4">{promo.title}</h2>
              <h3 className="text-3xl mb-4">{promo.subtitle}</h3>
              <p className="text-xl mb-8">{promo.description}</p>
              <a
                href={promo.link}
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                {promo.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-10"
        aria-label="Previous slide"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-10"
        aria-label="Next slide"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

