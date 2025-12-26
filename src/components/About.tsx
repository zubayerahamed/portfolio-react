import { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { supabase, type Profile } from '../lib/supabase';

export default function About() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .maybeSingle();

    if (error) {
      console.error('Error fetching profile:', error);
      return;
    }

    if (data) {
      setProfile(data);
    } else {
      setProfile({
        id: '',
        name: 'Zubayer Ahamed',
        title: 'Full-Stack Software Developer',
        bio: '<b>Full-Stack Software Engineer with deep mastery of the Java ecosystem and Spring Boot, delivering high-performance, scalable enterprise systems</b>. I architect clean, resilient backend services, design secure and efficient REST APIs, and optimize databases for robust real-world workloads. While backend engineering is my core strength, I also work across modern frontend stacks to deliver cohesive, end-to-end solutions. I value clean code, strong engineering discipline, and system designs that scale long after delivery. I’m committed to elevating team performance through mentorship, knowledge sharing, and staying ahead of emerging technologies that drive competitive advantage.',
        email: 'zubayerahamed1990@gmail.com',
        phone: '+880 1748562164',
        location: 'Dhaka, Bangladesh',
        github_url: 'https://github.com/zubayerahamed',
        linkedin_url: 'https://linkedin.com/in/zubayerahamed',
        resume_url: '/resume.pdf',
        created_at: '',
        updated_at: '',
      });
    }
  };

  if (!profile) {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-12"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
            <p className="text-md text-justify text-gray-700 leading-relaxed mb-3">
              <b>Full-Stack Software Engineer with deep mastery of the Java ecosystem and Spring Boot, delivering high-performance, scalable enterprise systems.</b> I architect clean, resilient backend services, design secure and efficient REST APIs, and optimize databases for robust real-world workloads.
            </p>
            <p className="text-md text-justify text-gray-700 leading-relaxed mb-3">
              While backend engineering is my core strength, I also work across modern frontend stacks to deliver cohesive, end-to-end solutions. I value clean code, strong engineering discipline, and system designs that scale long after delivery.
            </p>
            <p className="text-md text-justify text-gray-700 leading-relaxed mb-6">
              I’m committed to elevating team performance through mentorship, knowledge sharing, and staying ahead of emerging technologies that drive competitive advantage.
            </p>

            <div className="space-y-4">

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
            </div>

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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Name</span>
                <span className="text-gray-900">{profile.name}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Role</span>
                <span className="text-gray-900">{profile.title}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Specialty</span>
                <span className="text-gray-900">Java & Spring Boot</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-semibold text-gray-700">Location</span>
                <span className="text-gray-900">{profile.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
