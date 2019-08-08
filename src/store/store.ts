import { combineReducers, compose, createStore } from "redux";

import { CoursesActions, CoursesState } from "./courses/coursesTypes";
import { coursesReducer } from "./courses/coursesReducer";

export interface AppState {
  courses: CoursesState;
}

export type AppActions = CoursesActions;

const reducers = combineReducers<AppState>({
  courses: coursesReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers());
