import { Building2, Users, FileText, Folder, FileSpreadsheet, CheckCircle } from 'lucide-react';

const projects = [
  {
    icon: Building2,
    title: 'School Observation App',
    description: 'Designed and deployed a Power Apps solution for 50+ HODs and Principals across 7 branches to track teacher performance.',
    impact: 'Reduced reporting time and paperwork by 60%',
    usefulFor: 'Educational institutions, multi-branch organizations',
    duration: 'Enterprise solution',
  },
  {
    icon: Users,
    title: 'CRM System with API Integration',
    description: 'Developed a comprehensive CRM integrated with APIs for real-time lead verification with secure login and scalability.',
    impact: 'Supports 150+ users with multi-level approval flow and dynamic document creation',
    usefulFor: 'Sales teams, businesses with lead management needs',
    duration: 'Full-scale CRM',
  },
  {
    icon: FileText,
    title: 'MSME & CIN API Integration',
    description: 'Automated bulk data retrieval from government APIs using Power Automate for seamless data verification.',
    impact: 'Eliminated 200+ manual lookups per month',
    usefulFor: 'Organizations requiring government data verification',
    duration: 'API automation',
  },
  {
    icon: Folder,
    title: 'Document Management System',
    description: 'Built a secure SharePoint + Power Apps-based DMS with role-based file access and version history tracking.',
    impact: 'Centralized document control with advanced security',
    usefulFor: 'Organizations handling sensitive documents',
    duration: 'Enterprise DMS',
  },
  {
    icon: FileSpreadsheet,
    title: 'Custom Excel Export',
    description: 'Created dynamic Excel export functionality directly from Power Apps for 5 internal departments.',
    impact: 'Reduced dependency on IT support for reporting',
    usefulFor: 'Departments needing automated reporting',
    duration: 'Automation solution',
  },
  {
    icon: CheckCircle,
    title: 'Multi-level Approval Workflow',
    description: 'Automated a 3-stage approval flow with conditional logic and email notifications for streamlined operations.',
    impact: 'Cut approval turnaround time by 70%',
    usefulFor: 'Organizations with complex approval processes',
    duration: 'Workflow automation',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world solutions delivering measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mb-4 inline-block group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                    <p className="text-sm font-semibold text-green-800">
                      {project.impact}
                    </p>
                  </div>

                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Useful for:</span> {project.usefulFor}
                  </div>

                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Type:</span> {project.duration}
                  </div>
                </div>

                <p className="text-xs text-blue-600 font-medium italic">
                  Demo available on request
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}