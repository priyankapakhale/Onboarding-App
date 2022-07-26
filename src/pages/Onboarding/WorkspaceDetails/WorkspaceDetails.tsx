import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import FormContainer from "../../../components/FormContainer/FormContainer";
import TextField from "../../../components/TextField/TextField";
import styles from "./WorkspaceDetails.module.scss";
import { useDispatch } from "react-redux";
import { saveWorkspaceDetails } from "../../../redux/actions/workspaceDetailsActions";

const WorkspaceDetails = ({ increaseStep }: any) => {
  const dispatch = useDispatch();

  const [workspaceName, setWorkspaceName] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const clickHandler = () => {
    dispatch(saveWorkspaceDetails({ workspaceName, url }));
    increaseStep();
  };

  return (
    <>
      <div className={styles.container}>
        <FormContainer
          title="Let's set up a home for all your work"
          subtitle="You can always create another workspace later."
        >
          <TextField
            label="Workspace Name"
            placeholder="Eden"
            type="text"
            onChange={(e) => setWorkspaceName(e.target.value)}
            required
          />
          <TextField
            label="Workspace URL"
            placeholder="Example"
            type="url"
            domain="www.eden.com/"
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button label="Create Workspace" onClick={clickHandler} />
        </FormContainer>
      </div>
    </>
  );
};

export default WorkspaceDetails;
