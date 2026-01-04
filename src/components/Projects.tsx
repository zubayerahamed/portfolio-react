import { useState } from 'react';
import { Github, ExternalLink, Star, Image } from 'lucide-react';
import ScreenshotsModal from './ScreenshotsModal';

type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  github_url: string;
  live_url: string;
  technologies: string[];
  status: 'Past' | 'Present' | 'Upcoming';
  featured: boolean;
  order_index: number;
  created_at: string;
};

type ProjectScreenshot = {
  id: string;
  project_id: string;
  image_url: string;
  order_index: number;
  created_at: string;
};

const projectScreenshots: ProjectScreenshot[] = [
  {
    id: '1',
    project_id: '1',
    image_url: '/projects/ASPI/1.png',
    order_index: 1,
    created_at: '',
  },
  {
    id: '2',
    project_id: '1',
    image_url: '/projects/ASPI/2.png',
    order_index: 2,
    created_at: '',
  },
  {
    id: '3',
    project_id: '1',
    image_url: '/projects/ASPI/3.png',
    order_index: 3,
    created_at: '',
  },
  {
    id: '4',
    project_id: '1',
    image_url: '/projects/ASPI/4.png',
    order_index: 3,
    created_at: '',
  },
  {
    id: '5',
    project_id: '1',
    image_url: '/projects/ASPI/5.png',
    order_index: 1,
    created_at: '',
  },
  {
    id: '6',
    project_id: '1',
    image_url: '/projects/ASPI/6.png',
    order_index: 1,
    created_at: '',
  },
  // KIT POS Screenshots
  {
    id: '7',
    project_id: '2',
    image_url: '/projects/KIT-POS/1.png',
    order_index: 1,
    created_at: '',
  },
  {
    id: '8',
    project_id: '2',
    image_url: '/projects/KIT-POS/2.png',
    order_index: 2,
    created_at: '',
  },
  {
    id: '9',
    project_id: '2',
    image_url: '/projects/KIT-POS/3.png',
    order_index: 3,
    created_at: '',
  },
  {
    id: '10',
    project_id: '2',
    image_url: '/projects/KIT-POS/4.png',
    order_index: 4,
    created_at: '',
  },
  {
    id: '11',
    project_id: '2',
    image_url: '/projects/KIT-POS/5.png',
    order_index: 5,
    created_at: '',
  },
  {
    id: '12',
    project_id: '2',
    image_url: '/projects/KIT-POS/6.png', 
    order_index: 6,
    created_at: '',
  },
  {
    id: '13',
    project_id: '2',
    image_url: '/projects/KIT-POS/7.png',
    order_index: 7,
    created_at: '',
  },
  {
    id: '14',
    project_id: '2',
    image_url: '/projects/KIT-POS/8.png',
    order_index: 8,
    created_at: '',
  },
  {
    id: '15',
    project_id: '2',
    image_url: '/projects/KIT-POS/9.png',
    order_index: 9,
    created_at: '',
  },
  {
    id: '16',
    project_id: '2',
    image_url: '/projects/KIT-POS/10.png',
    order_index: 10,
    created_at: '',
  },
  {
    id: '17',
    project_id: '2',
    image_url: '/projects/KIT-POS/11.png', 
    order_index: 11,
    created_at: '',
  }, 
  {
    id: '18',
    project_id: '2',
    image_url: '/projects/KIT-POS/12.png', 
    order_index: 12,
    created_at: '',
  }, 
  {
    id: '19',
    project_id: '2',
    image_url: '/projects/KIT-POS/13.png', 
    order_index: 13,
    created_at: '',
  }, 
  {
    id: '20',
    project_id: '2',
    image_url: '/projects/KIT-POS/14.png', 
    order_index: 14,
    created_at: '',
  }, 
  {
    id: '21',
    project_id: '2',
    image_url: '/projects/KIT-POS/15.png', 
    order_index: 15,
    created_at: '',
  }, 
  {
    id: '22',
    project_id: '2',
    image_url: '/projects/KIT-POS/16.png', 
    order_index: 16,
    created_at: '',
  }, 
  {
    id: '23',
    project_id: '2',
    image_url: '/projects/KIT-POS/17.png', 
    order_index: 17,
    created_at: '',
  }, 
  // AJU-ERP Screenshots
  // Generate order index upto 5
  {
    id: '24',
    project_id: '3',
    image_url: '/projects/AJU-ERP/1.png',
    order_index: 1,
    created_at: '',
  },
  {
    id: '25',
    project_id: '3',
    image_url: '/projects/AJU-ERP/2.png',
    order_index: 2,
    created_at: '',
  },
  {
    id: '26',
    project_id: '3',
    image_url: '/projects/AJU-ERP/3.png',
    order_index: 3,
    created_at: '',
  },
  {
    id: '27',
    project_id: '3',
    image_url: '/projects/AJU-ERP/4.png',
    order_index: 4,
    created_at: '',
  },
  {
    id: '28',
    project_id: '3',
    image_url: '/projects/AJU-ERP/5.png',
    order_index: 5,
    created_at: '',
  },
  // NetCourier Screenshots
  {
    id: '29',
    project_id: '4',
    image_url: '/projects/NetCourier/1.png',
    order_index: 1,
    created_at: '',
  },
  {
    id: '30',
    project_id: '4',
    image_url: '/projects/NetCourier/2.png',
    order_index: 2,
    created_at: '',
  },
  {
    id: '31',
    project_id: '4',
    image_url: '/projects/NetCourier/3.png',
    order_index: 3,
    created_at: '',
  },
  {
    id: '32',
    project_id: '4',
    image_url: '/projects/NetCourier/4.png',
    order_index: 4,
    created_at: '',
  },
  // Money Manager 10 screenshots
  {
    id: '33',
    project_id: '5',
    image_url: '/projects/MM/1.png',
    order_index: 1,
    created_at: '',
  },
  {
    id: '34',
    project_id: '5',
    image_url: '/projects/MM/2.png',
    order_index: 2,
    created_at: '',
  },
  {
    id: '35',
    project_id: '5',
    image_url: '/projects/MM/3.png',
    order_index: 3,
    created_at: '',
  },
  {
    id: '36',
    project_id: '5',
    image_url: '/projects/MM/4.png',
    order_index: 4,
    created_at: '',
  },
  {
    id: '37',
    project_id: '5',
    image_url: '/projects/MM/5.png',
    order_index: 5,
    created_at: '',
  },
  {
    id: '38',
    project_id: '5',
    image_url: '/projects/MM/6.png',
    order_index: 6,
    created_at: '',
  },
  {
    id: '39',
    project_id: '5',
    image_url: '/projects/MM/7.png',
    order_index: 7,
    created_at: '',
  },
  {
    id: '40',
    project_id: '5',
    image_url: '/projects/MM/8.png',
    order_index: 8,
    created_at: '',
  },
  {
    id: '41',
    project_id: '5',
    image_url: '/projects/MM/9.png',
    order_index: 9,
    created_at: '',
  },
  {
    id: '42',
    project_id: '5',
    image_url: '/projects/MM/10.png',
    order_index: 10,
    created_at: '',
  },
  // Brihatta Art Foundation 6 screenshots
  {
    id: '43',
    project_id: '6',
    image_url: '/projects/Brihatta/1.png',
    order_index: 1,
    created_at: '',
  },
  {
    id: '44',
    project_id: '6',
    image_url: '/projects/Brihatta/2.png',
    order_index: 2,
    created_at: '',
  },
  {
    id: '45',
    project_id: '6',
    image_url: '/projects/Brihatta/3.png',
    order_index: 3,
    created_at: '',
  },
  {
    id: '46',
    project_id: '6',
    image_url: '/projects/Brihatta/4.png',
    order_index: 4,
    created_at: '',
  },
  {
    id: '47',
    project_id: '6',
    image_url: '/projects/Brihatta/5.png',
    order_index: 5,
    created_at: '',
  },
  {
    id: '48',
    project_id: '6',
    image_url: '/projects/Brihatta/6.png',
    order_index: 6,
    created_at: '',
  },
  // Eldorado Holdings Ltd. 6 screenshots
  {
    id: '49',
    project_id: '7',
    image_url: '/projects/Eldorado/1.png',
    order_index: 1,
    created_at: '',
  },
  {
    id: '50',
    project_id: '7',
    image_url: '/projects/Eldorado/2.png',
    order_index: 2,
    created_at: '',
  },
  {
    id: '51',
    project_id: '7',
    image_url: '/projects/Eldorado/3.png',
    order_index: 3,
    created_at: '',
  },
  {
    id: '52',
    project_id: '7',
    image_url: '/projects/Eldorado/4.png',
    order_index: 4,
    created_at: '',
  },
  {
    id: '53',
    project_id: '7',
    image_url: '/projects/Eldorado/5.png',
    order_index: 5,
    created_at: '',
  },
  {
    id: '54',
    project_id: '7',
    image_url: '/projects/Eldorado/6.png',
    order_index: 6,
    created_at: '',
  },

];

const projects: Project[] = [
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
    description: 'POS system with Inventory management, BOM, Sales tracking, Payment processing and Report Portal using Spring Boot, JavaFX, MsSQL, jQuery, Bootstrap.',
    image_url: '/public/projects/KIT-POS/1.png',
    github_url: '',
    live_url: '',
    technologies: ['Java','Spring Boot', 'JavaFX', 'MsSQL', 'jQuery', 'Bootstrap'],
    status: 'Past' as const,
    featured: true,
    order_index: 2,
    created_at: '',
  },
  {
    id: '3',
    title: 'AJU-ERP (Enterprise ERP System)',
    description: 'ERP system for small to medium businesses with modules for Inventory, Sales, Purchases, and Accounting using Spring Boot and Oracle DB.',
    image_url: 'public/projects/0.png',
    github_url: '',
    live_url: '',
    technologies: ['Java', 'Spring Boot', 'Oracle DB', 'jQuery', 'Bootstrap'],
    status: 'Past' as const,
    featured: false,
    order_index: 3,
    created_at: '',
  },
  {
    id: '4',
    title: 'NetCourier',
    description: 'Netcourier is a UK-focused logistics and courier management software that helps courier companies manage job booking, dispatch, driver allocation, tracking, proof of delivery, and invoicing from a single system.',
    image_url: 'public/projects/0.png',
    github_url: '',
    live_url: '',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'jQuery', 'Bootstrap'],
    status: 'Past' as const,
    featured: true,
    order_index: 4,
    created_at: '',
  },
  {
    id: '5',
    title: 'Money Manager',
    description: 'Money Manager is a personal finance management application that helps users track their income, expenses, budgets, and financial goals with insightful reports and visualizations.',
    image_url: 'public/projects/MM/1.png',
    github_url: 'https://github.com/zubayerahamed/money-manager.git',
    live_url: 'https://mm.zubayerahamed.com/',
    technologies: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
    status: 'Past' as const,
    featured: false,
    order_index: 5,
    created_at: '',
  },
  {
    id: '6',
    title: 'Brihatta Art Foundation',
    description: 'Brihatta Art Foundation, in Dhaka, Bangladesh, is an artist-led platform that embraces creativity as a fluid, transformative force. Through residencies, exhibitions, and community engagement, it fosters inclusive dialogue, collaboration, and continuous learning. ',
    image_url: 'public/projects/Brihatta/1.png',
    github_url: '',
    live_url: 'https://brihattaartfoundation.com/',
    technologies: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
    status: 'Present' as const,
    featured: true,
    order_index: 6,
    created_at: '',
  },
  {
    id: '7',
    title: 'Eldorado Holdings Ltd.',
    description: '“EL DORADO HOLDINGS LIMITED” has been working for development both in urban and rural areas. It reputation in quality apartment construction project in capital City Dhaka of Bangladesh. It is fast growing company and it promise to develop the city area and the life style of city dwellers according to government urban development policy',
    image_url: 'public/projects/Eldorado/1.png',
    github_url: '',
    live_url: 'https://eldoradoholdingsltd.com/home',
    technologies: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
    status: 'Past' as const,
    featured: false,
    order_index: 7,
    created_at: '',
  },
];

export default function Projects() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [screenshots, setScreenshots] = useState<ProjectScreenshot[]>([]);

  const fetchScreenshots = (projectId: string) => {
    const projectScreenshotsData = projectScreenshots.filter(s => s.project_id === projectId);
    setScreenshots(projectScreenshotsData);
  };

  const handleViewScreenshots = (projectId: string) => {
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
    Past: 'Past Projects',
    Present: 'Present Projects',
    Upcoming: 'Upcoming Projects',
  };

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
                <p className="text-gray-600 mb-4 leading-relaxed text-justify">
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
