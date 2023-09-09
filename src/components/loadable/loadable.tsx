import { ElementType, Suspense } from 'react';

export function Loadable(Component: ElementType) {
  return function fn(props: any) {
    return (
      <Suspense fallback={<div>...loading</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
}
