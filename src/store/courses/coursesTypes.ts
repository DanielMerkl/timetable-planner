import { Course } from "../../types/interfaces/Course";
import { Timetable } from "../../types/interfaces/Timetable";

export const RESET_COURSES = "[data] RESET_COURSES";
export const UPDATE_COURSES = "[data] UPDATE_COURSES";
export const UPDATE_COURSES_WITH_ID = "[data] UPDATE_COURSES_WITH_ID";
export const UPDATE_HOVERED_EVENT = "[calendar] UPDATE_HOVERED_EVENT";
export const LOAD_TIMETABLE = "[calendar] LOAD_TIMETABLE";

export interface ResetCoursesAction {
  type: typeof RESET_COURSES;
}

export interface UpdateCoursesAction {
  type: typeof UPDATE_COURSES;
  courses: Array<Course>;
}

export interface UpdateCoursesWithIdAction {
  type: typeof UPDATE_COURSES_WITH_ID;
  id: number;
}

export interface UpdateHoveredEventAction {
  type: typeof UPDATE_HOVERED_EVENT;
  id: number;
}

export interface LoadTimetableAction {
  type: typeof LOAD_TIMETABLE;
  timetable: Timetable;
}

export type CoursesActions =
  | ResetCoursesAction
  | UpdateCoursesAction
  | UpdateCoursesWithIdAction
  | UpdateHoveredEventAction
  | LoadTimetableAction;

export interface CoursesState {
  courses: Array<Course>;
  hoveredEventId: number;
}
