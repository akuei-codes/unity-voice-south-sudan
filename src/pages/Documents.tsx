
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Documents = () => {
  const documents = [
    {
      title: "Founding Charter",
      description: "The original founding document of SSPLM/A",
      category: "Core Documents",
      downloadUrl: "#"
    },
    {
      title: "Constitutional Framework",
      description: "Framework for governance and organization",
      category: "Core Documents",
      downloadUrl: "#"
    },
    {
      title: "Manifesto 2025",
      description: "Current political and social agenda",
      category: "Policy Papers",
      downloadUrl: "#"
    },
    {
      title: "Strategic Plan 2025-2030",
      description: "Five-year organizational strategy",
      category: "Strategic Documents",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Official Documents
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Access official SSPLM/A documents, including our founding charter, policies, and strategic frameworks.
          </p>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {documents.map((doc) => (
            <Card key={doc.title}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">{doc.category}</div>
                    <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                    <p className="text-gray-600 mb-4">{doc.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <a href={doc.downloadUrl}>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
