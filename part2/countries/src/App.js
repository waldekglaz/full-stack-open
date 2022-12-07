import { useEffect, useState } from "react";
import Detail from "./components/Detail";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);

  // const [isFilterValid, setIsFilterValid] = useState(false);

  // const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const filteredData = data.filter((country) =>
    country.name.common.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <div>
      <div>
        find countries <input value={input} onChange={handleChange} />
      </div>

      {/* {input.length > 0 && filteredData.length < 11 ? (
        filteredData.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))
      ) : (
        <p>Too many countries</p>
      )} */}
      {filteredData.length > 10 && input.length > 0 && (
        <p>Too many matches, specify another filter</p>
      )}
      {input.length > 0 &&
        filteredData.length < 11 &&
        filteredData.length > 1 &&
        filteredData.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))}
      {filteredData.length === 1 && <Detail data={filteredData} />}
    </div>
  );
}

export default App;
