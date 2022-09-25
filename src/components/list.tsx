import React from "react";
import cn from "classnames";

import styles from "./list.module.scss";

const List = ({
  data,
  onDone,
}: {
  data: string[];
  onDone: (index: number) => void;
}) => {
  const _handleClickDone = (index: number) => () => {
    onDone(index);
  };

  return (
    <ol className={styles.list}>
      {data.map((value: string, index: number) => (
        <div className={styles.item} data-testid="todo" key={index}>
          <li className={styles.content} id={`todo-item-${index + 1}`}>
            {value}
          </li>
          <button
            className={cn("complete-button", styles.doneBtn)}
            id={`complete-button-${index + 1}`}
            data-testid="doneButton"
            onClick={_handleClickDone(index)}
          >
            DONE
          </button>
        </div>
      ))}
    </ol>
  );
};

export default List;
