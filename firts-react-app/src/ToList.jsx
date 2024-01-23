import Heding from "./Heding";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
import Heading from "../../Resume/src/Components/Heading";

function ToList() {
  let [list, setList] = useState([
    { todo: "Shruti", Date: "15/11/2023" },
    { todo: "Atul", Date: "11/11/2023" },
  ]);
  const addList = (input, date) => {
    if (!input) {
      console.log("input is null");
      return (
        <>
          <Heading />
        </>
      );
    } else {
      console.log(input, date);
      let add = { todo: input, Date: date };
      setList((currentValue) => [...currentValue, add]);
    }
  };

  const handleDeleteButton = (name) => {
    setList(list.filter((li) => name !== li.todo));
    console.log(name);
  };
  return (
    <>
      <Heding />
      <Form addList={addList} />
      {list.length === 0 && (
        <center>
          <h1>Nothing to show</h1>
        </center>
      )}
      {list.map((l, i) => (
        <List key={i} handleDeleteButton={handleDeleteButton} allList={l} />
      ))}
    </>
  );
}

export default ToList;
