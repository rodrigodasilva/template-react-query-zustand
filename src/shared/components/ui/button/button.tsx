import React from 'react';
import cc from 'classnames';

import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cc(['button', `button--${size}`, `button--${variant}`])}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
}
