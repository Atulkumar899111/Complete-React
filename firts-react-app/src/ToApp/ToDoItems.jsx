import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import List from "./List";

function ToDoItems() {
  const { list } = useContext(TodoItemsContext);
  console.log(list);
  return list.map((l, i) => <List key={i} allList={l} />);
}

export default ToDoItems;
