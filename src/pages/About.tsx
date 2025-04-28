
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-[400px] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-white/90">Learn about our history, vision, and organizational structure</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-100 border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
            <Button variant="ghost" size="sm" className="whitespace-nowrap">Background & History</Button>
            <Button variant="ghost" size="sm" className="whitespace-nowrap">Vision & Mission</Button>
            <Button variant="ghost" size="sm" className="whitespace-nowrap">Core Values</Button>
            <Button variant="ghost" size="sm" className="whitespace-nowrap">Organizational Structure</Button>
            <Button variant="ghost" size="sm" className="whitespace-nowrap">Leadership</Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Background & History */}
        <section id="background-history" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Background & Founding History</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              The South Sudan People's Liberation Movement and Army (SSPLM/A) was established as a response to the urgent need 
              for unified leadership within South Sudan. Born from the collective desire for democracy, representation, and 
              stability, our movement has evolved into a structured organization with clear political and defense objectives.
            </p>
            <p className="mb-4">
              Founded on principles of national unity and self-determination, SSPLM/A has worked tirelessly to bring 
              together diverse communities across South Sudan under a common vision. Our founding members recognized that 
              a fragmented approach to national challenges would not serve the long-term interests of the South Sudanese people.
            </p>
            <p className="mb-4">
              Through periods of both conflict and peace, the movement has maintained its commitment to a democratic South Sudan 
              where all citizens have equal rights and opportunities. The SSPLM/A's history is characterized by consistent 
              advocacy for inclusive governance, territorial integrity, and social justice.
            </p>
            <p>
              Today, we continue to build on this foundation, adapting to modern challenges while preserving the core values 
              that have guided us since inception. Our dual structure—political and military—allows us to address both the 
              governance needs and security requirements of a developing nation.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision-mission" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Vision, Mission & Core Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A united, democratic, and prosperous South Sudan where all citizens live in dignity, with equal rights and 
                opportunities, under a government that represents their interests and protects their future.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To mobilize the South Sudanese people around shared national interests, establish democratic institutions, 
                ensure security and stability, and build a just society that honors the sacrifices made for independence.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">Unity</h4>
              <p className="text-gray-700">We stand for a unified South Sudan that transcends ethnic, regional, and political divisions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">Democracy</h4>
              <p className="text-gray-700">We are committed to democratic governance, inclusive participation, and peaceful transitions of power.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">Integrity</h4>
              <p className="text-gray-700">We uphold the highest ethical standards in all our actions and hold ourselves accountable to the people.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">Service</h4>
              <p className="text-gray-700">We exist to serve the South Sudanese people and prioritize their wellbeing in all decisions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">Justice</h4>
              <p className="text-gray-700">We advocate for a just society where all citizens are equal before the law and have access to resources.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">Discipline</h4>
              <p className="text-gray-700">We maintain organizational discipline and expect the same standard from all our members.</p>
            </div>
          </div>
        </section>

        {/* Organizational Structure */}
        <section id="organizational-structure" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Organizational Structure</h2>
          <div className="prose max-w-none text-gray-700 mb-6">
            <p>
              SSPLM/A operates under a structured leadership framework that ensures clear lines of authority, 
              accountability, and representation. Our organizational structure is designed to facilitate efficient 
              decision-making while ensuring that the movement remains connected to the people it serves.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold mb-4">Central Executive Committee</h3>
            <p className="text-gray-700 mb-4">
              The highest decision-making body within SSPLM/A, responsible for strategic direction, policy formulation, 
              and oversight of all movement activities.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Chairperson</li>
              <li>Deputy Chairperson</li>
              <li>Secretary General</li>
              <li>Political Bureau Members</li>
              <li>Regional Representatives</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Political Secretariat</h3>
              <p className="text-gray-700 mb-4">
                Oversees the political activities and civic engagement programs of SSPLM.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Political Affairs</li>
                <li>Public Mobilization</li>
                <li>International Relations</li>
                <li>Policy Development</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Military Command</h3>
              <p className="text-gray-700 mb-4">
                Oversees the defense and security operations of SSPLA.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>General Command</li>
                <li>Regional Commands</li>
                <li>Special Units</li>
                <li>Training & Discipline</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership">
          <h2 className="text-3xl font-bold mb-8">Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Representative leadership profiles */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Leadership Name</h3>
                <p className="text-gray-600 mb-4">Chairperson</p>
                <p className="text-gray-700">Brief biography and background information about the chairperson's role and history with the movement.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Leadership Name</h3>
                <p className="text-gray-600 mb-4">Deputy Chairperson</p>
                <p className="text-gray-700">Brief biography and background information about the deputy chairperson's role and history with the movement.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Leadership Name</h3>
                <p className="text-gray-600 mb-4">Secretary General</p>
                <p className="text-gray-700">Brief biography and background information about the secretary general's role and history with the movement.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
