
import Hero from "@/components/Hero";
import FeaturedNews from "@/components/FeaturedNews";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured News Section */}
      <FeaturedNews />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About SSPLM/A</h2>
              <p className="text-gray-700 mb-4">
                The South Sudan People's Liberation Movement and Army (SSPLM/A) is dedicated to building a united, democratic 
                South Sudan through discipline, clarity, and purpose. Our movement operates with seriousness, 
                respect, and responsibility in all endeavors.
              </p>
              <p className="text-gray-700 mb-6">
                SSPLM/A consists of two wings: the political wing (SSPLM) focused on civic engagement and governance, 
                and the military wing (SSPLA) providing national defense with transparency and professionalism.
              </p>
              <Button asChild className="bg-ssplm-green hover:bg-ssplm-green/90 text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-60 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                    alt="South Sudan Landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-60 overflow-hidden rounded-lg row-span-2 translate-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                    alt="South Sudan Landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-60 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                    alt="South Sudan Landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Two Wings</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* SSPLM Card */}
            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-ssplm-green text-white">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold">SSPLM</h3>
                      <p className="text-white/80">Political Wing</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-3">South Sudan People's Liberation Movement</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>Mandate & Programs</li>
                    <li>Political Education</li>
                    <li>Social Justice Agenda</li>
                    <li>Democracy & Reform</li>
                    <li>Public Campaigns & Mobilization</li>
                  </ul>
                  <Button asChild className="bg-ssplm-green hover:bg-ssplm-green/90 text-white w-full">
                    <Link to="/ssplm">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* SSPLA Card */}
            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-sspla-blue text-white">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold">SSPLA</h3>
                      <p className="text-white/80">Military Wing</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-3">South Sudan People's Liberation Army</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>Doctrine & Command Structure</li>
                    <li>Civic-Military Discipline</li>
                    <li>Security & Protection Zones</li>
                    <li>Veterans & Community Support</li>
                    <li>National Defense Strategy</li>
                  </ul>
                  <Button asChild className="bg-sspla-blue hover:bg-sspla-blue/90 text-white w-full">
                    <Link to="/sspla">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center poem-text">
            <p className="text-2xl mb-8">
              "The way we speak online must reflect the same structure, values, and seriousness we apply in our organizing and political work. We do not treat the internet as an escape from accountability. We treat it as a space where trust can be built—or lost."
            </p>
            <p className="text-lg text-gray-400">— SSPLM/A Digital Strategy</p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Be part of building a democratic, united South Sudan. Join SSPLM/A today and contribute to our nation's future.
          </p>
          <Button asChild size="lg" className="bg-ssplm-red hover:bg-ssplm-red/90 text-white">
            <Link to="/join">Join SSPLM/A</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
