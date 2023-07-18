import { addUser } from '~shared/store/session';

import { useLogin } from '../api/session-api';

export default function LoginPage() {
  const login = useLogin();

  function handleSignin() {
    const user = {
      name: 'rodrigo',
      email: 'ribeiro.rodrigo@gmail.com',
      token: 'fake-token',
    };

    login.mutate(user, {
      onSuccess: () => addUser(user),
      onError: (error) => console.log('error', error),
      onSettled: () => console.log('settled'),
    });
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <h1>Login page</h1>

        <button onClick={handleSignin} type="button">
          {login.isLoading ? '...loading' : 'login'}
        </button>
      </div>
    </div>
  );
}