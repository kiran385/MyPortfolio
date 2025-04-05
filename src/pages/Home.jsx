import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F8F8F8]">
        {/* Hero Section */}
        <section className="bg-[#F8F8F8] py-20 relative">
          <div className="page-container flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900"
              >
                Hello, I'm <span className="relative inline-block">
                  Kiran Baraiya
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E8F3DC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-serif italic text-gray-600 mb-8"
              >
                A passionate software developer crafting innovative digital experiences
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-6"
              >
                <Link to="/projects" className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300">
                  View My Projects
                </Link>
                <Link to="/about" className="px-6 py-3 text-gray-600 hover:text-black flex items-center gap-2 transition-colors">
                  About Me <FiArrowRight />
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                className="flex items-center gap-4 mt-8"
              >
                <a 
                  href="https://leetcode.com/u/kiran385" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F8F8F8] text-gray-600 hover:text-black rounded-full flex items-center justify-center transition-colors"
                >
                  <img 
                    src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png" 
                    alt="LeetCode" 
                    className="w-5 h-5"
                  />
                </a>
                <a 
                  href="https://www.codechef.com/users/kiran382005" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F8F8F8] text-gray-600 hover:text-black rounded-full flex items-center justify-center transition-colors"
                >
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdQ4CXvCSHFgNrLpu2lKVzj2eyL9j-HZXVw&s" 
                    alt="CodeChef" 
                    className="w-5 h-5"
                  />
                </a>
                <a 
                  href="https://www.hackerrank.com/profile/22it060" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F8F8F8] text-gray-600 hover:text-black rounded-full flex items-center justify-center transition-colors"
                >
                  <img 
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" 
                    alt="HackerRank" 
                    className="w-5 h-5"
                  />
                </a>
                <a 
                  href="https://github.com/kiran385" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F8F8F8] text-gray-600 hover:text-black rounded-full flex items-center justify-center transition-colors"
                >
                  <img 
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" 
                    alt="GitHub" 
                    className="w-5 h-5"
                  />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kiran-baraiya-837562268" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F8F8F8] text-gray-600 hover:text-black rounded-full flex items-center justify-center transition-colors"
                >
                  <img 
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" 
                    alt="LinkedIn" 
                    className="w-5 h-5"
                  />
                </a>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="md:w-1/2 flex justify-center relative"
            >
              <div className="relative w-full">
                <div className="relative rounded-2xl overflow-hidden aspect-square w-full max-w-[400px] mx-auto">
                  <img 
                    src="/src/assets/images/profile.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-10 bg-[#F8F8F8]">
          <div className="page-container">
            <h2 className="text-3xl font-bold text-gray-900 mb-16">
              My Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'C', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', color: 'text-[#00599C]' },
                { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', color: 'text-[#00599C]' },
                { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', color: 'text-[#007396]' },
                { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', color: 'text-[#3776AB]' },
                { name: 'C#', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg', color: 'text-[#239120]' },
                { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', color: 'text-[#F7DF1E]' },
                { name: 'ReactJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', color: 'text-[#61DAFB]' },
                { name: 'ExpressJS', icon: 'https://img.icons8.com/fluency/48/000000/node-js.png', color: 'text-[#000000]' },
                { name: 'NodeJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', color: 'text-[#339933]' },
                { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', color: 'text-[#47A248]' },
                { name: 'Redux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg', color: 'text-[#764ABC]' },
                { name: 'TailwindCSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', color: 'text-[#06B6D4]' },
                { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', color: 'text-[#E34F26]' },
                { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', color: 'text-[#1572B6]' },
                { name: 'Bootstrap', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg', color: 'text-[#7952B3]' },
                { name: 'Flutter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg', color: 'text-[#02569B]' },
                { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', color: 'text-[#FFCA28]' },
                { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg', color: 'text-[#4479A1]' },
                { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', color: 'text-[#4169E1]' },
                { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', color: 'text-[#F05032]' },
                { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', color: 'text-[#181717]' },
                { name: 'VS Code', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg', color: 'text-[#007ACC]' }
              ].map((skill) => (
                <motion.div 
                  key={skill.name}
                  className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-gray-800 text-sm font-medium text-center">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;