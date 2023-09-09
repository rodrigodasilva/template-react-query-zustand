import { StateCreator, createStore, useStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { UserSession } from '~models/user';

type SessionState = {
  user: UserSession | null;
  addUser: (user: UserSession) => void;
  deleteUser: () => void;
};

const createSessionSlice: StateCreator<
  SessionState,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  SessionState
> = (set) => ({
  user: null,

  addUser: (user: UserSession) => {
    set({ user }, false, 'session/addUser');
  },

  deleteUser: () => {
    set({ user: null }, false, 'session/deleteUser');
  },
});

export const sessionStore = createStore<SessionState>()(
  persist(
    devtools(
      (...a) => ({
        ...createSessionSlice(...a),
      }),
      { name: 'Session Store' },
    ),
    {
      name: 'session',
      onRehydrateStorage: () => () => {
        // console.log(state);
      },
    },
  ),
);

export const useAuthToken = () =>
  useStore(sessionStore, (state) => state.user?.token);

export const useCurrentUser = () =>
  useStore(sessionStore, (state) => state.user);

export const addUser = (user: UserSession) =>
  sessionStore.getState().addUser(user);

export const deleteToken = () => sessionStore.getState().deleteUser();
