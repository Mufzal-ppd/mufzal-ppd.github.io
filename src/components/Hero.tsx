import { Download, Send } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Power Platform Developer
          </h2>
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
            Power Apps | Power Automate | SharePoint
          </p>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            I help startups, SMBs, and enterprises build custom business applications and automate processes using
            Microsoft Power Platform. With 2+ years of hands-on experience, I specialize in delivering solutions that
            reduce manual work, improve efficiency, and ensure secure access to business data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Send size={20} />
              Hire Me
            </button>
            <a
              href="/Mufzal_Shaikh_CV.pdf"
              download
              className="group bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Apps Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Workflows</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}