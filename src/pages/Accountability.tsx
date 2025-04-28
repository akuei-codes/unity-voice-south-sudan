
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Users, AlertTriangle } from "lucide-react";

const Accountability = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparency & Accountability
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Our commitment to maintaining trust through transparent governance and ethical conduct.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Policies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <Shield className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Code of Conduct</h3>
              <p className="text-gray-600 mb-4">
                Ethical guidelines and standards for all members.
              </p>
              <Button variant="outline" className="w-full">View Code</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <FileText className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Policies</h3>
              <p className="text-gray-600 mb-4">
                Organizational policies and procedures.
              </p>
              <Button variant="outline" className="w-full">Read Policies</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Users className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Leadership</h3>
              <p className="text-gray-600 mb-4">
                Structure and responsibilities of leadership.
              </p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <AlertTriangle className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Report Issues</h3>
              <p className="text-gray-600 mb-4">
                Mechanism for reporting concerns and grievances.
              </p>
              <Button variant="outline" className="w-full">Report</Button>
            </CardContent>
          </Card>
        </div>

        {/* Commitment Statement */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Transparency</h2>
          <p className="text-lg text-gray-700 mb-6">
            SSPLM/A is committed to maintaining the highest standards of transparency and accountability in all its operations. We believe that trust is built through open communication, clear policies, and responsible governance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accountability;
