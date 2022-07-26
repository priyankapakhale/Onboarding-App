import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import FormContainer from "../../../components/FormContainer/FormContainer";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import styles from "./UsageDetails.module.scss";
import logo from "../../../assets/logo.png";
import person from "../../../assets/person.png";
import team from "../../../assets/team.png";
import { useDispatch } from "react-redux";
import { saveUsageDetails } from "../../../redux/actions/usageDetailsActions";

const UsageDetails = ({ increaseStep }: any) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const clickHandler = () => {
    dispatch(saveUsageDetails({ selected }));
    increaseStep();
  };

  const options = [
    {
      id: 0,
      label: "For myself",
      icon: person,
      description: "Write better. Think more clearly. Stay organized.",
    },
    {
      id: 1,
      label: "With my team",
      icon: team,
      description: "Wikis, docs, tasks & projects, all in one place.",
    },
  ];

  const selectHandler = (option: any) => {
    setSelected(option);
  };

  return (
    <>
      <div className={styles.container}>
        <FormContainer
          title="How are you planning to use Eden?"
          subtitle="We'll streamline your setup experience accordingly."
        >
          <RadioGroup
            options={options}
            selected={selected}
            onSelect={selectHandler}
          />
          <Button label="Create Workspace" onClick={clickHandler} />
        </FormContainer>
      </div>
    </>
  );
};

export default UsageDetails;
