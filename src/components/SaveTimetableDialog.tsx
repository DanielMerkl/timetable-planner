import React, { Dispatch, FC, KeyboardEvent, useState } from "react";

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
import { Timetable } from "../types/interfaces/Timetable";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, AppState } from "../store/store";
import { openSnackbarAction } from "../store/snackbar/snackbarActions";
import Api from "../utils/Api";

interface Props {
  open: boolean;
  closeDialog: () => void;
}

const SaveTimetableDialog: FC<Props> = ({ open, closeDialog }) => {
  const styles = useStyles();
  const dispatch = useDispatch<Dispatch<AppActions>>();
  const [timetableName, setTimetableName] = useState("");
  const [loading, setLoading] = useState(false);
  const courses = useSelector((state: AppState) => state.courses.courses);

  const handleSaveTimetable = async () => {
    try {
      setLoading(true);
      const timetable: Timetable = toTimetable(timetableName, courses);
      await Api.saveTimetable(timetable);
      dispatch(
        openSnackbarAction("Stundenplan wurde erfolgreich gespeichert.")
      );
      closeDialog();
      setTimetableName("");
    } catch (e) {
      dispatch(openSnackbarAction(e));
    } finally {
      setLoading(false);
    }
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
