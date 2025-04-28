
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SSPLA = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-[400px] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              South Sudan People's Liberation Army
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              The military wing of SSPLM/A, committed to national defense and security with professionalism and dedication.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Core Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Command Structure</h3>
              <p className="text-gray-600 mb-4">
                Professional military organization and leadership hierarchy.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/sspla/command">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Civic-Military Relations</h3>
              <p className="text-gray-600 mb-4">
                Building trust and cooperation between military and civilian sectors.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/sspla/relations">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Veterans Support</h3>
              <p className="text-gray-600 mb-4">
                Programs and services supporting our veterans and their families.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/sspla/veterans">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-lg text-gray-700 mb-6">
            The SSPLA is dedicated to maintaining peace, security, and stability in South Sudan through professional military service, strong civic-military relations, and unwavering dedication to protecting our nation's sovereignty.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold mb-2">Professionalism</h4>
              <p className="text-gray-600">Maintaining high standards of military conduct</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Service</h4>
              <p className="text-gray-600">Dedicated service to our nation</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Protection</h4>
              <p className="text-gray-600">Safeguarding our people and territory</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSPLA;
