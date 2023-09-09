import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ForwardedRef } from 'react';
import { vi } from 'vitest';

import { setupPostLoginUserHandlers } from '~api/session/msw/postLoginUserHandlers';

import { renderWithProviders } from '~lib/test/renderWithProviders';

import Login from './index';

vi.mock('~components/recaptcha', () => {
  interface RecaptchaProps {
    sitekey?: string;
    onChange?: (token: string | null) => void;
  }

  interface RecaptchaRef {
    reset(): void;
  }

  const ReCAPTCHA = React.forwardRef<HTMLInputElement, RecaptchaProps>(
    ({ onChange, ...props }, ref) => {
      const reset = vi.fn();

      React.useImperativeHandle(ref as ForwardedRef<RecaptchaRef>, () => ({
        reset,
        onChange: (value: string) => onChange?.(value),
      }));

      return (
        <input
          ref={ref}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        />
      );
    },
  );

  return { ReCAPTCHA };
});

describe('Login', () => {
  beforeEach(() => {
    setupPostLoginUserHandlers();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders login form ', () => {
    renderWithProviders(<Login />);

    const emailInput = screen.getByLabelText(/e-mail/i);
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByLabelText(/senha/i);
    expect(passwordInput).toBeInTheDocument();
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('calls login submit and redirect to home', async () => {
    renderWithProviders(<Login />);

    const emailInput = screen.getByLabelText(/e-mail/i);
    const passswordInput = screen.getByLabelText(/senha/i);
    const captchaInput = screen.getByTestId('login-captcha');
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passswordInput, { target: { value: '12345678' } });
    fireEvent.change(captchaInput, { target: { value: 'fake-captcha-token' } });

    await userEvent.click(loginButton);

    expect(window.location.pathname).toBe('/home');
  });

  test('render validation error message when data form is invalid', async () => {
    renderWithProviders(<Login />);

    const loginButton = screen.getByRole('button', { name: /login/i });
    await userEvent.click(loginButton);

    const emailMessageError = screen.getByText('Informe um e-mail válido');
    const passordMessageError = screen.getByText('Informe uma senha válida');
    const captchaMessageError = screen.getByText('Selecione o reCaptcha');

    expect(emailMessageError).toBeInTheDocument();
    expect(passordMessageError).toBeInTheDocument();
    expect(captchaMessageError).toBeInTheDocument();

    expect(window.location.pathname).toBe('/');
  });
});
