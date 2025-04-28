
import { Card, CardContent } from "@/components/ui/card";
import { Users, UserPlus, Heart, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import MembershipForm from "@/components/MembershipForm";
import { useState } from "react";

const Join = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-[400px] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join the Movement
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Be part of building a democratic and united South Sudan. Join SSPLM/A today.
            </p>
          </div>
        </div>
      </div>

      {showForm ? (
        <div className="container mx-auto px-4 py-12">
          <MembershipForm />
        </div>
      ) : (
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Become a Member</h3>
                <p className="text-gray-600 mb-4">
                  Join SSPLM/A as an official member and participate in our mission.
                </p>
                <Button className="w-full" onClick={() => setShowForm(true)}>Apply Now</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Volunteer</h3>
                <p className="text-gray-600 mb-4">
                  Support our activities and initiatives as a dedicated volunteer.
                </p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Start a Chapter</h3>
                <p className="text-gray-600 mb-4">
                  Organize a local SSPLM/A chapter in your community.
                </p>
                <Button variant="outline" className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Youth & Women</h3>
                <p className="text-gray-600 mb-4">
                  Join our specialized programs for youth and women's engagement.
                </p>
                <Button variant="outline" className="w-full">Join Programs</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Join;
