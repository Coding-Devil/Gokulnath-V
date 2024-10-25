import * as React from 'react';
import * as DrawerPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerClose = DrawerPrimitive.Close;

const DrawerPortal = ({
  className,
  ...props
}: DrawerPrimitive.DialogPortalProps) => (
  <DrawerPrimitive.Portal className={mergeClasses(className)} {...props} />
);
DrawerPortal.displayName = DrawerPrimitive.Portal.displayName;

const drawerVariants = cva(
  'fixed z-50 shadow-2xl bg-transparent dark:bg-gray-800 ring-1 ring-black/10 transition ease-in-out duration-300',
  {
    variants: {
      side: {
        right: 'inset-y-0 right-0 h-full w-[280px] translate-x-full data-[state=open]:translate-x-0',
        left: 'inset-y-0 left-0 h-full w-[280px] -translate-x-full data-[state=open]:translate-x-0',
        top: 'inset-x-0 top-0 h-96 w-full -translate-y-full data-[state=open]:translate-y-0',
        bottom: 'inset-x-0 bottom-0 h-96 w-full translate-y-full data-[state=open]:translate-y-0',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerPrimitive.Overlay
      className={mergeClasses(
        'fixed inset-0 z-50 bg-black/40 opacity-0 transition-opacity duration-300 data-[state=open]:opacity-100',
        className
      )}
      {...props}
      ref={ref}
    />
    <DrawerPrimitive.Content
      ref={ref}
      className={mergeClasses(drawerVariants({ side }), className)}
      {...props}
    >
      <div className="bg-transparent/10 backdrop-blur-sm h-full w-full">
        {children}
      </div>
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerPortal,
};
