import { useEffect, useState } from "react";
import Detail from "./components/Detail";
import CountryListItem from "./components/CountryListItem";
import axios from "axios";
import uniqid from "uniqid";
function App() {
  const [data, setData] = useState([]);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [clickTraget, setClickTarget] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    setClickTarget("");
  };
  const filteredData = data.filter((country) =>
    country.name.common.toLowerCase().includes(input.toLowerCase())
  );
  const clickedCountry = data.filter(
    (country) => country.name.common === clickTraget
  );

  const handleClick = (e) => {
    setClickTarget(e.target.previousElementSibling.innerText);
  };

  return (
    <div>
      <div>
        find countries <input value={input} onChange={handleChange} />
      </div>
      {filteredData.length > 10 && input.length > 0 && (
        <p>Too many matches, specify another filter</p>
      )}
      {input.length > 0 &&
        filteredData.length < 11 &&
        filteredData.length > 1 &&
        filteredData.map((country) => (
          <CountryListItem
            country={country}
            key={uniqid()}
            handleClick={handleClick}
          />
        ))}
      {filteredData.length === 1 && <Detail data={filteredData} />}
      {clickTraget !== "" && <Detail data={clickedCountry} />}
    </div>
  );
}

export default App;
