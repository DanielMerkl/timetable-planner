import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Radio,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { DeleteOutline } from "@material-ui/icons";

import { Timetable } from "../types/interfaces/Timetable";
import { loadTimetableAction } from "../store/courses/coursesActions";
import Api from "../utils/Api";
import { openSnackbarAction } from "../store/snackbar/snackbarActions";

interface Props {
  open: boolean;
  closeDialog: () => void;
}

const LoadTimetableDialog: FC<Props> = ({ open, closeDialog }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [timetables, setTimetables] = useState<Array<Timetable>>([]);
  const [loadingTimetables, setLoadingTimetables] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const fetchTimetables = useCallback(async () => {
    try {
      setLoadingTimetables(true);
      const savedTimetables = await Api.fetchTimetables();
      setTimetables(savedTimetables);
    } catch (e) {
      dispatch(openSnackbarAction(e));
    } finally {
      setLoadingTimetables(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (open) {
      fetchTimetables();
    }
  }, [open, fetchTimetables]);

  const handleLoadButtonClick = () => {
    dispatch(loadTimetableAction(timetables[selectedIndex]));
    closeDialog();
  };

  const handleDelete = async (timetableToDelete: Timetable) => {
    try {
      setLoadingDelete(true);
      await Api.deleteTimetable(timetableToDelete);
      fetchTimetables();
    } catch (e) {
      dispatch(openSnackbarAction(e));
    } finally {
      setLoadingDelete(false);
    }
  };

  return (
    <Dialog open={open} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogTitle>Stundenplan laden</DialogTitle>
      <DialogContent>
        {loadingTimetables ? (
          <LinearProgress />
        ) : (
          <>
            {loadingDelete ? <LinearProgress /> : <div style={{ height: 4 }} />}
            {timetables.length === 0 && (
              <Typography>Es gibt keine gespeicherten Stundenpläne.</Typography>
            )}
            <List>
              {timetables.map((timetable, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => setSelectedIndex(index)}
                >
                  <Radio
                    className={styles.radioButton}
                    color="primary"
                    checked={index === selectedIndex}
                  />
                  <ListItemText primary={timetable.name} />
                  <ListItemSecondaryAction>
                    <IconButton
                      className={styles.deleteIconButton}
                      onClick={() => handleDelete(timetable)}
                      disabled={loadingDelete}
                    >
                      <DeleteOutline />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </>
        )}
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
          onClick={handleLoadButtonClick}
          disabled={selectedIndex === -1}
        >
          Laden
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useStyles = makeStyles({
  button: {
    width: 120
  },
  deleteIconButton: {
    marginTop: -8,
    marginBottom: -8
  },
  radioButton: {
    marginTop: -8,
    marginBottom: -8
  }
});

export default LoadTimetableDialog;
