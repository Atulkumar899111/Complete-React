import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import CompletedList from "./CompleteList";
import Data from "./Components/Data";
import ToList from "./ToApp/ToList";
import Dropdown from "./CountryDropdown/Dropdown";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CompletedList />
    <Data /> */}
    {/* <ToList /> */}
    <Dropdown />
  </React.StrictMode>
);
