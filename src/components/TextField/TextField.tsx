import React from "react";
import styles from "./TextField.module.scss";

interface IProps {
  label: string;
  placeholder: string;
  type: "text" | "url";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  domain?: string;
  required?: boolean;
}

const TextField = ({
  label,
  placeholder,
  type,
  onChange,
  domain,
  required = false,
}: IProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
        {!required && <span className={styles.required}>&nbsp;(optional)</span>}
      </label>

      <div className={styles.inputContainer}>
        {domain && <div className={styles.domain}>{domain}</div>}
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextField;
