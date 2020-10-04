import React, { useState } from "react";
import "./MultiStepForm.scss";

import {
  Stepper,
  Step,
  StepButton,
  StepConnector,
  StepLabel,
  Button,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Check from "@material-ui/icons/Check";

import PropTypes from "prop-types";
import clsx from "clsx";

import PersonalDetails from "./PersonalDetails";
import CrimeDetails from "./CrimeDetails";
import AdditionalDetails from "./AdditionalDetails";
import Review from "./Review";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

function MultiStepForm() {
  const steps = ["About you", "Crime details", "Additional details", "Review"];
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [personalDetails, setPersonalDetails] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    phone: "",
    birthday: "",
    address: "",
    city: "",
    state: "",
  });
  const [crimeDetails, setCrimeDetails] = useState({});
  const [xtraDetails, setXtraDetails] = useState({});
  const reviewData = [personalDetails, crimeDetails, xtraDetails];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalDetails />;
      case 1:
        return <CrimeDetails />;
      case 2:
        return <AdditionalDetails />;
      case 3:
        return <Review data={reviewData} />;
      default:
        return <PersonalDetails />;
    }
  };
  console.log(completed);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    setCompleted({ ...completed, 0: true });
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  return (
    <div>
      <h4 className="text-center p-3">
        Please fill in the required information in the form below.
      </h4>
      <Stepper
        alternativeLabel
        connector={<QontoConnector />}
        nonLinear
        activeStep={activeStep}
      >
        {steps.map((item, index) => (
          <Step key={index}>
            <StepButton
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              <StepLabel StepIconComponent={QontoStepIcon}>{item}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div className="step-content">
        {allStepsCompleted() ? (
          <div>
            <p>Congratulations</p>
          </div>
        ) : (
          <div>
            <div>{getStepContent(activeStep)}</div>
            <div className="button-group">
              <Button
                style={{ marginRight: "10px" }}
                disabled={activeStep === 0}
                onClick={handlePrevious}
                variant="outlined"
              >
                Back
              </Button>

              {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary">
                  Finish
                </Button>
              ) : (
                <Button variant="outlined" color="primary" onClick={handleNext}>
                  Next
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
