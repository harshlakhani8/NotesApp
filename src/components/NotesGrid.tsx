import { Note } from '../types';
import { NoteCard } from './NoteCard';

interface NotesGridProps {
  notes: Note[];
  allNotes: Note[];
  onEditNote: (note: Note) => void;
  onDeleteNote: (id: string) => void;
  onCreateNew: () => void;
}

export function NotesGrid({ notes, allNotes, onEditNote, onDeleteNote, onCreateNew }: NotesGridProps) {
  const getDuplicateCount = (note: Note) => {
    return allNotes.filter(n => n.title === note.title && n.category === note.category && n.id < note.id).length;
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-slate-200 px-8 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">
          {notes.length} {notes.length === 1 ? 'note' : 'notes'}
        </h2>
        <button
          onClick={onCreateNew}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          + New Note
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {notes.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-slate-500 text-lg font-medium">No notes here yet</p>
              <p className="text-slate-400 text-sm">Create your first note to get started</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map(note => (
              <NoteCard
                key={note.id}
                note={note}
                duplicateCount={getDuplicateCount(note)}
                onEdit={onEditNote}
                onDelete={onDeleteNote}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
