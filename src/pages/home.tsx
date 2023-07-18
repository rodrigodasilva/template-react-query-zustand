import { deleteToken } from '~shared/store/session';

export default function HomePage() {
  function handleLogout() {
    deleteToken();
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <h1>Home page</h1>

        <button onClick={handleLogout} type="button">
          Sair
        </button>
      </div>
    </div>
  );
}
