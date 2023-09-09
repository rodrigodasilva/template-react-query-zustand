import { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;

  return (
    <div className="flex h-max min-h-screen w-full flex-col items-center justify-center bg-background py-2">
      <div className="w-full max-w-[360px]">{children}</div>
    </div>
  );
}
