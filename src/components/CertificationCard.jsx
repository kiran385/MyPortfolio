import { FiCalendar, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CertificationCard = ({ certification }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-8 border border-gray-100"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-6">
        {certification.logo && (
          <div className="w-16 h-16 bg-[#F8F8F8] rounded-2xl p-3 mr-4 flex items-center justify-center">
            <img 
              src={certification.logo} 
              alt={`${certification.name} logo`} 
              className="w-full h-full object-contain" 
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-900">{certification.name}</h3>
          <p className="text-gray-600 mt-1">{certification.issuer}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <FiCalendar className="mr-2" />
          <span>{certification.date}</span>
        </div>
      </div>
      {certification.link && (
        <a 
          href={certification.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-gray-600 hover:text-black transition-colors"
        >
          <FiExternalLink /> View Certificate
        </a>
      )}
    </motion.div>
  );
};

export default CertificationCard;