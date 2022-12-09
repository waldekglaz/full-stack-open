import axios from "axios";
import React from "react";
import { useState } from "react";

function InputForm({ data, setData }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleClick = (e) => {
    e.preventDefault();

    if (newName === "") {
      alert("Name cannot be blank!");
      return;
    }
    const isPresent = data.some((person) => {
      if (person.name.toLowerCase().trim() === newName.toLowerCase().trim()) {
        return true;
      }
      return false;
    });
    if (isPresent) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }

    const newPerson = { name: newName, number: newNumber };
    setData(data.concat(newPerson));
    axios.post("http://localhost:3001/persons", newPerson).then((response) => {
      console.log("New contact added");
    });
    setNewName("");
    setNewNumber("");
  };
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={handleClick}>
          add
        </button>
      </div>
    </form>
  );
}

export default InputForm;
