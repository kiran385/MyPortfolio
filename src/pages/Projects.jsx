import ProjectCard from '../components/ProjectCard';
import PageTransition from '../components/PageTransition';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Natural Farming Product Marketplace",
      description: "Developed an online marketplace for natural farming products with product authenticity verification, and AI-powered price prediction to optimize customer decisions and pricing.",
      image: "/src/assets/images/KrushiSetu.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS","Python"],
      githubLink: "https://github.com/Dishang18/KrushiSetu_DishangPatel_13.git"
    },
    {
      id: 2,
      title: "Alumni Association Platform",
      description: "Developed a comprehensive Alumni Association platform for an institute, featuring web applications for alumni registration, networking, interactions, job postings, donations, and event management.",
      image: "/src/assets/images/Alumni.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/Dharm2804/Alumni_connection"
    },
    {
      id: 3,
      title: "Children Care WebApp ",
      description: "Created a web application for childcare providers and parents, streamlining administrative tasks, enhancing communication, and fostering a nurturing environment for children.",
      image: "/src/assets/images/ChildrenCare.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/kiran385/ChildCare_SGP_Project"
    },
    {
      id: 4,
      title: "Predictive Machine Maintenance ",
      description: "Developed a machine learning system to predict machine maintenance needs and identify potential failures, improving predictive accuracy and minimizing unplanned downtime in industrial machines.",
      image: "/src/assets/images/Machine.jpg",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Flask"],
      githubLink: "https://github.com/kiran385/Predictive-Machine-Maintenance"
    },
    {
      id: 5,
      title: "Aptitude Preparation Application",
      description: "Developed an aptitude app using Flutter that offers an aptitude quizzes to enhance problem-solving skills. The app tracks score history and displays progress through interactive charts, providing users with valuable insights.",
      image: "/src/assets/images/Aptitude.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "Flutter Charts"],
      githubLink: "https://github.com/kiran385/FlutterProject"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F8F8F8] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;