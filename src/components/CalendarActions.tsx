import React, { FC, useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { AuthContext } from "../context/AuthContext";
import {
  resetCoursesAction,
  updateCoursesAction
} from "../store/courses/coursesActions";
import { fakeOptimalCourses } from "../utils/fakeOptimalCourses";

interface Props {
  openSaveTimetableDialog: () => void;
  openLoadTimetableDialog: () => void;
}

const CalendarActions: FC<Props> = ({
  openSaveTimetableDialog,
  openLoadTimetableDialog
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { isLoggedIn } = useContext(AuthContext);

  const [loadingOptimization, setLoadingOptimization] = useState(false);

  const handleOptimierenClick = () => {
    setLoadingOptimization(true);
    setTimeout(() => {
      setLoadingOptimization(false);
      dispatch(updateCoursesAction(fakeOptimalCourses));
    }, 750);
  };

  return (
    <div className={styles.gridWrapper}>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleOptimierenClick}
      >
        {loadingOptimization ? <CircularProgress size={24} /> : "Optimieren"}
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch(resetCoursesAction())}
      >
        Zurücksetzen
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disabled={!isLoggedIn}
        onClick={openSaveTimetableDialog}
      >
        Speichern
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disabled={!isLoggedIn}
        onClick={openLoadTimetableDialog}
      >
        Laden
      </Button>
    </div>
  );
};

const useStyles = makeStyles({
  gridWrapper: {
    marginTop: 32,
    marginLeft: 32,
    display: "grid",
    gridTemplateColumns: "repeat(4, 150px)",
    gridGap: 8
  }
});

export default CalendarActions;
