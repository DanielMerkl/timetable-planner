import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";

import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { store } from "./store/store";
import theme from "./utils/theme";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { initializeFirebase } from "./utils/initializeFirebase";

initializeFirebase();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
