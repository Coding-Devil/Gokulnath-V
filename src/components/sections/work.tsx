import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const WorkSection = () => {
  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4 ">
        <div className="self-center">
          <Tag label="Work" className="text-xl font-bold px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-black shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        </div>
        <Typography variant="subtitle2" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
};

export default WorkSection;