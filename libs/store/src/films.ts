import { atom } from 'jotai';

interface Film {
  key: string;
  content: string;
}
export const filmAtom = atom<Array<Film>>([]);
