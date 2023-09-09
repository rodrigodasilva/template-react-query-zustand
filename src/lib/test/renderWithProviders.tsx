/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint import/no-extraneous-dependencies: ["off", {"devDependencies": false}] */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

export const renderWithProviders = (
  ui: React.ReactElement,
  { route = '/' } = {},
) => {
  window.history.pushState({}, 'Test page', route);
  const testQueryClient = createTestQueryClient();

  return {
    user: userEvent.setup(),
    ...render(
      <BrowserRouter>
        <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
      </BrowserRouter>,
    ),
  };
};
