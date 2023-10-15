import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editNote, deleteNote } from '../redux/notesSlice';

function Noteslist() {
  const notes = useSelector(state => state.notes.notes);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(null);
  const [editedNote, setEditedNote] = useState({ id: '', title: '', content: '' });

  const handleEditClick = (note) => {
    setEditMode(note.id);
    setEditedNote({
      id: note.id,
      title: note.title,
      content: note.content,
    });
  };

  const handleEditCancel = () => {
    setEditMode(null);
    setEditedNote({ id: '', title: '', content: '' });
  };

  const handleEditSave = (noteId) => {
    dispatch(editNote({
      id: noteId,
      title: editedNote.title,
      content: editedNote.content,
      lastUpdate: '',
    }));
    setEditMode(null);
    setEditedNote({ id: '', title: '', content: '' });
  };
  return (
    <div className="container">
      <h3 className="mb-3 notes">
        <span>
          <i className="fa-solid fa-file-lines"></i>
        </span>
        Notes
      </h3>
      <p className="mb-3 notes">Recently Viewed</p>
      <div className="row noteslist">
        {notes.map((note) => (
          <div className="card mx-2 w-50" key={note.id} style={{ height: '250px' }}>
            <div className="card-body">
              {editMode === note.id ? (
                <div>
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={editedNote.title}
                    onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}/>
                  <textarea
                    className="form-control mb-2"
                    rows="4"
                    value={editedNote.content}
                    onChange={(e) => setEditedNote({ ...editedNote, content: e.target.value })}></textarea>
                  <button
                    className="btn btn-success btn-sm mr-2"
                    onClick={() => handleEditSave(note.id)}>
                    Save
                  </button>
                  <button
                    className="btn btn-danger btn-sm mr-2"
                    onClick={handleEditCancel}>
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <h5 className="card-title">
                    {note.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                      <i
                        className="fa-solid fa-pencil mx-2"
                        onClick={() => handleEditClick(note)}></i>
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => dispatch(deleteNote(note.id))}></i>
                    </span>
                  </h5>
                  <p className="card-text">{note.content}</p>
                </div>
              )}
              <div className="card-text update">{note.lastUpdate}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noteslist;
