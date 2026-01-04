import { Briefcase, MapPin, Calendar } from 'lucide-react';

type Experience = {
  id: string;
  company: string;
  position: string;
  description: string;
  highlights: string[];
  start_date: string;
  end_date: string | null;
  current: boolean;
  location: string;
  technologies: string[];
  order_index: number;
  created_at: string;
};

const experience: Experience[] = [
  {
    id: '1',
    company: 'Metatude Asia Ltd',
    position: 'Senior Software Engineer',
    description: 'Serving as a Senior Software Engineer responsible for designing, building, and maintaining enterprise-grade web applications. The role involves end-to-end ownership of backend architecture, system reliability, and performance, while collaborating with cross-functional teams to deliver scalable, secure, and business-aligned solutions.',
    highlights: [
      'Led end-to-end development and long-term maintenance of the Knowwhy Survey Platform and an internal Server Monitoring System, supporting enterprise-scale usage.',
      'Architected and implemented backend services using Java and ASP.NET, with frontend components built in AngularJS, backed by MS SQL Server.',
      'Improved system reliability, performance monitoring, and operational visibility through custom monitoring tools.',
      'Provided technical leadership by mentoring junior engineers on clean code practices, design patterns, and scalable architecture.',
      'Collaborated closely with product owners and business stakeholders to translate business requirements into robust technical solutions.',
    ],
    start_date: '2022-02-16',
    end_date: null,
    current: true,
    location: 'Dhaka, Bangladesh',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'SQL Server', 'Angular', 'ASP.NET'],
    order_index: 1,
    created_at: '',
  },
  {
    id: '2',
    company: 'Automation Services Ltd (ASL)',
    position: 'Programmer Analyst',
    description: 'Worked as a Programmer Analyst responsible for designing, developing, and maintaining enterprise business applications across ERP, POS, and utility systems. The role involved translating complex business requirements into reliable technical solutions, contributing to system architecture decisions, and collaborating closely with cross-functional teams to deliver stable, production-ready software.',
    highlights: [
      'Designed and developed a web-based ERP platform using Java, Spring Boot, jQuery, and Oracle, supporting multiple business workflows.',
      'Led the architecture and development of a multi-business POS system tailored for food courts and restaurant operations.',
      'Built a microservices-based SMS & Email Delivery System, integrating with telecom and third-party messaging APIs.',
      'Played a key role in the continuous enhancement and maintenance of prepaid electricity metering systems for power distribution boards.',
      'Worked cross-functionally with QA, operations, and business teams to deliver features on schedule with production-grade stability.',
    ],
    start_date: '2020-11-17',
    end_date: '2022-02-16',
    current: false,
    location: 'Dhaka, Bangladesh',
    technologies: ['Java', 'Spring Boot', 'Oracle', 'Struts', 'Prime Faces', 'jQuery', 'Bootstrap'],
    order_index: 2,
    created_at: '',
  },
  {
    id: '3',
    company: 'MF Asia Ltd. (Metafour)',
    position: 'Software Engineer',
    description: 'Worked as a Software Engineer contributing to the design and development of a large-scale courier and logistics management platform. The role involved building backend services, integrating third-party systems, implementing location-based features, and ensuring system scalability and performance for high-volume operational workflows.',
    highlights: [
      'Implemented Multi-Drop Delivery workflows for a large-scale Courier Service Management System, optimizing delivery routing and operations.',
      'Integrated Google Maps APIs for real-time tracking, route calculation, distance estimation, and location services.',
      'Developed asynchronous import/export pipelines to efficiently process large datasets without impacting system performance.',
      'Integrated and maintained 8+ third-party courier service APIs, enabling unified booking, job management, and tracking capabilities.',
      'Contributed to system scalability and reliability through performance tuning and modular service design.',
    ],
    start_date: '2017-12-02',
    end_date: '2020-11-15',
    current: false,
    location: 'Dhaka, Bangladesh',
    technologies: ['Java', 'Spring MVC', 'Spring Boot', 'PostgreSQL', 'jQuery', 'Bootstrap'],
    order_index: 3,
    created_at: '',
  },
  {
    id: '4',
    company: 'Software Industry Ltd',
    position: 'Junior Software Developer (Part-Time)',
    description: 'Contributed to production web applications while gaining hands-on industry experience.',
    highlights: [
      'Developed core modules for a Donation Management System using Spring Boot',
      'Maintained and enhanced legacy web applications built with PHP and CodeIgniter, improving stability and feature completeness.',
    ],
    start_date: '2017-09-01',
    end_date: '2017-11-14',
    current: false,
    location: 'Dhaka, Bangladesh',
    technologies: ['Java', 'Spring MVC', 'Spring Boot', 'PostgreSQL', 'MySQL', 'jQuery', 'Bootstrap'],
    order_index: 4,
    created_at: '',
  },
  {
    id: '5',
    company: 'IsDB-BISEW IT Scholarship Programme',
    position: 'Trainee Software Developer',
    description: 'Completed structured professional training focused on enterprise web application development.',
    highlights: [
      'Developed a Blended Education Platform using Spring Boot and AngularJS.',
      'Completed intensive training in Java, Spring Framework, relational databases, and web technologies.',
      'Built academic and practice-based projects aligned with industry standards.',
      'Developed strong foundations in software engineering principles and best practices.',
    ],
    start_date: '2016-05-01',
    end_date: '2017-09-01',
    current: false,
    location: 'Dhaka, Bangladesh',
    technologies: ['Java', 'Spring MVC', 'Spring Boot', 'PostgreSQL', 'MySQL', 'jQuery', 'Bootstrap'],
    order_index: 5,
    created_at: '',
  },
];

export default function Experience() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const calculateYears = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    let years = end.getFullYear() - start.getFullYear();
    const monthDiff = end.getMonth() - start.getMonth();
    if (monthDiff < 0) years--;
    return years;
  };

  const calculateTotalExperience = () => {
    let totalMonths = 0;
    experience.forEach((exp) => {
      const start = new Date(exp.start_date);
      const end = exp.current ? new Date() : new Date(exp.end_date!);
      const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
      totalMonths += months;
    });
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return { years, months };
  };

  const totalExp = calculateTotalExperience();

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Professional journey and career highlights
          </p>
          <div className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl px-8 py-6 shadow-md border border-blue-200">
            <p className="text-gray-600 text-sm font-medium mb-1">Total Professional Experience</p>
            <p className="text-4xl font-bold text-blue-600">
              {totalExp.years}+ <span className="text-2xl text-gray-700">Years</span>
            </p>
            {totalExp.months > 0 && (
              <p className="text-sm text-gray-600 mt-2">
                {totalExp.years} years {totalExp.months} month{totalExp.months !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>

                  <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-blue-600 font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-justify text-gray-500 mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatDate(exp.start_date)} - {exp.current ? 'Present' : formatDate(exp.end_date!)}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold ml-2">
                          {calculateYears(exp.start_date, exp.end_date)} year{calculateYears(exp.start_date, exp.end_date) !== 1 ? 's' : ''}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-700">
                          <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
