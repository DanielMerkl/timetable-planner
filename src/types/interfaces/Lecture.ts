import { Weekday } from "../enums/Weekday";

export interface Lecture {
  id: number;
  fullname: string;
  shortname: string;
  professor: string;
  room: string;
  weekday: Weekday;
  start: Date;
  end: Date;
  visible: boolean;
}
