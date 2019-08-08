import { Course } from "../types/interfaces/Course";
import { Timetable } from "../types/interfaces/Timetable";
import { Lecture } from "../types/interfaces/Lecture";
import { Practice } from "../types/interfaces/Practice";

export const toTimetable = (
  name: string,
  courses: Array<Course>
): Timetable => {
  let lectures: Array<Lecture> = [];
  let practices: Array<Practice> = [];

  courses.forEach(course => {
    course.semesters.forEach(semester => {
      semester.modules.forEach(module => {
        module.lectures.forEach(lecture => {
          if (lecture.visible) {
            lectures.push(lecture);
          }
        });

        module.practices.forEach(practice => {
          if (practice.visible) {
            practices.push(practice);
          }
        });
      });
    });
  });

  return { id: -1, name, lectures, practices };
};
