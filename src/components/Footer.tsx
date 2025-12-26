import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Zubayer Ahamed</h3>
            <p className="text-gray-400 leading-relaxed">
              Fullstack Software Engineer specializing in Java and Spring Boot.
              Building robust enterprise solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Dhaka, Bangladesh</li>
              <li>
                <a href="mailto:zubayer@example.com" className="hover:text-white transition-colors">
                  zubayerahamed1990@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+8801234567890" className="hover:text-white transition-colors">
                  +880 1748562164
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and <Code2 className="w-4 h-4 text-blue-500" />
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} Zubayer Ahamed. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}