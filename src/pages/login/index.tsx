import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import {
  ButtonGoogleLogin,
  GoogleOAuthProvider,
} from '~components/button-login';
import { ReCAPTCHA } from '~components/recaptcha';
import { Button } from '~components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~components/ui/form';
import { Input } from '~components/ui/input';
import { Separator } from '~components/ui/separator';
import { Spinner } from '~components/ui/spinner';

import { ENV } from '~constants/ENV';

import { AuthLayout } from '~pages/_layouts/auth-layout';

import {
  useLogin,
  FormValues,
  defaultFormValues,
  formSchemaValidation,
} from './useLogin';

export default function Login() {
  const { isLoading, handleSubmit } = useLogin();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchemaValidation),
    defaultValues: defaultFormValues,
  });

  function onSuccessGoogleResponse(credentialReponse: any) {
    console.log(credentialReponse);
  }

  return (
    <AuthLayout>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: joao@empresa.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input placeholder="*******" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-4 flex justify-between gap-2 align-middle">
                <Link to="/">
                  <span className="text-sm text-primary">Esqueci a senha</span>
                </Link>
                <Link to="/">
                  <span className="text-sm text-primary">Esqueci o e-mail</span>
                </Link>
              </div>

              <FormField
                control={form.control}
                name="captcha"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ReCAPTCHA
                        sitekey={ENV.CAPTCHA_SITE_KEY}
                        className="mt-4"
                        onChange={field.onChange}
                        data-testid="login-captcha"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button type="button" variant="secondary" className="w-2/4">
                Criar conta
              </Button>
              <Button
                type="submit"
                variant="default"
                className="w-2/4"
                disabled={isLoading}
              >
                {isLoading && <Spinner size="sm" className="mr-2" />}
                Login
              </Button>
            </CardFooter>
          </form>
        </Form>
        <div className="p-6 pt-0">
          <GoogleOAuthProvider clientId={ENV.GOOGLE_AUTH_CLIENT_ID}>
            <ButtonGoogleLogin onSuccess={onSuccessGoogleResponse} />
          </GoogleOAuthProvider>
        </div>
      </Card>
    </AuthLayout>
  );
}
