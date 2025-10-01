import { Code, Database, Zap, Shield, Users, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Power Platform',
    skills: [
      'Power Apps (Canvas & Model-Driven)',
      'Power Automate',
      'Custom Connectors & API Integration',
      'Power Virtual Agents (Chatbots)',
      'AI Builder',
    ],
  },
  {
    icon: Database,
    title: 'Database & Data',
    skills: [
      'Dataverse',
      'SQL (Queries & Data Management)',
      'SharePoint Integration',
      'Microsoft Excel (Advanced)',
      'JSON Data Manipulation',
    ],
  },
  {
    icon: Zap,
    title: 'Automation',
    skills: [
      'Automated Workflows',
      'Instant & Scheduled Flows',
      'Excel Automation',
      'System Integrations',
      'Process Optimization',
    ],
  },
  {
    icon: Shield,
    title: 'Security & Access',
    skills: [
      'Role-Based Access Control (RBAC)',
      'Azure AD Authentication',
      'Advanced Permissions',
      'Secure Data Management',
      'Group & User-wise Access',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Business Solutions',
    skills: [
      'Process Automation (60-80% reduction)',
      'Enterprise App Development',
      'API & Third-party Integration',
      'Reporting & Dashboards',
      'App Lifecycle Management',
    ],
  },
  {
    icon: Users,
    title: 'Professional Skills',
    skills: [
      'Problem-Solving & Analytical Thinking',
      'Client Communication',
      'Requirement Gathering',
      'User Training & Documentation',
      'Cross-functional Collaboration',
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical and professional skills to deliver end-to-end solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700 flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}