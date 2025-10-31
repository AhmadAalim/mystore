"use client";

export default function AnnouncementBanner() {
  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden relative w-full">
      <div className="animate-scroll whitespace-nowrap">
        <span className="mx-8 inline-block">
          🎉 LIMITED TIME OFFER! Get 50% OFF on all products - Use code SALE50 at checkout! 🎉
        </span>
        <span className="mx-8 inline-block">
          🎉 LIMITED TIME OFFER! Get 50% OFF on all products - Use code SALE50 at checkout! 🎉
        </span>
        <span className="mx-8 inline-block">
          🎉 LIMITED TIME OFFER! Get 50% OFF on all products - Use code SALE50 at checkout! 🎉
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

