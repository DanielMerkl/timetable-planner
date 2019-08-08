import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { AUTH, TIMETABLE } from "./utils/routes";
import TimetablePage from "./pages/TimetablePage";
import AuthPage from "./pages/AuthPage";
import Snackbar from "./components/Snackbar";

const App: FC = () => (
  <>
    <Switch>
      <Route path={TIMETABLE} component={TimetablePage} />
      <Route path={AUTH} component={AuthPage} />
      <Redirect to={TIMETABLE} />
    </Switch>
    <Snackbar />
  </>
);

export default App;
