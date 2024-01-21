import { useState } from "react";

function Form({ addList }) {
  const [inputValue, setInputValue] = useState("");
  const [inputDateValue, setDateValue] = useState(null);
  let handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    console.log(e.target.value);
    setDateValue(dateValue);
  };
  function addClickButton(e) {
    e.preventDefault();
    addList(inputValue, inputDateValue);
    setInputValue("");
    setDateValue("");
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-auto mx-auto">
          <input
            type="Text"
            className="form-control"
            id="name"
            placeholder="Text"
            onChange={handleChange}
          />
        </div>
        <div className="col-auto mx-auto">
          <input
            type="Date"
            className="form-control"
            id="name"
            placeholder="Text"
            onChange={handleDateChange}
          />
        </div>
        <div className="col-auto mx-auto">
          <button className="btn btn-primary mb-3" onClick={addClickButton}>
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
