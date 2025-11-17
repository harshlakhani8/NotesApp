import { CategoryFilter } from '../types';

interface SidebarProps {
  selectedCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
}

const categories: CategoryFilter[] = ['All Notes', 'Work', 'Personal', 'Ideas'];

export function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">Notes</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200 text-xs text-slate-500">
        <p>Notes App v1.0</p>
      </div>
    </aside>
  );
}
