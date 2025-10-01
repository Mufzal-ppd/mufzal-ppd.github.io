import { Smartphone, Workflow, Plug, Database, Bot, BarChart, GitBranch, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Power Apps Development',
    description: 'Custom Canvas and Model-Driven apps tailored to your business needs with intuitive UI and secure data management.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Streamline approval workflows, Excel automation, and system integrations to reduce manual work by up to 80%.',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description: 'Seamless integration with REST APIs, custom connectors, and secure authentication for third-party services.',
  },
  {
    icon: Database,
    title: 'Data & Access Management',
    description: 'Expert setup of Dataverse, SQL, SharePoint with advanced RBAC and permissions for secure data access.',
  },
  {
    icon: Bot,
    title: 'AI & Chatbots',
    description: 'Intelligent Power Virtual Agents and AI Builder integration for smart apps and automated workflows.',
  },
  {
    icon: BarChart,
    title: 'Reporting & Dashboards',
    description: 'Dynamic Power BI dashboards and Excel automation for real-time insights and data-driven decisions.',
  },
  {
    icon: GitBranch,
    title: 'App Lifecycle Management',
    description: 'Professional deployment with Solutions, Pipelines, and Sandbox-to-Production migration strategies.',
  },
  {
    icon: BookOpen,
    title: 'Training & Support',
    description: 'Comprehensive user guides, client training sessions, and ongoing support for seamless adoption.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end Power Platform solutions from design to deployment and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}