import { useState } from 'react';
import { Note } from './types';
import { useNotes } from './hooks/useNotes';
import { Sidebar } from './components/Sidebar';
import { NotesGrid } from './components/NotesGrid';
import { NoteModal } from './components/NoteModal';
import { DeleteConfirmation } from './components/DeleteConfirmation';

function App() {
  const {
    notes,
    allNotes,
    selectedCategory,
    setSelectedCategory,
    addNote,
    updateNote,
    deleteNote,
    getTitleCount,
  } = useNotes();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{ isOpen: boolean; noteId: string; title: string }>({
    isOpen: false,
    noteId: '',
    title: '',
  });

  const handleCreateNew = () => {
    setEditingNote(null);
    setIsModalOpen(true);
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleSaveNote = (noteData: Omit<Note, 'id' | 'createdAt'>) => {
    if (editingNote) {
      updateNote(editingNote.id, noteData);
    } else {
      addNote(noteData);
    }
  };

  const handleDeleteClick = (id: string, title: string) => {
    setDeleteConfirmation({ isOpen: true, noteId: id, title });
  };

  const handleConfirmDelete = () => {
    deleteNote(deleteConfirmation.noteId);
    setDeleteConfirmation({ isOpen: false, noteId: '', title: '' });
  };

  const duplicateCount = editingNote
    ? getTitleCount(editingNote.title, editingNote.category as any, editingNote.id)
    : 0;

  return (
    <div className="flex h-screen bg-white">
      <Sidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <NotesGrid
        notes={notes}
        allNotes={allNotes}
        onEditNote={handleEditNote}
        onDeleteNote={handleDeleteClick}
        onCreateNew={handleCreateNew}
      />

      <NoteModal
        isOpen={isModalOpen}
        note={editingNote}
        onClose={() => {
          setIsModalOpen(false);
          setEditingNote(null);
        }}
        onSave={handleSaveNote}
        duplicateCount={duplicateCount}
      />

      <DeleteConfirmation
        isOpen={deleteConfirmation.isOpen}
        title={deleteConfirmation.title}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteConfirmation({ isOpen: false, noteId: '', title: '' })}
      />
    </div>
  );
}

export default App;
