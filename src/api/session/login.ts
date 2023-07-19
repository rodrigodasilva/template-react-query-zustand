import { useMutation } from '@tanstack/react-query';

import { UserLogin } from '~shared/interfaces/user';

import { baseApi } from '../base-api';
import { sessionKeys } from './session-keys';

export const useLogin = () =>
  useMutation({
    mutationKey: sessionKeys.mutation.login(),
    mutationFn: (user: UserLogin) => baseApi.post('/posts', user),
  });
