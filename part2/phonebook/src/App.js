import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const fetchPersons = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const handleAddPerson = (event) => {
    event.preventDefault();

    const isDuplicated = persons.some((person) => person.name === newName);

    if (isDuplicated) {
      alert(`The name ${newName} already exists`);
      setNewName("");
      setNewNumber("");
    } else if (newName !== "" && newNumber !== "") {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    } else {
      alert("Both fields are required");
    }
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterPerson = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>

      {!(persons.length > 0) ? null : (
        <Filter value={filter} handleFilterPerson={handleFilterPerson} />
      )}
      <h2>Add a new person</h2>
      <PersonForm
        handleAddPerson={handleAddPerson}
        newName={newName}
        handleChangeName={handleChangeName}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
}

export default App;
