import React, { useState } from 'react';
import { 
  Rocket, 
  Twitter, 
  Github, 
  Linkedin, 
  Search, 
  BarChart2, 
  Share2, 
  Target, 
  Zap,
  MessageSquare,
  Globe,
  TrendingUp,
  Construction
} from 'lucide-react';

function App() {
  const [showConstruction, setShowConstruction] = useState(false);

  const features = [
    {
      icon: Search,
      title: "AI Content Enhancement",
      description: "Advanced AI algorithms analyze and optimize your content for maximum search engine visibility and user engagement."
    },
    {
      icon: BarChart2,
      title: "Smart Keyword Analysis",
      description: "Discover high-impact keywords and phrases that drive targeted traffic to your website using our AI-powered analysis."
    },
    {
      icon: MessageSquare,
      title: "Generated Meta Descriptions",
      description: "Automatically generate compelling meta descriptions that increase click-through rates and improve SERP rankings."
    },
    {
      icon: Target,
      title: "Competitor Strategy Insights",
      description: "Gain valuable insights into your competitors' SEO strategies and stay ahead in your market."
    },
    {
      icon: Share2,
      title: "Social Media Optimization",
      description: "Optimize your social media presence with AI-generated content recommendations and engagement strategies."
    },
    {
      icon: Globe,
      title: "Cross-Platform Analysis",
      description: "Comprehensive analysis across all major social platforms to maximize your digital footprint."
    }
  ];

  const stats = [
    { value: "300%", label: "Average ROI Increase" },
    { value: "85%", label: "Traffic Growth" },
    { value: "24/7", label: "AI-Powered Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-900 via-black to-blue-900 text-white">
      {showConstruction && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-gradient-to-br from-blue-900 to-gray-900 p-8 rounded-xl max-w-md text-center border border-blue-500/20">
            <Construction className="w-16 h-16 text-blue-400 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-2">Site Under Construction</h3>
            <p className="text-gray-300 mb-4">We're working hard to bring you the future of SEO optimization. Coming soon!</p>
            <button 
              onClick={() => setShowConstruction(false)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              Go Back
            </button>
          </div>
        </div>
      )}

      <nav className="border-b border-blue-900/50 backdrop-blur-md bg-gradient-to-r from-blue-900/50 to-black/50 fixed w-full z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Rocket className="w-8 h-8 text-blue-400 animate-pulse" />
              <span className="text-2xl font-bold ml-2 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                MetaSEO AI
              </span>
            </div>
            <button
              onClick={() => setShowConstruction(true)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
              Next-Generation Digital Marketing Optimization
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              Harness the power of AI to transform your digital presence. MetaSEO AI analyzes your content across multiple dimensions and provides ready-to-implement, AI-generated optimization strategies.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConstruction(true)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20 flex items-center group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Start Optimizing
              </button>
              <button
                onClick={() => setShowConstruction(true)}
                className="border border-blue-500/30 hover:border-blue-400 text-blue-300 hover:text-blue-400 px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl p-8 text-center backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300" />
                <h3 className="text-xl font-semibold mb-3 text-blue-100">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-2xl p-12 text-center backdrop-blur-sm border border-blue-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent pointer-events-none" />
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">Ready to Transform Your Digital Presence?</h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              Join the next generation of digital marketing optimization. Let AI power your success.
            </p>
            <button
              onClick={() => setShowConstruction(true)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20 flex items-center mx-auto group"
            >
              <TrendingUp className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Get Started Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="text-blue-300 text-sm">
              <p>Developed by</p>
              <div className="flex justify-center items-center space-x-2 mt-2">
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">Algowise Technologies</span>
                <span className="text-blue-500">&</span>
                <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text">Vivaran Creations</span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none z-0" />
    </div>
  );
}

export default App;