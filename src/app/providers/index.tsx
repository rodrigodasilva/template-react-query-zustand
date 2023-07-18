import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { FullPageError } from '~shared/components/full-page-error';
import { QueryClientProvider } from './query-client-provider';
import { Router } from './router-provider';

export function Provider() {
  return (
    <ErrorBoundary FallbackComponent={FullPageError}>
      <QueryClientProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
