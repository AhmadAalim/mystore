import Products from "@/components/Products";
import PromotionCarousel from "@/components/PromotionCarousel";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import BestSellers from "@/components/BestSellers";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PromotionCarousel />
      <CategoryGrid />
      <FeaturedProducts />
      <BestSellers />
      <Products />
    </div>
  );
}
