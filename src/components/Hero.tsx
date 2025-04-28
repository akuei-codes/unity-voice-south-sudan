
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-[600px] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            South Sudan People's Liberation Movement and Army
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Building a united, democratic South Sudan through discipline, clarity, and purpose.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-ssplm-green hover:bg-ssplm-green/90 text-white">
              <Link to="/about">Learn About Us</Link>
            </Button>
            <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/30">
              <Link to="/news">Latest News</Link>
            </Button>
          </div>

          <div className="mt-10 py-4 px-6 bg-black/30 backdrop-blur-sm text-white rounded poem-text">
            <p className="text-lg">
              "In the shadow of history, we stand tall,<br />
              Our nation's future, answering the call.<br />
              Through struggle and hope, we forge our way,<br />
              For South Sudan's dawn, a brighter day."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
