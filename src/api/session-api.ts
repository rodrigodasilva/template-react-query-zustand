import { useMutation } from '@tanstack/react-query';
import { baseApi } from './base-api';

interface User {
  name: string;
  email: string;
  token: string
}

const login = (user: User) => baseApi.post('/posts', user);

export const useLogin = () => 
useMutation({ 
  mutationKey: ['login'], 
  mutationFn: (user: User) => login(user),
});

