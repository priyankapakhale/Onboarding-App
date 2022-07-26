import React from "react";
import { Switch, Route } from "react-router-dom";
import Onboarding from "./Onboarding/Onboarding";

const Pages = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Onboarding} />
      </Switch>
    </>
  );
};

export default Pages;
