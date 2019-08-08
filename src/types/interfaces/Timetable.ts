import { Lecture } from "./Lecture";
import { Practice } from "./Practice";

export interface Timetable {
  id: number;
  name: string;
  lectures: Array<Lecture>;
  practices: Array<Practice>;
}
