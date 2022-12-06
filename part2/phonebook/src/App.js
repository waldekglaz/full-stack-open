import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (newName === "") {
      alert("Name cannot be blank!");
      return;
    }
    const isPresent = persons.some((person) => {
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

    const newPerson = { name: newName };
    setPersons(persons.concat(newPerson));
    setNewName("");
    console.log(persons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={handleClick}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
