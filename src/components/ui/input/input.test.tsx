import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import { Input } from './input';

describe('Button', () => {
  test('renders input component', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders input component with placeholder', () => {
    const placeholderText = 'Enter your name';
    render(<Input placeholder={placeholderText} />);
    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange callback when input value changes', () => {
    const onChangeMock = vi.fn();
    render(<Input onChange={onChangeMock} />);
    const inputElement = screen.getByRole('textbox');
    const inputValue = 'John Doe';
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
