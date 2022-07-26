import React from "react";
import styles from "./RadioGroup.module.scss";

interface RadioOptionProps {
  icon: any;
  label: string;
  description: string;
  id: number;
}

interface RadioProps extends RadioOptionProps {
  onSelect: Function;
  active: boolean;
}

interface IProps {
  options: RadioOptionProps[];
  selected?: any;
  onSelect: Function;
}

const Radio = ({
  icon,
  label,
  description,
  id,
  onSelect,
  active,
}: RadioProps) => {
  return (
    <button
      className={`${styles.container} ${active ? styles.active : ""}`}
      onClick={() => onSelect({ id, label, description })}
    >
      <img className={styles.icon} src={icon} alt={label} />
      <div className={styles.label}>{label}</div>
      <div className={styles.description}>{description}</div>
    </button>
  );
};

const RadioGroup = ({ options, selected, onSelect }: IProps) => {
  return (
    <div className={styles.wrapper}>
      {options?.map((option) => (
        <Radio
          key={option.id}
          {...option}
          onSelect={onSelect}
          active={selected?.id === option?.id}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
