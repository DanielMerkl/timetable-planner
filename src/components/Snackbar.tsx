import React, { Dispatch, FC } from "react";

import MuiSnackbar from "@material-ui/core/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, AppState } from "../store/store";
import { closeSnackbarAction } from "../store/snackbar/snackbarActions";

export const Snackbar: FC = () => {
  const dispatch = useDispatch<Dispatch<AppActions>>();
  const open = useSelector((s: AppState) => s.snackbar.open);
  const message = useSelector((s: AppState) => s.snackbar.message);

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={5000}
      onClose={() => dispatch(closeSnackbarAction())}
      message={<span>{message}</span>}
    />
  );
};

export default Snackbar;
