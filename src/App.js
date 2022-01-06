import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");

  const getData = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    console.log(data);
    setMsg(data.message);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MongoDB - ExpressJS - ReactJS - NodeJS</h1>
        <h1>{msg}</h1>
      </header>
    </div>
  );
}

export default App;
