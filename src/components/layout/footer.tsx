import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
// import { EXTERNAL_LINKS } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body2">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} | Built with ❤️️ by Gokul
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
