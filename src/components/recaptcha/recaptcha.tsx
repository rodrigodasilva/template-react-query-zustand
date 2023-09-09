import React from 'react';
import ReCAPTCHA, { ReCAPTCHAProps } from 'react-google-recaptcha';

import { cn } from '~utils/classnames';

const CustomReCAPTCHA = React.forwardRef<ReCAPTCHA, ReCAPTCHAProps>(
  ({ className, ...props }, ref) => (
    <div className={cn('relative h-[78px]', className)}>
      <div className="absolute left-0 top-0 h-full w-full text-center">
        <ReCAPTCHA ref={ref} className="inline-block" {...props} />
      </div>
    </div>
  ),
);
CustomReCAPTCHA.displayName = 'ReCAPTCHA';

export { CustomReCAPTCHA as ReCAPTCHA };
