import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import { Button } from './button';

describe('Button', () => {
  test('renders button with default variant and size', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-primary');
    expect(buttonElement).toHaveClass('text-primary-foreground');
    expect(buttonElement).toHaveClass('h-9');
    expect(buttonElement).toHaveClass('px-4');
    expect(buttonElement).toHaveClass('py-2');
  });

  test('renders button with specified variant and size', () => {
    render(
      <Button variant="secondary" size="lg">
        Click me
      </Button>,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('bg-secondary');
    expect(buttonElement).toHaveClass('text-secondary-foreground');
    expect(buttonElement).toHaveClass('h-10');
    expect(buttonElement).toHaveClass('px-8');
  });

  test('calls onClick callback when button is clicked', () => {
    const onClickMock = vi.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
