import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card'; // Ensure this import is correct

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
  liveDemo?: string; // Make it optional with '?'
  githubUrl?: string; // Make it optional with '?'
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  layoutType = 'default',
  liveDemo, // Add this
  githubUrl, // Add this
}: ProjectDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      {/* Image Section */}
      <div
        className={mergeClasses(
          'flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-slate-900 max-md:rounded-t-xl md:w-1/2 lg:p-12',
          layoutType === 'default'
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md:border-l'
        )}
      >
        <Link noCustomization href={url} externalLink>
          <Image
            src={previewImage}
            alt={`${name} preview`}
            className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>

      {/* Content Section */}
      <div
        className={mergeClasses(
          'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
          layoutType === 'default' ? '' : 'md:order-first'
        )}
      >
        <Typography variant="subtitle1" className="font-bold text-yellow-400">
          {name}
        </Typography>
        <Typography>{description}</Typography>
        <div className="flex flex-wrap gap-2 text-pink-400">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>
        {/* Live and GitHub Links */}
        <div className="flex gap-4">
          {liveDemo && ( // Only render if liveDemo URL exists
            <Link
              href={liveDemo}
              noCustomization
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-slate-100"
              externalLink
            >
              <span className="flex items-center gap-2">
                <ExternalLink />
                Live
              </span>
            </Link>
          )}
          {githubUrl && ( // Only render if githubUrl exists
            <Link
              href={githubUrl}
              noCustomization
              className="self-start text-green-400 rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-green-900"
              externalLink
            >
              <span className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.805 1.305 3.49.997.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.217.694.825.576C20.565 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </span>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetails;
