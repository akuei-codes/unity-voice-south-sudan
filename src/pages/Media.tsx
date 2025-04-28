
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Image, Video, Download, Mail } from "lucide-react";

const Media = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Media Center
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Access official SSPLM/A media resources, including photos, videos, and press materials.
          </p>
        </div>
      </div>

      {/* Media Resources */}
      <div className="container mx-auto px-4 py-12">
        {/* Press Kit */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Download Press Kit</h2>
              <p className="text-gray-600">
                Complete media package including logos, emblems, and brand guidelines.
              </p>
            </div>
            <Button className="bg-ssplm-green hover:bg-ssplm-green/90">
              <Download className="mr-2 h-4 w-4" /> Download Press Kit
            </Button>
          </div>
        </div>

        {/* Media Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <Image className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Photo Gallery</h3>
              <p className="text-gray-600 mb-4">
                Official photographs from SSPLM/A events, activities, and leadership.
              </p>
              <Button variant="outline" className="w-full">View Photos</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Video className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Archive</h3>
              <p className="text-gray-600 mb-4">
                Speeches, documentaries, and event coverage videos.
              </p>
              <Button variant="outline" className="w-full">Watch Videos</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Mail className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Media Inquiries</h3>
              <p className="text-gray-600 mb-4">
                Contact our media relations team for press inquiries and interviews.
              </p>
              <Button variant="outline" className="w-full">Contact Us</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Media;
