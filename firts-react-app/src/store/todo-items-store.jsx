import { createContext } from "react";

export const TodoItemsContext = createContext({
  list: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
