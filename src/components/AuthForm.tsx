import React, { FC, KeyboardEvent, useContext, useState } from "react";

import {
  Button,
  CircularProgress,
  Paper,
  Tab,
  Tabs,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import useReactRouter from "use-react-router";
import { TIMETABLE } from "../utils/routes";
import Api from "../utils/Api";
import { AuthContext } from "../context/AuthContext";
import { SnackbarContext } from "../context/SnackbarContext";

enum TabValues {
  LOGIN,
  REGISTER
}

const AuthForm: FC = () => {
  const styles = useStyles();
  const { login } = useContext(AuthContext);
  const { showSnackbar } = useContext(SnackbarContext);
  const { history } = useReactRouter();

  const [tabValue, setTabValue] = useState<TabValues>(TabValues.LOGIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    if (tabValue === TabValues.LOGIN) {
      tryLogin();
    } else {
      tryRegister();
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" && email && password) {
      if (tabValue === TabValues.LOGIN) {
        tryLogin();
      } else {
        tryRegister();
      }
    }
  };

  const tryLogin = async () => {
    try {
      setLoading(true);
      const { token, userId } = await Api.login(email, password);
      showSnackbar("Login war erfolgreich.");
      setLoading(false);
      login(token, userId);
      history.push(TIMETABLE);
    } catch (e) {
      console.error(e);
      showSnackbar(e);
      setLoading(false);
    }
  };

  const tryRegister = async () => {
    try {
      setLoading(true);
      const { token, userId } = await Api.register(email, password);
      showSnackbar("Registrierung war erfolgreich.");
      setLoading(false);
      login(token, userId);
      history.push(TIMETABLE);
    } catch (e) {
      console.error(e);
      showSnackbar(e);
      setLoading(false);
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
          onChange={event => setEmail(event.target.value)}
          autoFocus
          onKeyPress={handleKeyPress}
        />
        <TextField
          variant="outlined"
          label="Passwort"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          disabled={!email || !password || loading}
          className={styles.button}
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleButtonClick}
        >
          {loading ? (
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
