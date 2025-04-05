import EducationCard from '../components/EducationCard';
import PageTransition from '../components/PageTransition';

const Education = () => {
  const educationHistory = [
    {
      id: 1,
      degree: "Bachelor of Technology (Information Technology)",
      institution: "Charotar University of Science and Technology",
      logo: 'https://colleges18.s3.ap-south-1.amazonaws.com/Charotar_University_of_Science_and_Technology_CHARUSAT_Anand_logo_jpg_eb45ac6cc5.webp',
      duration: "2022 - 2026",
      location: "Anand, Gujarat, India",
      percentage: "9.6"
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Jawahar Navodaya Vidyalaya, Bhavnagar",
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNLDV-7TBpy9BgCZG7njcRyvCv7tFUtvSvg&s',
      duration: "2022",
      location: "Bhavnagar, Gujarat, India",
      percentage: "92.2%"
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Jawahar Navodaya Vidyalaya, Bhavnagar",
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNLDV-7TBpy9BgCZG7njcRyvCv7tFUtvSvg&s',
      duration: "2020",
      location: "Bhavnagar, Gujarat, India",
      percentage: "89.8%"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F8F8F8] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Academic Background
            </h1>
          </div>
          
          <div className="space-y-8">
            {educationHistory.map(education => (
              <EducationCard key={education.id} education={education} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;