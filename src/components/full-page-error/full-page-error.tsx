import { Button } from '~components/ui/button';

type FullPageErrorProps = {
  error: any;
};

export function FullPageError(props: FullPageErrorProps) {
  const { error } = props;

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-semibold">Something went wrong:</h1>
      <ul className="text-md mb-8 text-muted-foreground">{error?.message}</ul>

      <Button asChild variant="secondary">
        <a href="/">Back to login</a>
      </Button>
    </div>
  );
}
