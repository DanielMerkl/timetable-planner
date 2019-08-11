import React, {
  Dispatch,
  FC,
  KeyboardEvent,
  useContext,
  useState
} from "react";

import {
  Button,
  CircularProgress,
  Paper,
  Tab,
  Tabs,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { AuthContext } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { AppActions } from "../store/store";
import { openSnackbarAction } from "../store/snackbar/snackbarActions";
import routes from "../utils/routes";
import { Redirect } from "react-router";

enum TabValues {
  LOGIN,
  REGISTER
}

const AuthForm: FC = () => {
  const dispatch = useDispatch<Dispatch<AppActions>>();
  const styles = useStyles();
  const { isLoggedIn, register, login } = useContext(AuthContext);

  const [tabValue, setTabValue] = useState<TabValues>(TabValues.LOGIN);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoggedIn && !isLoading) {
    return <Redirect to={routes.TIMETABLE} />;
  }

  const handleEmailChange = (newValue: string) => {
    setEmailError(false);
    setEmail(newValue);
  };

  const handlePasswordChange = (newValue: string) => {
    setPasswordError(false);
    setPassword(newValue);
  };

  const handleButtonClick = () => {
    if (tabValue === TabValues.LOGIN) {
      tryLogin();
    } else {
      tryRegister();
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" && !!email && !!password) {
      if (tabValue === TabValues.LOGIN) {
        tryLogin();
      } else {
        tryRegister();
      }
    }
  };

  const tryLogin = async () => {
    try {
      setIsLoading(true);
      await login(email, password);
    } catch (e) {
      switch (e.code) {
        case "auth/user-disabled":
          setEmailError(true);
          dispatch(openSnackbarAction("Email-Adresse ist gesperrt"));
          break;
        case "auth/invalid-email":
          setEmailError(true);
          dispatch(openSnackbarAction("Email-Adresse ist ungültig"));
          break;
        case "auth/wrong-password":
          setPasswordError(true);
          dispatch(
            openSnackbarAction("Passwort muss mindestens 6 Zeichen lang sein.")
          );
          break;
        case "auth/user-not-found":
          setEmailError(true);
          dispatch(
            openSnackbarAction(
              "Es existiert kein Account mit dieser Email-Adresse."
            )
          );
          break;
      }
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const tryRegister = async () => {
    try {
      setIsLoading(true);
      register(email, password);
    } catch (e) {
      switch (e.code) {
        case "auth/email-already-in-use":
          setEmailError(true);
          dispatch(openSnackbarAction("Email-Adresse ist bereits vergeben."));
          break;
        case "auth/invalid-email":
          setEmailError(true);
          dispatch(openSnackbarAction("Email-Adresse ist ungültig"));
          break;
        case "auth/weak-password":
          setPasswordError(true);
          dispatch(
            openSnackbarAction("Passwort muss mindestens 6 Zeichen lang sein.")
          );
          break;
      }
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper className={styles.paper}>
      <Tabs
        centered
        value={tabValue}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, value) => setTabValue(value)}
      >
        <Tab className={styles.tab} label="Einloggen" value={TabValues.LOGIN} />
        <Tab
          className={styles.tab}
          label="Registrieren"
          value={TabValues.REGISTER}
        />
      </Tabs>
      <div className={styles.inputWrapper}>
        <TextField
          variant="outlined"
          label="E-Mail"
          value={email}
          error={emailError}
          onChange={event => handleEmailChange(event.target.value)}
          autoFocus
          onKeyPress={handleKeyPress}
        />
        <TextField
          variant="outlined"
          label="Passwort"
          type="password"
          value={password}
          error={passwordError}
          onChange={event => handlePasswordChange(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          disabled={!email || !password || isLoading}
          className={styles.button}
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleButtonClick}
        >
          {isLoading ? (
            <CircularProgress size={24} />
          ) : (
            <>{tabValue === TabValues.LOGIN ? "Einloggen" : "Registrieren"}</>
          )}
        </Button>
      </div>
    </Paper>
  );
};

const useStyles = makeStyles({
  paper: {
    width: 400,
    margin: "auto",
    marginTop: 48,
    paddingBottom: 32
  },
  tab: {
    width: 200
  },
  inputWrapper: {
    width: 300,
    margin: "auto",
    marginTop: 32,
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: 8
  },
  button: {
    marginTop: 24
  }
});

export default AuthForm;
