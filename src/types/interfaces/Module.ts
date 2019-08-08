import { Lecture } from "./Lecture";
import { Practice } from "./Practice";

export interface Module {
  id: number;
  name: string;
  lectures: Array<Lecture>;
  practices: Array<Practice>;
}
