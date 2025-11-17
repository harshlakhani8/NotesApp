export interface Note {
  id: string;
  title: string;
  description: string;
  category: 'All Notes' | 'Work' | 'Personal' | 'Ideas';
  createdAt: string;
}

export type CategoryFilter = 'All Notes' | 'Work' | 'Personal' | 'Ideas';
