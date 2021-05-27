import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "../styles/App.css";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");
  return (
    <div>
      {/* <a>{id}</a> */}
      {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
    </div>
  );
}

export default App;
