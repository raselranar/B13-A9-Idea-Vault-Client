import Banner from "@/components/layout/home/Banner";
import FeatureSection from "@/components/layout/home/FeatureSection";
import StatsSection from "@/components/layout/home/StatsSection";
import TrendingIdeas from "@/components/layout/home/TrendingIdeas";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <TrendingIdeas />
      <FeatureSection />
      <StatsSection />
    </>
  );
}
