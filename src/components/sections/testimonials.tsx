import { motion } from 'framer-motion';
import AchievementsLayout from '@/components/ui/layout-grid';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      name: "AWS Cloud Foundations",
      description: "Certified in designing distributed systems and architecting solutions using AWS services.",
      issueDate: "2023",
      logo: "/images/certifications/aws.png",
    },
    // Add more certifications...
  ];

  const achievements = [
    {
      id: 1,
      title: "Awarded 'Medal of Merit' for academic excellence throughout Engineering.",
      date: "2024"
    },
    {
      id: 2,
      title: "Second Best 'Student Project' among top Universities in Nokia (NBUC) 2024 for pioneering work in 6G network optimization.",
      date: "2024"
    },
    {
      id: 3,
      title: "Represented RNSIT in the GenAI hackathon organized by GLC and HP.",
      date: "Jan 2024"
    },
    {
      id: 4,
      title: "Represented RNSIT in the Samsung SSIR Hackathon.",
      date: "Aug 2024"
    },
    {
      id: 5,
      title: "Consistently recognised 'Student of the Year' in High School for excelling in sports, academics and leadership.",
      date: "2020-2022"
    }
  ];

  return (
    <Container id="certifications" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="self-center">
          <Tag label="Certifications & Achievements" className="text-lg font-semibold px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-black shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        </div>
        <Typography variant="subtitle2" className="max-w-xl text-center">
          Professional milestones and recognitions
        </Typography>
      </div>

      <AchievementsLayout 
        certifications={certifications} 
        achievements={achievements} 
      />
    </Container>
  );
};

export default CertificationsSection;
