import React, { useState } from "react";

import DefaultLayout from "./layouts";
import List from "./components/list";
import Form from "./components/form";

import styles from "./App.module.scss";

// TODO: Please implement this component.
function App() {
  const [taskList, setTaskList] = useState<string[]>([]);

  const _handleAdd = (value: string) => {
    if (value) {
      setTaskList([...taskList, value]);
    }
  };

  const _handleDone = (index: number) => {
    const newList = [...taskList];
    newList.splice(index, 1);
    setTaskList(newList);
  };

  return (
    <DefaultLayout>
      <div className={styles.taskContainer}>
        <div className={styles.taskTitle}>Task List</div>
        <div className={styles.taskCard}>
          <List data={taskList} onDone={_handleDone} />
          <Form onAdd={_handleAdd} />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default App;
