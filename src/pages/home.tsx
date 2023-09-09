import { Button } from '~components/ui/button';
import { deleteToken, useCurrentUser } from '~store/session';

export default function HomePage() {
  const currentUser = useCurrentUser();

  // eslint-disable-next-line no-console
  console.log(currentUser);

  function handleLogout() {
    deleteToken();
  }

  return (
    <div className="p-10">
      <h1 className="mb-12 mt-4">Home page</h1>

      <Button onClick={handleLogout} type="button" variant="default">
        Sair
      </Button>
    </div>
  );
}
