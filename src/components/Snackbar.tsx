import React, { FC, useContext } from "react";

import MuiSnackbar from "@material-ui/core/Snackbar";
import { SnackbarContext } from "../context/SnackbarContext";

export const Snackbar: FC = () => {
  const { open, message, hideSnackbar } = useContext(SnackbarContext);

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={5000}
      onClose={hideSnackbar}
      message={<span>{message}</span>}
    />
  );
};

export default Snackbar;
