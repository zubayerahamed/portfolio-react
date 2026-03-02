import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-1">
            <div className="w-80 mx-auto overflow-hidden">
              <img
                src="/zubayer_ahamed.png"
                alt="Zubayer Ahamed"
                className="w-full h-auto"
              />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Zubayer Ahamed
          </h1>

          <p className="text-2xl sm:text-3xl text-gray-700 mb-4 font-medium">
            Full-Stack Software Developer
          </p>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Backend engineering expert leveraging Java and Spring Boot to
            deliver scalable architectures, clean APIs, and enterprise-grade
            solutions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-gray-200"
            >
              View Projects
            </a>
            {/* <a
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </a> */}
          </div>

          <div className="animate-bounce">
            <a
              href="#about"
              className="inline-block text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowDown className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
