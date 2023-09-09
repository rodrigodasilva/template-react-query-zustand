export interface UserLogin {
  email: string;
  password: string;
  captcha: string;
}

export interface UserSession {
  token: string;
  token_old: string;
  companiActive: boolean;
  info: {
    id: string;
    name: string;
    email: string;
    photo: string;
    phone: string;
    extensionNumber: string;
    automaticLogin: boolean;
    isChat: boolean;
    runSocket: boolean;
    isTwoFactore: boolean;
    firstQrCode: boolean;
    isActive: boolean;
    isDialer: boolean;
    companies: {
      id: string;
      name: string;
      timeZone: string;
    }[];
    services: {
      id: string;
      name: string;
    }[];
    countries: [
      {
        ddi: string;
        flags: [string];
        name: string;
      },
    ];
  };
  actions: [string];
}
