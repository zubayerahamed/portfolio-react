import { Code2, Cable, Cloud, Wrench, Users, Zap, Workflow, CloudCog, Rocket, RefreshCcwDot, Lightbulb, GraduationCap } from 'lucide-react';

type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
  created_at: string;
};

const iconMap: { [key: string]: typeof Code2 } = {
  Code2,
  Cable,
  Cloud,
  Wrench,
  Users,
  Zap,
  Workflow,
  CloudCog,
  Rocket,
  RefreshCcwDot,
  Lightbulb,
  GraduationCap
};

const services: Service[] = [
  {
    id: '1',
    title: 'Custom Enterprise Application Development',
    description: 'Designing and delivering scalable, secure, production-grade backend systems using Java, Spring Boot, Microservices, and SQL Server/MySQL/PostgreSQL.',
    icon: 'Code2',
    order_index: 1,
    created_at: '',
  },
  {
    id: '2',
    title: 'Full-Stack Web Application Development',
    description: 'End-to-end development combining robust Java/Spring Boot backends with modern frontend stacks (Angular/HTML/Bootstrap).',
    icon: 'Zap',
    order_index: 2,
    created_at: '',
  },
  {
    id: '3',
    title: 'API Design & System Integration',
    description: 'Building secure REST APIs, integrating with third-party services, payment gateways, bank interfaces, and cloud platforms.',
    icon: 'Cable',
    order_index: 3,
    created_at: '',
  },
  {
    id: '4',
    title: 'ERP & Business Automation Solutions',
    description: 'Developing workflow automation, inventory systems, accounting modules, restaurant POS, food-court management, and multi-tenant reporting platforms.',
    icon: 'Workflow',
    order_index: 4,
    created_at: '',
  },
  {
    id: '5',
    title: 'Microservices Architecture & Cloud Deployment',
    description: 'Designing distributed systems, containerization (Docker), orchestration (Kubernetes), and cloud deployments (AWS/Azure/GCP).',
    icon: 'CloudCog',
    order_index: 5,
    created_at: '',
  },
  {
    id: '6',
    title: 'SaaS Application Development',
    description: 'Building multi-tenant, subscription-based platforms with robust authentication, role management, and scalable data isolation.',
    icon: 'Rocket',
    order_index: 6,
    created_at: '',
  },
  {
    id: '7',
    title: 'Legacy System Modernization',
    description: 'Refactoring monolithic applications, improving performance, migrating to microservices, and upgrading old Java/Spring systems.',
    icon: 'RefreshCcwDot',
    order_index: 7,
    created_at: '',
  },
  {
    id: '8',
    title: 'Technical Consultancy & System Design',
    description: 'Helping businesses architect scalable systems, define technical roadmaps, and make strategic engineering decisions.',
    icon: 'Lightbulb',
    order_index: 8,
    created_at: '',
  },
  {
    id: '9',
    title: 'Code Review, Mentorship & Engineering Best Practices',
    description: 'Improving team code quality, establishing coding standards, mentoring juniors, and enforcing clean architecture principles.',
    icon: 'GraduationCap',
    order_index: 9,
    created_at: '',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl  sm:text-5xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-justify text-gray-600 max-w-2xl mx-auto">
            Comprehensive software engineering services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl text-center font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-center text-gray-600 leading-relaxed">
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
