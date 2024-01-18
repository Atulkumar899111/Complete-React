import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import CompletedList from "./CompleteList";
import Data from "./Components/Data";
import Heding from "./Heding";
import Form from "./Form";
import List from "./List";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Heding />
    <Form />
    <List />
    <CompletedList /> */}
    <Data />
  </React.StrictMode>
);
