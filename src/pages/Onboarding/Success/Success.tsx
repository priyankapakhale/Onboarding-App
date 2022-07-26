import React from "react";
import Button from "../../../components/Button/Button";
import FormContainer from "../../../components/FormContainer/FormContainer";
import styles from "./Success.module.scss";
import done from "../../../assets/done.png";
import { useSelector } from "react-redux";
const Success = () => {
  const { displayName } = useSelector((state: any) => state?.personal);
  const { personal, workspace, usage }: any = useSelector((state) => state);
  console.log("here", personal, workspace, usage);

  return (
    <>
      <div className={styles.container}>
        <FormContainer
          title={`Congratulations, ${displayName}!`}
          subtitle="You have completed onboarding, you can start using the Eden!"
          icon={done}
        >
          <Button label="Launch Eden" onClick={() => {}} />
        </FormContainer>
      </div>
    </>
  );
};

export default Success;
