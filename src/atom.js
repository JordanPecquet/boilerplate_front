import { atom } from 'jotai';

export const userAtom = atom({
  username: '',
  email: '',
  id: '',
  token: '',
  isLoggedIn: false,
});
