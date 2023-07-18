import { StateCreator, createStore, useStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface User {
  name: string;
  email: string;
  token: string
}

type SessionState = {
  user: User | null;
  addUser: (user: User) => void;
  deleteUser: () => void;
};

const createSessionSlice: StateCreator<
  SessionState,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  SessionState
> = (set) => ({
  user: null,

  addUser: (user: User) => {
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
      onRehydrateStorage: () => (state) => {
        console.log(state);        
      },
    },
  ),
);

export const useAuthToken = () => useStore(sessionStore, (state) => state.user?.token);

export const useCurrentUser = () => useStore(sessionStore, (state) => state.user);

export const addUser = (user: User) => sessionStore.getState().addUser(user);

export const deleteToken = () => sessionStore.getState().deleteUser();
