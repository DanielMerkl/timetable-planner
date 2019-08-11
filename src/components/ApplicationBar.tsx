import React, { Dispatch, FC, useContext, useState } from "react";
import useReactRouter from "use-react-router";

import {
  AppBar,
  Button,
  CircularProgress,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  CalendarToday,
  PersonOutline,
  PowerSettingsNew,
  ViewList
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import { AuthContext } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { AppActions } from "../store/store";
import { openSnackbarAction } from "../store/snackbar/snackbarActions";
import routes from "../utils/routes";

interface Props {
  moduleSelectionOpen?: boolean;
  setModuleSelectionOpen?: (open: boolean) => void;
}

const ApplicationBar: FC<Props> = ({
  moduleSelectionOpen,
  setModuleSelectionOpen
}) => {
  const styles = useStyles();
  const dispatch = useDispatch<Dispatch<AppActions>>();
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { history, location } = useReactRouter();

  const [loading, setLoading] = useState(false);

  const handleModuleClick = () => {
    setModuleSelectionOpen && setModuleSelectionOpen(!moduleSelectionOpen);
  };

  const handleLoginClick = () => {
    history.push(routes.AUTH);
  };

  const handleLogoutClick = async () => {
    try {
      setLoading(true);
      await logout();
      dispatch(openSnackbarAction("Logout war erfolgreich."));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <div className={styles.gridWrapper}>
          {location.pathname === routes.TIMETABLE ? (
            <div>
              <Button color="inherit" onClick={handleModuleClick}>
                <ViewList className={styles.icon} />
                Module
              </Button>
            </div>
          ) : (
            <Button
              color="inherit"
              onClick={() => history.push(routes.TIMETABLE)}
            >
              <CalendarToday className={styles.icon} fontSize="small" />
              Stundenplan
            </Button>
          )}
          <Typography
            className={styles.typography}
            variant="h6"
            color="inherit"
          >
            Stundenplaner
          </Typography>
          {location.pathname === routes.TIMETABLE &&
            (!isLoggedIn ? (
              <div className={styles.buttonWrapper}>
                <Button color="inherit" onClick={handleLoginClick}>
                  <PersonOutline className={styles.icon} fontSize="small" />
                  Einloggen
                </Button>
              </div>
            ) : (
              <>
                {loading ? (
                  <Button>
                    <CircularProgress size={24} style={{ color: "white" }} />
                  </Button>
                ) : (
                  <div className={styles.buttonWrapper}>
                    <Button color="inherit" onClick={handleLogoutClick}>
                      <PowerSettingsNew
                        className={styles.icon}
                        fontSize="small"
                      />
                      Ausloggen
                    </Button>
                  </div>
                )}
              </>
            ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles({
  gridWrapper: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "150px 1fr 150px" // damit die Ueberschrift zentriert ist
  },
  icon: {
    marginRight: 8
  },
  typography: {
    justifySelf: "center"
  },
  buttonWrapper: {
    justifySelf: "end",
    marginRight: 8
  }
});

export default ApplicationBar;
