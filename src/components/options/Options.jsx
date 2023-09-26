import { useState } from "react";
import classes from "./options.module.css";

export function Options({ onDelete, onTitleChange, products }) {
  const [inputValue, setInputValue] = useState("");

  function handleTitleChange(value, products) {
    onTitleChange(value, products);
  }

  function handleDelete() {
    onDelete();
  }

  return (
    <div className={classes.wrapper}>
      <div>
        Change title:{" "}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </div>
      <div className={classes.buttonsWrapper}>
        <button onClick={handleDelete} className={classes.deleteButton}>
          Delete
        </button>
        <button
          onClick={() => handleTitleChange(inputValue, products)}
          className={classes.infoButton}
        >
          Change
        </button>
      </div>
    </div>
  );
}
