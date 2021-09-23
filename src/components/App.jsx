import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [names, setNames] = useState([]);

  function handleChange(event) {
    console.log("handleChange");

    const newValue = event.target.value;
    setItem(newValue);
  }

  function handleClick(event) {
    console.log("Click");

    setNames((prevNames) => {
      return [...prevNames, item];
    });
    setItem("");
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={handleClick}>
          <input onChange={handleChange} type="text" value={item} />
          <button type="submit">
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {names.map((todoName) => (
            <li>{todoName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
