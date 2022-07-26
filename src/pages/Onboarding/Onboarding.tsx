import React, { useState } from "react";
import Stepper from "../../components/Stepper/Stepper";
import styles from "./Onboarding.module.scss";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import UsageDetails from "./UsageDetails/UsageDetails";
import WorkspaceDetails from "./WorkspaceDetails/WorkspaceDetails";
import logo from "../../assets/logo.png";
import Success from "./Success/Success";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "../../redux/actions/stepperActions";

const steps = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const Onboarding = () => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state: any) => state?.stepper);

  const increaseStep = () => {
    if (currentStep < steps?.length) {
      dispatch(setCurrentStep({ currentStep: currentStep + 1 }));
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetails increaseStep={increaseStep} />;
      case 2:
        return <WorkspaceDetails increaseStep={increaseStep} />;
      case 3:
        return <UsageDetails increaseStep={increaseStep} />;
      case 4:
        return <Success />;
      default:
        return <PersonalDetails increaseStep={increaseStep} />;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.branding}>
          <img className={styles.logo} src={logo} alt="Eden logo" />
          Eden
        </h1>
        <Stepper currentStep={currentStep} steps={steps} />
        {renderStep()}
      </div>
    </>
  );
};

export default Onboarding;
