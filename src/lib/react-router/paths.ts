export const PATH_PAGE = {
  root: '/',
  login: '/login',
  register: '/register',
  home: '/home',
  profile: {
    root: (username: string) => `/profile/${username}`,
    favorites: (username: string) => `/profile/${username}/favorites`,
  },
  page404: '/404',
};
