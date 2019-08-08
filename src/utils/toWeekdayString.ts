import { Weekday } from "../types/enums/Weekday";

export const toWeekdayString = (day: Weekday) => {
  switch (day) {
    case Weekday.Monday:
      return "Montag";
    case Weekday.Tuesday:
      return "Dienstag";
    case Weekday.Wednesday:
      return "Mittwoch";
    case Weekday.Thursday:
      return "Donnerstag";
    case Weekday.Friday:
      return "Freitag";
    case Weekday.Saturday:
      return "Samstag";
    case Weekday.Sunday:
      return "Sonntag";
  }
};
