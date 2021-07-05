import "./App.css";
import React, { useEffect, useState } from "react";

import axios from "axios";

import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  console.log("BEFORE EFFECT");

  useEffect(() => {
    console.log("EFFECT");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);

  console.log("render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: true,
    };
    setNotes([...notes, noteObject]);
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const showAllNotes = () => {
    setShowAll(!showAll);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <>
      <h1>Notes App</h1>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">Add note</button>
      </form>
      {notesToShow.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <button type="button" onClick={showAllNotes}>
        show {showAll ? "important" : "all"}
      </button>
    </>
  );
};

export default App;
