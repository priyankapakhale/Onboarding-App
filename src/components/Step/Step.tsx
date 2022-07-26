import React from "react";
import styles from "./Step.module.scss";

interface IProps {
  active: boolean;
  completed: boolean;
  id: number;
  first?: boolean;
  last?: boolean;
}

const Step = ({ first, last, active, completed, id }: IProps) => {
  return (
    <div
      className={`${styles.wrapper} ${first ? styles.first : ""}  ${
        last ? styles.last : ""
      }  ${!(first || last) ? styles.center : ""}`}
    >
      <div
        className={`${styles.container} ${
          active || completed ? styles.containerActive : ""
        }`}
      >
        {!first && (
          <div
            className={`${styles.connectorLeft} ${
              completed || active ? styles.active : ""
            }`}
          />
        )}
        {!last && (
          <div
            className={`${styles.connectorRight} ${
              completed || active ? styles.active : ""
            }`}
          />
        )}
        <h3 className={styles.id}>{id}</h3>
      </div>
    </div>
  );
};

export default Step;
