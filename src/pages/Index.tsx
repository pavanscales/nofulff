import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProblems from "@/components/FeaturedProblems";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProblems />
      </main>
    </div>
  );
};

export default Index;
