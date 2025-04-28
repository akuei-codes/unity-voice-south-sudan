
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const News = () => {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "SSPLM/A Leadership Announces Regional Conference",
      date: "April 25, 2025",
      excerpt: "The Central Executive Committee has announced a regional conference to address key policy priorities for the coming year.",
      content: "The conference will bring together representatives from all regions to discuss national unity, economic development, and security challenges.",
      category: "Announcements",
      type: "news"
    },
    {
      id: 2,
      title: "Statement on National Reconciliation Efforts",
      date: "April 22, 2025",
      excerpt: "SSPLM/A outlines its position on the ongoing national reconciliation process and proposes a framework for inclusive dialogue.",
      content: "The movement reiterates its commitment to peaceful resolution of conflicts and calls for international support for reconciliation initiatives.",
      category: "Statements",
      type: "statement"
    },
    {
      id: 3,
      title: "New Political Education Program Launched",
      date: "April 18, 2025",
      excerpt: "The movement introduces a comprehensive political education program focused on democratic principles and national identity.",
      content: "The program will be implemented across all regions with tailored modules for youth, women, and community leaders.",
      category: "Programs",
      type: "news"
    },
    {
      id: 4,
      title: "Position Paper on Constitutional Reform",
      date: "April 15, 2025",
      excerpt: "SSPLM/A releases detailed position paper on proposed constitutional amendments and governance reforms.",
      content: "The paper addresses power-sharing arrangements, decentralization, judicial independence, and electoral systems.",
      category: "Policy",
      type: "statement"
    },
    {
      id: 5,
      title: "Chairperson's Address to the Nation",
      date: "April 10, 2025",
      excerpt: "SSPLM/A Chairperson delivers important address on current national challenges and movement's proposed solutions.",
      content: "The speech highlighted economic recovery plans, security sector reforms, and diplomatic initiatives.",
      category: "Speeches",
      type: "speech"
    },
    {
      id: 6,
      title: "Regional Chapter Established in Western Equatoria",
      date: "April 5, 2025",
      excerpt: "New regional chapter office inaugurated to strengthen grassroots presence and community engagement.",
      content: "The new office will coordinate local programs, membership services, and political education activities.",
      category: "Organization",
      type: "news"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-[300px] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Statements</h1>
            <p className="text-xl text-white/90">Official news, statements, speeches, and interviews from SSPLM/A</p>
          </div>
        </div>
      </div>

      {/* News Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Tabs for filtering */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All Updates</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="statement">Statements</TabsTrigger>
            <TabsTrigger value="speech">Speeches</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map(item => (
                <Card key={item.id} className="border border-gray-200 h-full flex flex-col">
                  <CardHeader>
                    <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">{item.category} | {item.type}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-gray-700">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild className="px-0">
                      <Link to={`/news/${item.id}`}>Read Full {item.type === "statement" ? "Statement" : item.type === "speech" ? "Speech" : "Article"}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="news">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.filter(item => item.type === "news").map(item => (
                <Card key={item.id} className="border border-gray-200 h-full flex flex-col">
                  <CardHeader>
                    <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">{item.category}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-gray-700">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild className="px-0">
                      <Link to={`/news/${item.id}`}>Read Full Article</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="statement">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.filter(item => item.type === "statement").map(item => (
                <Card key={item.id} className="border border-gray-200 h-full flex flex-col">
                  <CardHeader>
                    <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">{item.category}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-gray-700">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild className="px-0">
                      <Link to={`/news/${item.id}`}>Read Full Statement</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="speech">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.filter(item => item.type === "speech").map(item => (
                <Card key={item.id} className="border border-gray-200 h-full flex flex-col">
                  <CardHeader>
                    <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">{item.category}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-gray-700">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild className="px-0">
                      <Link to={`/news/${item.id}`}>Read Full Speech</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Archive Link */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/news/archive">View Archive</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
