import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import InputForm from "./components/InputForm";
import PersonsList from "./components/PersonsList";

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: "Arto Hellas", number: "040-123456", id: 1 },
  //   { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  //   { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  //   { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  // ]);
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);
  const [searchPerson, setSearchPerson] = useState("");
  const handleSearch = (e) => {
    setSearchPerson(e.target.value);
  };

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

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar handleSearch={handleSearch} searchPerson={searchPerson} />
      <InputForm data={persons} setData={setPersons} />

      <h2>Numbers</h2>

      <PersonsList data={filteredData} />
    </div>
  );
};

export default App;
