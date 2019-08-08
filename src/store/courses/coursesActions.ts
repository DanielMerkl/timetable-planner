import { Course } from "../../types/interfaces/Course";
import {
  LOAD_TIMETABLE,
  LoadTimetableAction,
  RESET_COURSES,
  ResetCoursesAction,
  UPDATE_COURSES,
  UPDATE_COURSES_WITH_ID,
  UPDATE_HOVERED_EVENT,
  UpdateCoursesAction,
  UpdateCoursesWithIdAction,
  UpdateHoveredEventAction
} from "./coursesTypes";
import { Timetable } from "../../types/interfaces/Timetable";

export const resetCoursesAction = (): ResetCoursesAction => ({
  type: RESET_COURSES
});

export const updateCoursesAction = (
  courses: Array<Course>
): UpdateCoursesAction => ({
  type: UPDATE_COURSES,
  courses
});

export const updateCoursesWithIdAction = (
  id: number
): UpdateCoursesWithIdAction => ({
  type: UPDATE_COURSES_WITH_ID,
  id
});

export const updateHoveredEventAction = (
  id: number
): UpdateHoveredEventAction => ({
  type: UPDATE_HOVERED_EVENT,
  id
});

export const loadTimetableAction = (
  timetable: Timetable
): LoadTimetableAction => ({
  type: LOAD_TIMETABLE,
  timetable
});
