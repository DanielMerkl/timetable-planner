import React, { FC, useCallback, useContext, useEffect, useState } from "react";
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
import Api from "../utils/Api";
import { loadTimetableAction } from "../store/courses/coursesActions";
import { SnackbarContext } from "../context/SnackbarContext";
import {
  createTimetable,
  deleteTimetable,
  getTimetables
} from "../utils/timetableUtils";

interface Props {
  open: boolean;
  closeDialog: () => void;
}

const LoadTimetableDialog: FC<Props> = ({ open, closeDialog }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { showSnackbar } = useContext(SnackbarContext);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [timetables, setTimetables] = useState<Array<Timetable>>([]);
  const [loadingTimetables, setLoadingTimetables] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  // const fetchTimetables = useCallback(async () => {
  //   try {
  //     setLoadingTimetables(true);
  //     const savedTimetables = await Api.fetchTimetables();
  //     setTimetables(savedTimetables);
  //   } catch (e) {
  //     console.error(e);
  //     showSnackbar(e);
  //   } finally {
  //     setLoadingTimetables(false);
  //   }
  // }, [showSnackbar]);

  const fetchTimetables = () => {
    console.log("fetching timetables");
    setLoadingTimetables(true);
    setTimeout(() => {
      const timetables = getTimetables();
      setTimetables(timetables);
      setLoadingTimetables(false);
    }, 250);
  };

  useEffect(() => {
    if (open) {
      fetchTimetables();
    }
  }, [open]);

  const handleLoadButtonClick = () => {
    dispatch(loadTimetableAction(timetables[selectedIndex]));
    closeDialog();
  };

  // const handleDelete = async (timetable: Timetable) => {
  //   try {
  //     setLoadingDelete(true);
  //     await Api.deleteTimetable(timetable.id);
  //     showSnackbar(
  //       `Stundenplan "${timetable.name}" wurde erfolgreich gelöscht.`
  //     );
  //     fetchTimetables();
  //   } catch (e) {
  //     console.error(e);
  //     showSnackbar(e);
  //   } finally {
  //     setLoadingDelete(false);
  //   }
  // };

  const handleDelete = (timetableToDelete: Timetable) => {
    setLoadingDelete(true);
    setTimeout(() => {
      deleteTimetable(timetableToDelete);
      setLoadingDelete(false);
      fetchTimetables();
    }, 250);
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
