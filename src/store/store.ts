import { combineReducers, compose, createStore } from "redux";

import { CoursesActions, CoursesState } from "./courses/coursesTypes";
import { coursesReducer } from "./courses/coursesReducer";
import { SnackbarActions, SnackbarState } from "./snackbar/snackbarTypes";
import { snackbarReducer } from "./snackbar/snackbarReducer";
import {
  InformationDialogActions,
  InformationDialogState
} from "./informationDialog/informationDialogTypes";
import { informationDialogReducer } from "./informationDialog/informationDialogReducer";

export interface AppState {
  courses: CoursesState;
  snackbar: SnackbarState;
  informationDialog: InformationDialogState;
}

export type AppActions =
  | CoursesActions
  | SnackbarActions
  | InformationDialogActions;

const reducers = combineReducers<AppState>({
  courses: coursesReducer,
  snackbar: snackbarReducer,
  informationDialog: informationDialogReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers());
