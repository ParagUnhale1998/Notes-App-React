import { useState, useEffect } from "react";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Note from './components/Note';
import AllNotes from "./components/AllNotes";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Load items from local storage on component mount
    const storedItems = localStorage.getItem("todoItems");
    if (storedItems) {
      setNotes(JSON.parse(storedItems));
    }
  }, []);
  
  function addNote(newNote) {
    setNotes((prevNotes) => {
      const newItems = [...prevNotes, newNote];
      localStorage.setItem("todoItems", JSON.stringify(newItems));
      return newItems;
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      const newItems = prevNotes.filter((noteitem, index) => {
        return index !== id;
      });
      localStorage.setItem("todoItems", JSON.stringify(newItems));
      return newItems;
    });
  }

  return (
    <div className="container">
      <Header />
      <CreateArea onAdd={addNote} />
      <AllNotes notes={notes} onDelete={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
