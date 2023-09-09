import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '~api/axios-config';
import { sessionKeys } from '~api/session/session-keys';
import { UserLogin, UserSession } from '~models/user';

export const useLoginMutation = () =>
  useMutation({
    mutationKey: sessionKeys.mutation.login(),
    mutationFn: (user: UserLogin) =>
      axiosInstance.post<UserSession>('/login', user),
  });
