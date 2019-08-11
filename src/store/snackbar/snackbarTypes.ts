export const OPEN_SNACKBAR = "OPEN_SNACKBAR";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";

export interface OpenSnackbarAction {
  type: typeof OPEN_SNACKBAR;
  message: string;
}

export interface CloseSnackbarAction {
  type: typeof CLOSE_SNACKBAR;
}

export type SnackbarActions = OpenSnackbarAction | CloseSnackbarAction;

export interface SnackbarState {
  open: boolean;
  message: string;
}
