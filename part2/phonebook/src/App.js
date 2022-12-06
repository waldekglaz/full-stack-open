import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchPerson, setSearchPerson] = useState("");
  const filteredData = persons.filter((el) => {
    //if no input the return the original
    if (searchPerson === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(searchPerson.toLowerCase());
    }
  });
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
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

    const newPerson = { name: newName, number: newNumber };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };
  const handleSearch = (e) => {
    setSearchPerson(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search <input onChange={handleSearch} value={searchPerson} />
      </div>
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
      <h2>Numbers</h2>
      {filteredData.map((person) => (
        <p key={person.name}>{`${person.name}: ${person.number}`}</p>
      ))}
    </div>
  );
};

export default App;
