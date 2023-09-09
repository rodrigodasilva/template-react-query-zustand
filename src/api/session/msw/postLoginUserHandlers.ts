import { rest } from 'msw';

import { ENV } from '~constants/ENV';
import { server } from '~lib/test/server';

const postLoginUserHandlers = [
  rest.post(`${ENV.API_URL}/login`, (_, res, ctx) => {
    const user = {
      token: 'fake-token',
      token_old: 'fake-token-old',
      companiActive: true,
      info: {
        id: 'fake-id',
        name: 'John Doe',
        email: 'john.dow@example.com',
        photo: '',
        phone: '',
        extensionNumber: '',
        companies: [],
        services: [],
        automaticLogin: true,
        isChat: false,
        runSocket: true,
        isTwoFactore: false,
        firstQrCode: false,
        isActive: true,
        countries: [],
        isDialer: false,
      },
      actions: [],
    };

    return res(ctx.status(200), ctx.json(user));
  }),
];

export const setupPostLoginUserHandlers = () => {
  server.use(...postLoginUserHandlers);
};
