import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import { Button } from './button';

describe('<Button />', () => {
  it('renders the button with default props', () => {
    render(<Button>Hello</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Hello');
    expect(buttonElement).toHaveClass('button');
    expect(buttonElement).toHaveClass('button--primary');
    expect(buttonElement).toHaveClass('button--medium');
  });

  it('renders the button with variant prop equal "secondary"', () => {
    render(<Button variant="secondary">Click me</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('button--secondary');
    expect(buttonElement).not.toHaveClass('button--primary');
  });

  it('renders the button with specified size', () => {
    render(<Button size="large">Load More</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('button--large');
    expect(buttonElement).not.toHaveClass('button-medium');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
