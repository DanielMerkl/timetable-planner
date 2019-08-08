import { Module } from "./Module";

export interface Semester {
  id: number;
  number: number;
  modules: Array<Module>;
}
