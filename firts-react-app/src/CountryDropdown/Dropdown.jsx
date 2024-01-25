import { useState } from "react";

const Dropdown = () => {
  let country = {
    India: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Delhi",
      "Uttar Pradesh",
    ],
    US: ["Alabama", "Alaska", "Arizona", "Arkansas"],
    Afghanistan: ["Herat", "Kabul", "Kandahar"],
    Albania: ["Elbasan", "Petran", "Pogradec"],
  };
  let [countryValue, setCountryValue] = useState("India");
  const getValue = (e) => {
    // setCountryValue(() => e.target.value);
    setCountryValue(e.target.value);
    console.log(countryValue);
  };
  return (
    <>
      <label>Choose a car:</label>

      <select onChange={getValue}>
        {Object.keys(country).map((i, index) => (
          <option key={index} value={i}>
            {i}
          </option>
        ))}
      </select>
      <select name="cars" id="cars">
        {country[countryValue].map((i, index) => (
          <option key={index} value={i}>
            {i}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
