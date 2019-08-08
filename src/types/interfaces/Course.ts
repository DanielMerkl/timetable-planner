import { Semester } from "./Semester";

export interface Course {
  id: number;
  name: string;
  semesters: Array<Semester>;
}
