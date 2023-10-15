import { createSlice } from '@reduxjs/toolkit';
const defaultNotes = [
  {
    id: 1,
    title: "Feedbacks",
    content: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
    lastUpdate: "5 days ago",
  },
  {
      id: 2,
      title: "Weekly Task",
      content: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      lastUpdate: "2 weeks ago",
  },
  {
    id: 3,
      title: "Lyrics",
      content: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      lastUpdate: "3 weeks ago",
  },
  {
    id: 4,
      title: "Full stack",
      content: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      lastUpdate: "3 weeks ago",
  },
  {
    id: 5,
    title: "React",
    content: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
    lastUpdate: "5 weeks ago",
  },
  {
    id: 6,
    title: "Node",
    content: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
    lastUpdate: "4 weeks ago",
  },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState: { notes: defaultNotes },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    editNote: (state, action) => {
        const { id, title, content } = action.payload;
        const noteToEdit = state.notes.find((note) => note.id === id);
        if (noteToEdit) {
          noteToEdit.title = title;
          noteToEdit.content = content;
          noteToEdit.lastUpdate = '';
        }
      },
      
    deleteNote: (state, action) => {
      const noteId = action.payload;
      state.notes = state.notes.filter((note) => note.id !== noteId);
    },
  },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
