import { Timetable } from "../types/interfaces/Timetable";

const TIMETABLES = "TIMETABLES";

export const getTimetables = (): Array<Timetable> => {
  const timetableString = sessionStorage.getItem(TIMETABLES);
  if (timetableString) {
    const timetables: Array<Timetable> = JSON.parse(timetableString);
    console.log("timetables: ", timetables);

    return timetables;
  }

  return [];
};

const saveTimetables = (timetables: Array<Timetable>) => {
  sessionStorage.setItem(TIMETABLES, JSON.stringify(timetables));
};

export const createTimetable = (newTimetable: Timetable) => {
  const timetables = getTimetables();
  const updatedTimetables = [...timetables, newTimetable];
  saveTimetables(updatedTimetables);
};

export const deleteTimetable = (timetableToDelete: Timetable) => {
  const timetables = getTimetables();
  const indexToDelete = timetables.findIndex(timetable => {
    return timetableToDelete.id === timetable.id;
  });
  if (indexToDelete !== -1) {
    timetables.splice(indexToDelete, 1);
  }
  saveTimetables(timetables);
};
