import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {
  return (
    <Container className="animated-gradient gradient-border overflow-hidden" id="experience">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
        <Tag 
              label="Experience" 
              className="text-xl font-bold px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-black shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
        </div>
        <Typography variant="subtitle1" className="max-w-xl text-center">
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      {EXPERIENCES?.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
    </Container>
  );
};

export default ExperienceSection;
