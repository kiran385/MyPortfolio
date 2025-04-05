import { FiAward, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AchievementCard = ({ achievement }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-8 border border-gray-100"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start">
        <div className="w-12 h-12 bg-[#F8F8F8] rounded-2xl flex items-center justify-center mr-4">
          <FiAward size={24} className="text-gray-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <FiCalendar className="mr-2" />
            <span>{achievement.date}</span>
          </div>
          <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;