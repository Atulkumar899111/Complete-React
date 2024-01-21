import "./Buttons.css";
const Button = ({ buttonName, getButtonValue }) => {
  return (
    <>
      <button>
        <span className="button_top" onClick={() => getButtonValue(buttonName)}>
          {buttonName}
        </span>
      </button>
    </>
  );
};

export default Button;
