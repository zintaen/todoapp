import React, { useState } from "react";

import styles from "./form.module.scss";

const Form = ({ onAdd }: { onAdd: (value: string) => void }) => {
  const [input, setInput] = useState("");

  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const _handleClickAdd = () => {
    onAdd(input);
    setInput("");
  };

  const _handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      _handleClickAdd();
    }
  };

  return (
    <div className={styles.container} onKeyDown={_handleKeyDown}>
      <input
        id="todo-input"
        data-testid="input"
        className={styles.input}
        value={input}
        onChange={_handleChange}
      ></input>
      <button
        id="add-button"
        data-testid="addButton"
        className={styles.addBtn}
        onClick={_handleClickAdd}
      >
        Add
      </button>
    </div>
  );
};

export default Form;
