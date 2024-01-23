import { useRef } from "react";
import { useState } from "react";

function Form({ addList }) {
  //   const [inputValue, setInputValue] = useState("");
  //   const [inputDateValue, setDateValue] = useState(null);
  //   let handleChange = (e) => {
  //     console.log(e.target.value);
  //     setInputValue(e.target.value);
  //   };
  //   const handleDateChange = (e) => {
  //     const dateValue = e.target.value;
  //     console.log(e.target.value);
  //     setDateValue(dateValue);
  //   };

  const todoElement = useRef();
  const dateElement = useRef();
  function addClickButton(e) {
    e.preventDefault();
    addList(todoElement.current.value, dateElement.current.value);
    todoElement.current.value = "";
    dateElement.current.value = "";
    // setInputValue("");
    // setDateValue("");
  }

  return (
    <>
      <form className="row g-3" onSubmit={addClickButton}>
        <div className="col-auto mx-auto">
          <input
            type="Text"
            className="form-control"
            id="name"
            placeholder="Text"
            ref={todoElement}
            // value={todoElement.current.value}
            // onChange={handleChange}
          />
        </div>
        <div className="col-auto mx-auto">
          <input
            type="Date"
            className="form-control"
            id="name"
            placeholder="Text"
            ref={dateElement}
            // value={todoElement.current.value}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-auto mx-auto">
          <button className="btn btn-primary mb-3">Add</button>
        </div>
      </form>
    </>
  );
}

export default Form;
