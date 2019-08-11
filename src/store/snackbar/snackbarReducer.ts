import {
  CLOSE_SNACKBAR,
  OPEN_SNACKBAR,
  SnackbarActions,
  SnackbarState
} from "./snackbarTypes";

const initialSnackbarState: SnackbarState = {
  open: false,
  message: ""
};

export const snackbarReducer = (
  state: SnackbarState = initialSnackbarState,
  action: SnackbarActions
): SnackbarState => {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return { ...state, open: true, message: action.message };
    case CLOSE_SNACKBAR:
      return { ...state, open: false };
    default:
      return state;
  }
};
