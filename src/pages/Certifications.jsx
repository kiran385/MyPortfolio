import CertificationCard from '../components/CertificationCard';
import PageTransition from '../components/PageTransition';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      logo: "/src/assets/images/coursera.jpg",
      date: "March 2024",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/5Z5JJMDWYL4E"
    },
    {
      id: 2,
      name: "MongoDB Node.js Developer Path",
      issuer: "MongoDB University",
      logo: "/src/assets/images/mongodb.png",
      date: "January 2024",
      link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/08e3c127-a4ee-441a-b599-ee72709d4376-22it060-kiranbhai-baraiya-a3a25033-e861-49a2-97ed-c7bc3fd49c8d-certificate.pdf"
    },
    {
      id: 3,
      name: "Operating System Fundamentals",
      issuer: "NPTEL",
      logo: "/src/assets/images/nptel.png",
      date: "November 2024",
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs108/Course/NPTEL24CS108S56300004303842360.pdf"
    },
    {
      id: 4,
      name: "Database Management System",
      issuer: "NPTEL",
      logo: "/src/assets/images/nptel.png",
      date: "October 2023",
      link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs79/Course/NPTEL23CS79S3445026110013359.pdf"
    },
    {
      id: 5,
      name: "Data Structures and Algorithms using Java",
      issuer: "NPTEL",
      logo: "/src/assets/images/nptel.png",
      date: "November 2023",
      link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs85/Course/NPTEL23CS85S4311009520051880.pdf"
    },
    {
      id: 6,
      name: "Design and Analysis of Algorithms",
      issuer: "NPTEL",
      logo: "/src/assets/images/nptel.png",
      date: "April 2024",
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs23/Course/NPTEL24CS23S54470017230014005.pdf"
    },
    {
      id: 7,
      name: "Windows Forensics with Belkasoft",
      issuer: "Belkasoft",
      logo: "/src/assets/images/belkasoft.png",
      date: "February 2025",
      link: "https://belkasoft.thinkific.com/certificates/qaib4jsvaz"
    },
    {
      id: 8,
      name: "Beyond the Basics: Mastering Advanced Digital Forensics Techniques",
      issuer: "Belkasoft",
      logo: "/src/assets/images/belkasoft.png",
      date: "February 2025",
      link: "https://belkasoft.thinkific.com/certificates/jwk3uplgzn"
    },
    {
      id: 9,
      name: "Foundational C# with Microsoft",
      issuer: "freeCodeCamp",
      logo: "/src/assets/images/freecodecamp.png",
      date: "July 2024",
      link: "https://freecodecamp.org/certification/KiranBaraiya/foundational-c-sharp-with-microsoft"
    },
    {
      id: 10,
      name: "AWS Academy Graduate - AWS Academy Cloud Developing",
      issuer: "Amazon Web Services",
      logo: "/src/assets/images/aws.png",
      date: "March 2025",
      link: "https://www.credly.com/badges/63f13da8-c3c6-4541-8803-14b8c8aa9855/linked_in_profile"
    },
    {
      id: 11,
      name: "Java (Basic) Certificate",
      issuer: "HackerRank",
      logo: "/src/assets/images/hackerrank.png",
      date: "September 2023",
      link: "https://www.hackerrank.com/certificates/2b3737dcd1a4"
    },
    {
      id: 12,
      name: "SQL (Basic) Certificate",
      issuer: "HackerRank",
      logo: "/src/assets/images/hackerrank.png",
      date: "October 2023",
      link: "https://www.hackerrank.com/certificates/5c70cf9dd1fb"
    },
    {
      id: 13,
      name: "CSS (Basic) Certificate",
      issuer: "HackerRank",
      logo: "/src/assets/images/hackerrank.png",
      date: "October 2023",
      link: "https://www.hackerrank.com/certificates/bac0f66477d9"
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F8F8F8] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Certifications
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map(certification => (
              <CertificationCard key={certification.id} certification={certification} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Certifications;
