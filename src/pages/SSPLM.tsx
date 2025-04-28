
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SSPLM = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-[400px] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              South Sudan People's Liberation Movement
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              The political wing of SSPLM/A, dedicated to building a democratic and unified South Sudan through civic engagement and reform.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Mandate & Programs</h3>
              <p className="text-gray-600 mb-4">
                Our core initiatives and programs focused on democratic development and social progress.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/ssplm/mandate">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Political Education</h3>
              <p className="text-gray-600 mb-4">
                Educational programs and resources for civic engagement and political awareness.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/ssplm/education">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Social Justice</h3>
              <p className="text-gray-600 mb-4">
                Our commitment to equality, justice, and social development for all South Sudanese.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/ssplm/justice">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            The SSPLM works to establish and maintain democratic institutions, promote social justice, and ensure equitable development across South Sudan. Through political education, public engagement, and policy reform, we strive to build a nation that serves all its citizens.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold mb-2">Democracy</h4>
              <p className="text-gray-600">Building strong democratic institutions</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Unity</h4>
              <p className="text-gray-600">Promoting national unity and reconciliation</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Progress</h4>
              <p className="text-gray-600">Advancing social and economic development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSPLM;
