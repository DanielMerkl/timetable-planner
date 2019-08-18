import { Lecture } from "./Lecture";
import { Practice } from "./Practice";

export interface Timetable {
  id: string;
  name: string;
  lectures: Array<Lecture>;
  practices: Array<Practice>;
}
