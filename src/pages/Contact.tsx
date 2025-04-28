
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-[300px] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/90">Get in touch with SSPLM/A through our official channels</p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Official Channels</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Email Contacts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium min-w-[180px]">General Enquiries:</span>
                    <a href="mailto:ssplmsspla@gmail.com" className="text-blue-600 hover:underline">ssplmsspla@gmail.com</a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-[180px]">Information Desk:</span>
                    <a href="mailto:info@ssplmsspla.org" className="text-blue-600 hover:underline">info@ssplmsspla.org</a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-[180px]">Political Coordination:</span>
                    <a href="mailto:ssplm@ssplmsspla.org" className="text-blue-600 hover:underline">ssplm@ssplmsspla.org</a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-[180px]">Military Coordination:</span>
                    <a href="mailto:sspla@ssplmsspla.org" className="text-blue-600 hover:underline">sspla@ssplmsspla.org</a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-[180px]">Media Inquiries:</span>
                    <a href="mailto:media@ssplmsspla.org" className="text-blue-600 hover:underline">media@ssplmsspla.org</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Messaging</h3>
                <p className="flex items-center">
                  <span className="font-medium min-w-[180px]">WhatsApp (Public Line):</span>
                  <span>+8109051787871</span>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Websites</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.ssplmsspla.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.ssplmsspla.org</a>
                  </li>
                  <li>
                    <a href="https://www.ssplmsspla.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.ssplmsspla.com</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Social Media</h3>
                <p className="mb-4">Follow us on social media: @ssplmsspla</p>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/ssplmsspla" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook size={24} />
                  </a>
                  <a href="https://twitter.com/ssplmsspla" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter size={24} />
                  </a>
                  <a href="https://instagram.com/ssplmsspla" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                  <a href="https://youtube.com/ssplmsspla" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                      <Input id="firstName" placeholder="Enter first name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                      <Input id="lastName" placeholder="Enter last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Enter email address" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Enter message subject" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="department" className="text-sm font-medium">Department</label>
                    <select 
                      id="department" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select a department</option>
                      <option value="general">General Inquiry</option>
                      <option value="political">Political Wing (SSPLM)</option>
                      <option value="military">Military Wing (SSPLA)</option>
                      <option value="media">Media Relations</option>
                      <option value="membership">Membership</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} required />
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-ssplm-green hover:bg-ssplm-green/90 text-white">
                      Submit Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
