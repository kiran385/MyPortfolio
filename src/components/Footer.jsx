import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white py-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <p className="text-sm mt-2 text-gray-600">
              <span className="text-sm text-gray-600">Copyright</span>  © {new Date().getFullYear()} 
              <span className="text-sm text-gray-600 font-bold"> Kiran Baraiya </span> 
              <span className="text-sm text-gray-600">All Rights Reserved</span>
              </p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/kiran385" className="w-10 h-10 bg-[#F8F8F8] text-gray-600 hover:text-black rounded-full flex items-center justify-center transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kiran-baraiya-837562268" className="w-10 h-10 bg-[#F8F8F8] text-gray-600 hover:text-black rounded-full flex items-center justify-center transition-colors">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;