
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Problems Worth Solving
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Hurdle Hunt connects problem-seekers with real challenges. Discover problems
          that need solutions and build something people actually need.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base">
            <Link to="/problems">Browse Problems</Link>
          </Button>
          <Button asChild variant="outline" className="border-gray-300 px-8 py-6 text-base">
            <Link to="/submit">Submit a Problem</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
