import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Power Platform Fundamentals',
    code: 'PL-900',
    issuer: 'Microsoft Certified',
    date: 'April 2024',
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Microsoft certified professional with verified expertise
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white border-2 border-blue-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                  <Award size={40} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {cert.title}
                    </h3>
                    <CheckCircle size={24} className="text-green-500" />
                  </div>
                  <p className="text-xl text-blue-600 font-semibold mb-2">
                    {cert.code}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-semibold">{cert.issuer}</span>
                  </p>
                  <p className="text-gray-600">
                    Issued: {cert.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 max-w-2xl mx-auto border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
              <Award size={24} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">B.Sc. Computer Science</p>
              <p className="text-gray-600">Graduate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}