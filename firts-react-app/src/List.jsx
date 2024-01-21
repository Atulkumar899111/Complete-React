let List = ({ allList, handleDeleteButton }) => {
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
            onClick={() => handleDeleteButton(allList.todo)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
