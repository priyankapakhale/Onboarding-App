import React from "react";
import Button from "../Button/Button";
import styles from "./FormContainer.module.scss";

interface IProps {
  title: string;
  subtitle: string;
  children: any;
  icon?: any;
}

const FormContainer: React.FC<IProps> = ({
  title,
  subtitle,
  children,
  icon,
}) => {
  return (
    <div className={styles.container}>
      {icon && <img src={icon} alt="icon" className={styles.icon} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.formWrapper}>{children}</div>
    </div>
  );
};

export default FormContainer;
