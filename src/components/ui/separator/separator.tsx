import * as React from 'react';

import { cn } from '~utils/classnames';

type PrimitiveSeparatorProps = React.ComponentPropsWithoutRef<'div'>;
interface SeparatorProps extends PrimitiveSeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => {
    const ariaOrientation =
      orientation === 'vertical' ? orientation : undefined;
    const semanticProps = decorative
      ? { role: 'none' }
      : { 'aria-orientation': ariaOrientation, role: 'separator' };
    return (
      <div
        ref={ref}
        className={cn(
          'shrink-0 bg-border',
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
          className,
        )}
        data-orientation={orientation}
        {...semanticProps}
        {...props}
      />
    );
  },
);
Separator.displayName = 'Separator';

export { Separator };
