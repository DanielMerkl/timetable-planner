import React, { FC, KeyboardEvent, useContext, useState } from "react";

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { toTimetable } from "../utils/toTimetable";
import Api from "../utils/Api";
import { Timetable } from "../types/interfaces/Timetable";
import { SnackbarContext } from "../context/SnackbarContext";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import { createTimetable } from "../utils/timetableUtils";

interface Props {
  open: boolean;
  closeDialog: () => void;
}

const SaveTimetableDialog: FC<Props> = ({ open, closeDialog }) => {
  const styles = useStyles();
  const { showSnackbar } = useContext(SnackbarContext);
  const [timetableName, setTimetableName] = useState("");
  const [loading, setLoading] = useState(false);
  const courses = useSelector((state: AppState) => state.courses.courses);

  // const handleSaveTimetable = async () => {
  //   try {
  //     setLoading(true);
  //     const timetable: Timetable = toTimetable(timetableName, courses);
  //     await Api.addTimetable(timetable);
  //     showSnackbar("Stundenplan wurde erfolgreich gespeichert.");
  //     closeDialog();
  //     setTimetableName("");
  //   } catch (e) {
  //     console.error(e);
  //     showSnackbar(e);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSaveTimetable = () => {
    setLoading(true);
    setTimeout(() => {
      const newTimetable: Timetable = toTimetable(timetableName, courses);
      createTimetable(newTimetable);
      showSnackbar(
        `Stundenplan "${timetableName}" wurde erfolgreich gespeichert.`
      );
      setTimetableName("");
      closeDialog();
      setLoading(false);
    }, 250);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" && timetableName) {
      handleSaveTimetable();
    }
  };

  return (
    <Dialog open={open} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogTitle>Stundenplan speichern</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          value={timetableName}
          onChange={event => setTimetableName(event.target.value)}
          style={{ marginTop: 8 }}
          onKeyPress={handleKeyPress}
        />
      </DialogContent>
      <DialogActions>
        <Button
          className={styles.button}
          variant="text"
          color="primary"
          onClick={closeDialog}
        >
          Abbrechen
        </Button>
        <Button
          className={styles.button}
          variant="text"
          color="primary"
          onClick={handleSaveTimetable}
          disabled={timetableName.length === 0 || loading}
        >
          {loading ? <CircularProgress size={24} /> : "Speichern"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useStyles = makeStyles({
  button: {
    width: 120
  }
});

export default SaveTimetableDialog;
