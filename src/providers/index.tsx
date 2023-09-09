import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { FullPageError } from '~components/full-page-error';
import { QueryClientProvider } from '~providers/query-client-provider';
import { Router } from '~providers/router-provider';

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
