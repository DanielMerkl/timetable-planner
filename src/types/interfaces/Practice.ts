import { Lecture } from "./Lecture";

export interface Practice extends Lecture {
  group: number;
}

export const isPractice = (x: Lecture | Practice): x is Practice => {
  return "group" in x;
};
