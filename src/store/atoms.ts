import { atom } from 'jotai';

export interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export interface BioEntry {
  id: string;
  year: string;
  content: string;
}

export const worksAtom = atom<Work[]>([]);
export const bioAtom = atom<BioEntry[]>([]);
export const loadingAtom = atom<boolean>(false);
