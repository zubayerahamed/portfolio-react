import { useEffect, useState } from 'react';
import { Github, ExternalLink, Star, Image } from 'lucide-react';
import { supabase, type Project, type ProjectScreenshot } from '../lib/supabase';
import ScreenshotsModal from './ScreenshotsModal';

const defaultProjects = [
  {
    id: '1',
    title: 'ASPI (Enterprise ERP System)',
    description: 'Full-featured ERP system built with Spring Boot, handling Procurements, Inventory, Sales, and Financial management for medium to large enterprises.',
    image_url: 'public/projects/ASPI/6.png',
    github_url: '',
    live_url: '',
    technologies: ['Java', 'Spring Boot', 'MsSQL', 'jQuery', 'Bootstrap', 'Crystal report'],
    status: 'Present' as const,
    featured: true,
    order_index: 1,
    created_at: '',
  },
  {
    id: '2',
    title: 'KIT POS (Point of Sale System)',
    description: 'Modern e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.',
    image_url: '/public/projects/KIT-POS/1.png',
    github_url: 'https://github.com/zubayerahamed/ecommerce',
    live_url: '',
    technologies: ['Spring Boot', 'MySQL', 'Stripe API', 'React', 'TypeScript'],
    status: 'upcoming' as const,
    featured: false,
    order_index: 2,
    created_at: '',
  },
  {
    id: '3',
    title: 'AJU-ERP (Enterprise ERP System)',
    description: 'Scalable microservices-based application with service discovery, API gateway, and distributed tracing using Spring Cloud.',
    image_url: 'public/projects/0.png',
    github_url: 'https://github.com/zubayerahamed/microservices-demo',
    live_url: '',
    technologies: ['Spring Cloud', 'Eureka', 'Zuul', 'Docker', 'Kubernetes'],
    status: 'present' as const,
    featured: true,
    order_index: 3,
    created_at: '',
  },
  {
    id: '4',
    title: 'NetCourier',
    description: 'Custom REST API framework with authentication, authorization, rate limiting, and comprehensive API documentation.',
    image_url: 'public/projects/0.png',
    github_url: 'https://github.com/zubayerahamed/rest-framework',
    live_url: 'https://api-docs.example.com',
    technologies: ['Java', 'Spring Security', 'JWT', 'Swagger', 'Redis'],
    status: 'past' as const,
    featured: true,
    order_index: 4,
    created_at: '',
  },
  {
    id: '5',
    title: 'Money Manager',
    description: 'Big data processing pipeline for real-time analytics using Apache Kafka and Spring Batch for ETL operations.',
    image_url: 'public/projects/MM/1.png',
    github_url: 'https://github.com/zubayerahamed/analytics-pipeline',
    live_url: '',
    technologies: ['Spring Batch', 'Kafka', 'MongoDB', 'Elasticsearch', 'Grafana'],
    status: 'past' as const,
    featured: false,
    order_index: 5,
    created_at: '',
  },
  {
    id: '6',
    title: 'Brihatta Art Foundation',
    description: 'Platform for managing IoT devices with real-time monitoring, data collection, and device configuration capabilities.',
    image_url: 'public/projects/Brihatta/1.png',
    github_url: 'https://github.com/zubayerahamed/iot-platform',
    live_url: '',
    technologies: ['Spring Boot', 'MQTT', 'InfluxDB', 'WebSocket', 'Vue.js'],
    status: 'upcoming' as const,
    featured: false,
    order_index: 6,
    created_at: '',
  },
  {
    id: '6',
    title: 'Eldorado Holdings Ltd.',
    description: 'Platform for managing IoT devices with real-time monitoring, data collection, and device configuration capabilities.',
    image_url: 'public/projects/Eldorado/1.png',
    github_url: 'https://github.com/zubayerahamed/iot-platform',
    live_url: '',
    technologies: ['Spring Boot', 'MQTT', 'InfluxDB', 'WebSocket', 'Vue.js'],
    status: 'upcoming' as const,
    featured: false,
    order_index: 6,
    created_at: '',
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [screenshots, setScreenshots] = useState<ProjectScreenshot[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) {
      console.error('Error fetching projects:', error);
      setProjects(defaultProjects);
    } else if (data && data.length > 0) {
      setProjects(data);
    } else {
      setProjects(defaultProjects);
    }
    setLoading(false);
  };

  const fetchScreenshots = (projectId: string) => {
      
   
      setScreenshots([]);
  };

  const handleViewScreenshots = async (projectId: string) => {
    setSelectedProjectId(projectId);
    fetchScreenshots(projectId);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProjectId(null);
    setScreenshots([]);
  };

  const filteredProjects = selectedStatus === 'all'
    ? projects
    : projects.filter(p => p.status === selectedStatus);

  const statusLabels = {
    all: 'All Projects',
    past: 'Past Projects',
    present: 'Current Projects',
    upcoming: 'Upcoming Projects',
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcase of my work across various domains and technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(statusLabels).map(([status, label]) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedStatus === status
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Featured
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 capitalize">
                  {project.status}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 flex-col">
                  <button
                    onClick={() => handleViewScreenshots(project.id)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
                  >
                    <Image className="w-4 h-4" />
                    View Screenshots
                  </button>
                  <div className="flex gap-3">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      {selectedProjectId && (
        <ScreenshotsModal
          isOpen={modalOpen}
          screenshots={screenshots}
          projectTitle={projects.find(p => p.id === selectedProjectId)?.title || ''}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
