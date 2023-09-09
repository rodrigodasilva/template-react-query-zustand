import * as React from 'react';

import { cn } from '~utils/classnames';

type PrimitiveLabelProps = React.ComponentPropsWithoutRef<'label'>;
interface LabelProps extends PrimitiveLabelProps {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, htmlFor, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'flex text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  ),
);
Label.displayName = 'Label';

export { Label };
