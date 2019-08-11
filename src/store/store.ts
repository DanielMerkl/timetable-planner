import { combineReducers, compose, createStore } from "redux";

import { CoursesActions, CoursesState } from "./courses/coursesTypes";
import { coursesReducer } from "./courses/coursesReducer";
import { SnackbarActions, SnackbarState } from "./snackbar/snackbarTypes";
import { snackbarReducer } from "./snackbar/snackbarReducer";

export interface AppState {
  courses: CoursesState;
  snackbar: SnackbarState;
}

export type AppActions = CoursesActions | SnackbarActions;

const reducers = combineReducers<AppState>({
  courses: coursesReducer,
  snackbar: snackbarReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers());
