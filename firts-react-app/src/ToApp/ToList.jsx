import Heding from "./Heding";
import Form from "./Form";
import { useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import ToDoItems from "./ToDoItems";

function ToList() {
  let [list, setList] = useState([
    { todo: "Shruti", Date: "15/11/2023" },
    { todo: "Atul", Date: "11/11/2023" },
  ]);
  const addNewItem = (input, date) => {
    if (!input) {
    } else {
      console.log(input, date);
      let add = { todo: input, Date: date };
      setList((currentValue) => [...currentValue, add]);
    }
  };

  const deleteItem = (name) => {
    setList(list.filter((li) => name !== li.todo));
  };
  return (
    <TodoItemsContext.Provider
      value={{ list: list, addNewItem: addNewItem, deleteItem: deleteItem }}
    >
      <Heding />
      <Form />
      {list.length === 0 && (
        <center>
          <h1>Nothing to show</h1>
        </center>
      )}
      <ToDoItems />
    </TodoItemsContext.Provider>
  );
}

export default ToList;
