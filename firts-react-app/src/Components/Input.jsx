function Input({ handelOnChange }) {
  return (
    <input
      className="form-control"
      type="text"
      placeholder="Default input"
      aria-label="default input example"
      onKeyDown={handelOnChange}
    ></input>
  );
}

export default Input;
