import { Timetable } from "./Timetable";

export interface User {
  name: string;
  surname: string;
  email: string;
  passwordHash: string;
  timetables: Array<Timetable>;
}
