import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { mergeClasses } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold md:text-5xl',
      h2: 'text-3xl font-bold md:text-4xl',
      h3: 'text-2xl font-bold md:text-3xl',
      h4: 'text-xl font-bold md:text-2xl',
      h5: 'text-lg font-bold md:text-xl',
      h6: 'text-base font-bold md:text-lg',
      subtitle1: 'text-xl',
      subtitle2: 'text-lg',
      body1: 'text-base',
      body2: 'text-sm',
      caption: 'text-xs',
      overline: 'text-xs uppercase',
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
});

type TypographyVariants = VariantProps<typeof typographyVariants>;

const ELEMENT_TAGS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
} as const;

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: keyof JSX.IntrinsicElements;
}

const Typography = React.forwardRef<HTMLElement | SVGElement, TypographyProps>(
  ({ variant = 'body1', className, as, children, ...props }, ref) => {
    const Comp = as || (variant && ELEMENT_TAGS[variant]) || 'p';

    return React.createElement(
      Comp,
      {
        className: mergeClasses(typographyVariants({ variant }), className),
        ref: ref,
        ...props,
      },
      children
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
