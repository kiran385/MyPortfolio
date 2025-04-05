import AchievementCard from '../components/AchievementCard';
import PageTransition from '../components/PageTransition';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Finalist - Odoo X Gujarat Vidyapith Hackathon 25",
      date: "March 2025",
      description: "Selected for final round of Odoo X Gujarat Vidyapith Hackathon 25."
    },
    {
      id: 2,
      title: "Finalist - Meditab X CHARUSAT Hackathon 24",
      date: "September 2024",
      description: "Selected for final round of Meditab X CHARUSAT Hackathon 24."
    },
    {
      id: 3,
      title: "Top 14% coders on LeetCode",
      date: "Ongoing",
      description: "Listed among top 14% of coders on LeetCode with max. contest rating of 1709."
    },
    {
      id: 4,
      title: "3 star coder on CodeChef",
      date: "Ongoing",
      description: "3 star coder on CodeChef with max. rating of 1621."
    },
    {
      id: 5,
      title: "Top 15 in the CodeClash",
      date: "March 2024",
      description: "Secured rank in top 15 in the CodeClash coding competition organized by CP Squad CHARUSAT. "
    },
    {
      id: 6,
      title: "Top 25 in Coder Arcade 1.0",
      date: "August 2023",
      description: "Secured rank in top 25 in Coder Arcade 1.0 organized by CP Squad CHARUSAT. "
    },
    {
      id: 7,
      title: "100 Marks in Mathematics(HSC)",
      date: "June 2022",
      description: "Scored 100 marks in Mathematics in the 12th CBSE Board Examination."
    },
    {
      id: 8,
      title: "100 Marks in Mathematics(SSC)",
      date: "March 2020",
      description: "Scored 100 marks in Mathematics in the 10th CBSE Board Examination."
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F8F8F8] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Achievements
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map(achievement => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Achievements;
