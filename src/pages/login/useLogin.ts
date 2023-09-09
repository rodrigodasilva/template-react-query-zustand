import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

import { useLoginMutation } from '~api/session/login';
import { addUser } from '~store/session';
import { encryptPassword } from '~services';

export const formSchemaValidation = z.object({
  email: z.string().email({ message: 'Informe um e-mail válido' }).nonempty(),
  password: z.string().min(6, { message: 'Informe uma senha válida' }),
  captcha: z
    .string({
      required_error: 'Selecione o reCaptcha',
      invalid_type_error: 'Selecione o reCaptcha',
    })
    .nonempty({ message: 'Selecione o reCaptcha' }),
});

export type FormValues = z.infer<typeof formSchemaValidation>;

export const defaultFormValues: Partial<FormValues> = {
  email: '',
  password: '',
  captcha: '',
};

export function useLogin() {
  const loginMutation = useLoginMutation();
  const navigate = useNavigate();

  function handleSubmit(data: FormValues) {
    const password = encryptPassword(data?.password);
    const user = {
      ...data,
      password,
    };

    loginMutation.mutate(user, {
      onSuccess: (response) => {
        addUser(response.data);
        navigate('/home');
      },
    });
  }

  return {
    handleSubmit,
    isLoading: loginMutation.isLoading,
  };
}
