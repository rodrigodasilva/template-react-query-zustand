import {
  GoogleOAuthProvider,
  useGoogleLogin,
  TokenResponse,
} from '@react-oauth/google';

import { GoogleIcon } from '~components/icons';
import { cn } from '~utils/classnames';

interface ButtonGoogleLoginProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onSuccess: (
    credentialResponse: Omit<
      TokenResponse,
      'error' | 'error_description' | 'error_uri'
    >,
  ) => void;
  onError?: () => void;
}

function ButtonGoogleLogin({
  onSuccess,
  onError,
  className,
  ...props
}: ButtonGoogleLoginProps) {
  const googleLogin = useGoogleLogin({
    onSuccess,
    onError,
  });

  return (
    <button
      type="button"
      className={cn(
        'flex w-full justify-center gap-2 rounded-md border border-slate-200 px-4 py-2 align-middle text-sm font-medium text-slate-700',
        className,
      )}
      onClick={() => googleLogin()}
      {...props}
    >
      <GoogleIcon className="h-6 w-6" />
      <span>Entrar com Google</span>
    </button>
  );
}

ButtonGoogleLogin.displayName = 'ButtonGoogleLogin';

export { ButtonGoogleLogin, GoogleOAuthProvider };
