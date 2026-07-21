import { Github, Linkedin } from 'lucide-react';

const profile = {
  name: 'Zubayer Ahamed',
  title: 'Full-Stack Software Developer',
  email: 'zubayerahamed1990@gmail.com',
  phone: '+880 1748562164',
  location: 'Dhaka, Bangladesh',
  github_url: 'https://github.com/zubayerahamed',
  linkedin_url: 'https://linkedin.com/in/zubayerahamed',
};

export default function About() {

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-justify text-gray-700 leading-relaxed mb-3">
              <b>Full-Stack Software Engineer</b> with deep expertise in <b>Java, Spring Boot, Laravel, Angular, and Ionic</b>, specializing in building scalable, high-performance enterprise applications for web, desktop, and mobile platforms.
            </p>
            <p className="text-lg text-justify text-gray-700 leading-relaxed mb-3">
              My core strength lies in backend engineering, where I architect resilient microservices and monolithic systems, design secure and efficient REST APIs, optimize relational databases, and build maintainable software capable of handling real-world business workloads. I have extensive experience developing ERP systems, POS solutions, inventory management, accounting platforms, and SaaS applications with offline-first synchronization architectures.
            </p>
            <p className="text-lg text-justify text-gray-700 leading-relaxed mb-6">
              Beyond backend development, I build modern, responsive web applications with Angular and cross-platform mobile applications with Ionic, delivering seamless end-to-end solutions from architecture to deployment. I emphasize clean architecture, maintainable code, performance, security, and long-term scalability.
            </p>
            <p className="text-lg text-justify text-gray-700 leading-relaxed mb-6">
              I continuously invest in expanding my expertise in cloud technologies, distributed systems, and modern software architecture while mentoring teammates, sharing knowledge, and adopting engineering best practices that enable teams to deliver reliable, production-ready software.
            </p>

            {/* <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-blue-600 transition-colors">
                  {profile.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href={`tel:${profile.phone}`} className="hover:text-blue-600 transition-colors">
                  {profile.phone}
                </a>
              </div>
            </div> */}

            <div className="flex gap-4 mt-8 text-center">
              {profile.github_url && (
                <a
                  href={profile.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
              {profile.linkedin_url && (
                <a
                  href={profile.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-5 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Name</span>
                <span className="text-gray-900">{profile.name}</span>
              </div>
              <div className="flex justify-between items-center py-5 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Role</span>
                <span className="text-gray-900">{profile.title}</span>
              </div>
              <div className="flex justify-between items-center py-5 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Specialty</span>
                <span className="text-gray-900">Java & Spring Boot</span>
              </div>
              <div className="flex justify-between items-center py-5 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Location</span>
                <span className="text-gray-900">{profile.location}</span>
              </div>
              <div className="flex justify-between items-center py-5 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Email</span>
                <span className="text-gray-900">{profile.email}</span>
              </div>
              <div className="flex justify-between items-center py-5">
                <span className="font-semibold text-gray-700">Mobile</span>
                <span className="text-gray-900">{profile.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
