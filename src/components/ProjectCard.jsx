import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl overflow-hidden border border-gray-100"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-[#F8F8F8] text-gray-600 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <FiGithub /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;