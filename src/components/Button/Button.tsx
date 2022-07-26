import React from "react";
import styles from "./Button.module.scss";

interface IProps {
  label: string;
  onClick: any;
}

const Button = ({ label, onClick }: IProps) => {
  return (
    <button className={styles.container} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
