import moment from "moment";

import { Lecture } from "../types/interfaces/Lecture";
import { Practice } from "../types/interfaces/Practice";
import { CalendarEvent } from "../types/interfaces/CalendarEvent";
import { Weekday } from "../types/enums/Weekday";

export const toCalendarEvent = (
  lecture: Lecture | Practice
): CalendarEvent => ({
  id: lecture.id,
  title: lecture.shortname,
  start: addDefaultDate(lecture.start, lecture.weekday),
  end: addDefaultDate(lecture.end, lecture.weekday),
  resource: lecture
});

const addDefaultDate = (date: Date, weekday: Weekday) => {
  return moment(date)
    .year(2019)
    .month(3)
    .date(1)
    .add(weekday - 1, "days")
    .toDate();
};
