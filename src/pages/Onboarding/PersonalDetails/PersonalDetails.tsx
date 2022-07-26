import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import FormContainer from "../../../components/FormContainer/FormContainer";
import TextField from "../../../components/TextField/TextField";
import styles from "./PersonalDetails.module.scss";
import { useDispatch } from "react-redux";
import { savePersonalDetails } from "../../../redux/actions/personalDetailsActions";

const PersonalDetails = ({ increaseStep }: any) => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");

  const clickHandler = () => {
    dispatch(savePersonalDetails({ displayName, fullName }));
    increaseStep();
  };

  return (
    <>
      <div className={styles.container}>
        <FormContainer
          title="Welcome! First things first..."
          subtitle="You can always change them later."
        >
          <TextField
            label="Full Name"
            placeholder="Steve Jobs"
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <TextField
            label="Display Name"
            placeholder="Steve"
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
          <Button label="Create Workspace" onClick={clickHandler} />
        </FormContainer>
      </div>
    </>
  );
};

export default PersonalDetails;
