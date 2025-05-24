import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProblems from "@/components/FeaturedProblems";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <HeroSection />
        <FeaturedProblems />
      </main>
    </div>
  );
};

export default Index;
