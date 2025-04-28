
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "SSPLM/A Leadership Announces Regional Conference",
      date: "April 25, 2025",
      excerpt: "The Central Executive Committee has announced a regional conference to address key policy priorities for the coming year.",
      category: "Announcements"
    },
    {
      id: 2,
      title: "Statement on National Reconciliation Efforts",
      date: "April 22, 2025",
      excerpt: "SSPLM/A outlines its position on the ongoing national reconciliation process and proposes a framework for inclusive dialogue.",
      category: "Statements"
    },
    {
      id: 3,
      title: "New Political Education Program Launched",
      date: "April 18, 2025",
      excerpt: "The movement introduces a comprehensive political education program focused on democratic principles and national identity.",
      category: "Programs"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Latest News & Statements</h2>
          <Button asChild variant="outline">
            <Link to="/news">View All</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map(item => (
            <Card key={item.id} className="border border-gray-200 h-full flex flex-col">
              <CardHeader>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">{item.category}</div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p>{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="px-0">
                  <Link to={`/news/${item.id}`}>Read Full Statement</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
