import { useState, useEffect, useCallback } from 'react';
import { Note, CategoryFilter } from '../types';

const STORAGE_KEY = 'notes_app_data';

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All Notes');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize notes from localStorage or public/notes.json
  useEffect(() => {
    const initializeNotes = async () => {
      setIsLoading(true);
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setNotes(JSON.parse(stored));
        } else {
          const response = await fetch('/notes.json');
          const data = await response.json();
          setNotes(data.notes);
        }
      } catch (error) {
        console.error('Error loading notes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeNotes();
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }
  }, [notes]);

  const filteredNotes = selectedCategory === 'All Notes'
    ? notes
    : notes.filter(note => note.category === selectedCategory);

  const addNote = useCallback((note: Omit<Note, 'id' | 'createdAt'>) => {
    const newNote: Note = {
      ...note,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setNotes(prev => [newNote, ...prev]);
    return newNote;
  }, []);

  const updateNote = useCallback((id: string, updates: Partial<Omit<Note, 'id' | 'createdAt'>>) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id ? { ...note, ...updates } : note
      )
    );
  }, []);

  const deleteNote = useCallback((id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  }, []);

  const getTitleCount = useCallback((title: string, category: CategoryFilter, excludeId?: string) => {
    return notes.filter(note =>
      note.title === title &&
      note.category === category &&
      note.id !== excludeId
    ).length;
  }, [notes]);

  return {
    notes: filteredNotes,
    allNotes: notes,
    selectedCategory,
    setSelectedCategory,
    addNote,
    updateNote,
    deleteNote,
    getTitleCount,
    isLoading,
  };
}
