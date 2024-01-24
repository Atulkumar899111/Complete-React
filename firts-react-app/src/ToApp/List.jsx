import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

let List = ({ allList }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  TodoItemsContext;
  return (
    <>
      <div className="row g-3">
        <div className="col-auto mx-auto">
          <p>{allList.todo}</p>
        </div>
        <div className="col-auto mx-auto">
          <p>{allList.Date}</p>
        </div>
        <div className="col-auto mx-auto">
          <button
            type="submit"
            className="btn btn-danger mb-3"
            onClick={() => deleteItem(allList.todo)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
