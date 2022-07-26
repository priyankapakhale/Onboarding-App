import React from "react";
import Step from "../Step/Step";
import styles from "./Stepper.module.scss";

interface StepProps {
  id: number;
  first?: boolean;
  last?: boolean;
}

interface IProps {
  currentStep: number;
  steps: StepProps[];
}

const Stepper = ({ currentStep, steps }: IProps) => {
  return (
    <div className={styles.container}>
      {steps?.map((step: any) => (
        <Step
          key={`step-${step.id}`}
          active={currentStep === step.id}
          completed={step.id < currentStep}
          id={step.id}
          first={step.id === 1}
          last={step.id === steps?.length}
        />
      ))}
    </div>
  );
};

export default Stepper;
