import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~utils/classnames';

const spinnerVariants = cva(
  'inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
  {
    variants: {
      color: {
        default: '',
        primary: 'text-primary',
        destructive: 'text-destructive',
      },
      size: {
        default: 'h-6 w-6',
        sm: 'h-5 w-5',
        lg: 'h-8 w-8',
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'default',
    },
  },
);

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

function Spinner({ className, color, size }: SpinnerProps) {
  return (
    <div
      className={cn(spinnerVariants({ color, size, className }))}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
Spinner.displayName = 'Spinner';

export { Spinner };
