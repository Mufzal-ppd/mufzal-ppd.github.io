import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  const email = 'mufzal.ppd@gmail.com';
  const phone = '+91 8956780241';
  const linkedinUrl = 'https://www.linkedin.com/in/mufzal-shaikh-531706288';

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Get in touch and let's discuss how I can
            help automate your workflows and build solutions that save time and
            cost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Left Side: Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href={`tel:${phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">What You Get:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Fast & reliable delivery
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Clear communication & updates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Secure, scalable solutions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Long-term support & training
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Responsive Microsoft Form */}
          <div className="flex">
            <iframe
              src="https://forms.office.com/r/5H4ekK6Cz3?origin=lprLink"
              className="rounded-lg border border-gray-300 w-full min-h-[500px] md:min-h-[650px] lg:min-h-[700px]"
              style={{ flexGrow: 1 }}
              frameBorder="0"
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
