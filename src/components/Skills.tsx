import { useState } from 'react';

type Skill = {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  order_index: number;
  created_at: string;
};

const skills: Skill[] = [
  { id: '1', name: 'Java', category: 'Backend', proficiency: 95, order_index: 1, created_at: '' },
  { id: '2', name: 'Spring Boot', category: 'Backend', proficiency: 95, order_index: 2, created_at: '' },
  { id: '3', name: 'Spring MVC', category: 'Backend', proficiency: 90, order_index: 3, created_at: '' },
  { id: '4', name: 'Hibernate/JPA', category: 'Backend', proficiency: 90, order_index: 4, created_at: '' },
  { id: '5', name: 'Microservices', category: 'Backend', proficiency: 85, order_index: 5, created_at: '' },
  { id: '6', name: 'REST API', category: 'Backend', proficiency: 95, order_index: 6, created_at: '' },
  { id: '7', name: 'PostgreSQL', category: 'Database', proficiency: 90, order_index: 7, created_at: '' },
  { id: '8', name: 'MySQL', category: 'Database', proficiency: 90, order_index: 8, created_at: '' },
  { id: '9', name: 'MongoDB', category: 'Database', proficiency: 80, order_index: 9, created_at: '' },
  { id: '10', name: 'Redis', category: 'Database', proficiency: 75, order_index: 10, created_at: '' },
  { id: '11', name: 'JavaScript', category: 'Frontend', proficiency: 85, order_index: 11, created_at: '' },
  { id: '12', name: 'TypeScript', category: 'Frontend', proficiency: 80, order_index: 12, created_at: '' },
  { id: '13', name: 'React', category: 'Frontend', proficiency: 85, order_index: 13, created_at: '' },
  { id: '14', name: 'HTML/CSS', category: 'Frontend', proficiency: 90, order_index: 14, created_at: '' },
  { id: '15', name: 'Git', category: 'Tools', proficiency: 90, order_index: 15, created_at: '' },
  { id: '16', name: 'Docker', category: 'Tools', proficiency: 85, order_index: 16, created_at: '' },
  { id: '17', name: 'Kubernetes', category: 'Tools', proficiency: 75, order_index: 17, created_at: '' },
  { id: '18', name: 'Maven/Gradle', category: 'Tools', proficiency: 90, order_index: 18, created_at: '' },
  { id: '19', name: 'AWS', category: 'Cloud', proficiency: 80, order_index: 19, created_at: '' },
  { id: '20', name: 'Jenkins', category: 'Tools', proficiency: 80, order_index: 20, created_at: '' },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];
  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical skills and proficiency across various technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-blue-600 font-bold">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
