import { useState } from "react";
import Button from "./Buttons";

function Calculator() {
  let arr = [
    "c",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "=",
  ];
  const [display, setDisplay] = useState("");
  const getButtonValue = (ButtonText) => {
    setDisplay(ButtonText);
    if (ButtonText == "c") {
      setDisplay("");
    } else if (ButtonText == "=") {
      let ans = eval(display);
      !ans || ans == "=" ? setDisplay("") : setDisplay(ans);
    } else {
      const newValue = display + ButtonText;
      setDisplay(newValue);
    }
  };

  return (
    <>
      <div className="textInputWrapper">
        <input
          placeholder={display}
          type="text"
          className="textInput"
          readOnly
        />
        <br />
        <br />
        {arr.map((item) => (
          <Button
            key={item}
            buttonName={item}
            getButtonValue={getButtonValue}
          />
        ))}
        <Button />
      </div>
    </>
  );
}

export default Calculator;
