import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const EducationCard = ({ education }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-8 border border-gray-100"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-6">
        {education.logo && (
          <div className="w-16 h-16 bg-[#F8F8F8] rounded-2xl p-3 mr-4 flex items-center justify-center">
            <img 
              src={education.logo} 
              alt={`${education.institution} logo`} 
              className="w-full h-full object-contain" 
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-900">{education.degree}</h3>
          <p className="text-gray-600 mt-1">{education.institution}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <FiCalendar className="mr-2" />
          <span>{education.duration}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FiMapPin className="mr-2" />
          <span>{education.location}</span>
        </div>
        {education.percentage && (
          <p className="text-gray-600 pt-2">Percentage / CGPA: {education.percentage}</p>
        )}
      </div>
    </motion.div>
  );
};

export default EducationCard;