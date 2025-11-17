import { Note } from '../types';
import { formatDate } from '../utils/date';

interface NoteCardProps {
  note: Note;
  duplicateCount?: number;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

export function NoteCard({ note, duplicateCount = 0, onEdit, onDelete }: NoteCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">{note.title}</h3>
            {duplicateCount > 0 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                #{duplicateCount + 1}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(note.id);
          }}
          className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <p className="text-slate-600 text-sm line-clamp-3 mb-4">{note.description}</p>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="px-2 py-1 bg-slate-100 rounded text-slate-700 font-medium">{note.category}</span>
        <span>{formatDate(note.createdAt)}</span>
      </div>

      <button
        onClick={() => onEdit(note)}
        className="mt-4 w-full py-2 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors font-medium"
      >
        Edit
      </button>
    </div>
  );
}
