import {
  CLOSE_SNACKBAR,
  CloseSnackbarAction,
  OPEN_SNACKBAR,
  OpenSnackbarAction
} from "./snackbarTypes";

export const openSnackbarAction = (message: string): OpenSnackbarAction => ({
  type: OPEN_SNACKBAR,
  message
});

export const closeSnackbarAction = (): CloseSnackbarAction => ({
  type: CLOSE_SNACKBAR
});
