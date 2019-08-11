import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import TimetablePage from "./pages/TimetablePage";
import AuthPage from "./pages/AuthPage";
import Snackbar from "./components/Snackbar";
import routes from "./utils/routes";

const App: FC = () => (
  <>
    <Switch>
      <Route path={routes.TIMETABLE} component={TimetablePage} />
      <Route path={routes.AUTH} component={AuthPage} />
      <Redirect to={routes.TIMETABLE} />
    </Switch>
    <Snackbar />
  </>
);

export default App;
