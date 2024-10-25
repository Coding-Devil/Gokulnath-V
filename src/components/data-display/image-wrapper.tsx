'use client';

import { useEffect, useState } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';

type ImageWrapperProps = ImageProps & {
  srcForDarkMode?: string | StaticImageData;
};

const ImageWrapper = ({
  srcForDarkMode,
  src,
  alt,
  ...props
}: ImageWrapperProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const finalSrc = srcForDarkMode || src;

  return <Image src={finalSrc!} alt={alt} {...props} />;
};

export default ImageWrapper;
