"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AnnouncementBanner() {
  const { t } = useLanguage();

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden relative w-full">
      <div className="animate-scroll whitespace-nowrap">
        <span className="mx-8 inline-block">
          {t("limitedTimeOffer")}
        </span>
        <span className="mx-8 inline-block">
          {t("limitedTimeOffer")}
        </span>
        <span className="mx-8 inline-block">
          {t("limitedTimeOffer")}
        </span>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
}

