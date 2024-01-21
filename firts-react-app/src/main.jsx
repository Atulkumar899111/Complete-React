import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import CompletedList from "./CompleteList";
import Data from "./Components/Data";
import ToList from "./ToList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CompletedList />
    <Data /> */}
    <ToList />
  </React.StrictMode>
);
