import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlice';

function Createnotes() {
  const dispatch = useDispatch();
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleAddNote = (e) => {
    e.preventDefault();
    if (noteTitle.trim() !== '' && noteContent.trim() !== '') {
      dispatch(
        addNote({
          id: Date.now(), 
          title: noteTitle,
          content: noteContent,
          lastUpdate:"Just now", 
        })
      );
      setNoteTitle('');
      setNoteContent('');
    }
    else {
      alert("Please enter both title and content for the note.");
    }
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Add a note</h2>
              <form onSubmit={handleAddNote}>
                <div className="form-group">
                  <label htmlFor="noteTitle"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="noteTitle"
                    placeholder="Title"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="noteContent"></label>
                  <textarea
                    className="form-control"
                    id="noteContent"
                    rows="4"
                    placeholder="Take a note..."
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add notes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createnotes;
