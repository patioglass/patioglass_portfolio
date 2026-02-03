import { atom } from 'jotai';

export interface WorkLink {
  label: string;
  url: string;
}

export interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  links?: WorkLink[];
  tags?: string[];
  isCommission?: boolean; // 依頼物かどうか
  date?: string; // 制作日（YYYY-MM-DD形式）
}

export interface BioEntry {
  id: string;
  year: string;
  content: string;
}

// タグの選択肢
export const tagOptions = ['すべて', '絵・漫画', '音楽', 'プログラミング', 'その他'] as const;

export const worksAtom = atom<Work[]>([]);
export const bioAtom = atom<BioEntry[]>([]);
export const loadingAtom = atom<boolean>(false);
export const selectedTagAtom = atom<string>('すべて');
export const showCommissionOnlyAtom = atom<boolean>(false); // 依頼物のみ表示

// ローカルJSONからWorksデータを取得する関数
// データはGitHub Actionsで定期的に更新される
export const fetchWorks = async (): Promise<Work[]> => {
  const response = await fetch('/data/works.json');
  const data = await response.json();
  return data;
};
