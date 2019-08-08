import {
  CoursesActions,
  CoursesState,
  LOAD_TIMETABLE,
  RESET_COURSES,
  UPDATE_COURSES,
  UPDATE_COURSES_WITH_ID,
  UPDATE_HOVERED_EVENT
} from "./coursesTypes";
import { Course } from "../../types/interfaces/Course";
import { Timetable } from "../../types/interfaces/Timetable";

const initialCoursesState: CoursesState = {
  courses: [],
  hoveredEventId: -1
};

const unselectAll = (courses: Array<Course>) => {
  const coursesCopy: Array<Course> = JSON.parse(JSON.stringify(courses));

  coursesCopy.forEach((course, courseIndex) => {
    course.semesters.forEach((semester, semesterIndex) => {
      semester.modules.forEach((module, moduleIndex) => {
        module.lectures.forEach((lecture, lectureIndex) => {
          coursesCopy[courseIndex].semesters[semesterIndex].modules[
            moduleIndex
          ].lectures[lectureIndex].visible = false;
        });

        module.practices.forEach((practice, practiceIndex) => {
          coursesCopy[courseIndex].semesters[semesterIndex].modules[
            moduleIndex
          ].practices[practiceIndex].visible = false;
        });
      });
    });
  });

  return coursesCopy;
};

const updateSingleItem = (courses: Array<Course>, id: number) => {
  const coursesCopy: Array<Course> = JSON.parse(JSON.stringify(courses));

  coursesCopy.forEach((course, courseIndex) => {
    course.semesters.forEach((semester, semesterIndex) => {
      semester.modules.forEach((module, moduleIndex) => {
        module.lectures.forEach((lecture, lectureIndex) => {
          if (id === lecture.id) {
            coursesCopy[courseIndex].semesters[semesterIndex].modules[
              moduleIndex
            ].lectures[lectureIndex].visible = !lecture.visible;
          }
        });

        module.practices.forEach((practice, practiceIndex) => {
          if (id === practice.id) {
            coursesCopy[courseIndex].semesters[semesterIndex].modules[
              moduleIndex
            ].practices[practiceIndex].visible = !practice.visible;
          }
        });
      });
    });
  });

  return coursesCopy;
};

const loadTimetable = (
  courses: Array<Course>,
  timetable: Timetable
): Array<Course> => {
  const coursesCopy = unselectAll(courses);

  coursesCopy.forEach((course, courseIndex) => {
    course.semesters.forEach((semester, semesterIndex) => {
      semester.modules.forEach((module, moduleIndex) => {
        module.lectures.forEach((lecture, lectureIndex) => {
          coursesCopy[courseIndex].semesters[semesterIndex].modules[
            moduleIndex
          ].lectures[lectureIndex].visible = timetable.lectures.some(
            timetableLecture => lecture.id === timetableLecture.id
          );
        });

        module.practices.forEach((practice, practiceIndex) => {
          coursesCopy[courseIndex].semesters[semesterIndex].modules[
            moduleIndex
          ].practices[practiceIndex].visible = timetable.practices.some(
            timetablePractice => practice.id === timetablePractice.id
          );
        });
      });
    });
  });

  return coursesCopy;
};

export const coursesReducer = (
  state: CoursesState = initialCoursesState,
  action: CoursesActions
): CoursesState => {
  switch (action.type) {
    case RESET_COURSES:
      return { ...state, courses: unselectAll(state.courses) };
    case UPDATE_COURSES:
      return { ...state, courses: action.courses };
    case UPDATE_COURSES_WITH_ID:
      return { ...state, courses: updateSingleItem(state.courses, action.id) };
    case UPDATE_HOVERED_EVENT:
      return { ...state, hoveredEventId: action.id };
    case LOAD_TIMETABLE:
      return {
        ...state,
        courses: loadTimetable(state.courses, action.timetable)
      };
    default:
      return state;
  }
};
