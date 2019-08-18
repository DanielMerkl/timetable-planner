import firebase from "./firebase";
import firestore from "./firestore";
import { Timetable } from "../types/interfaces/Timetable";

const fetchTimetables = async (): Promise<Array<Timetable>> => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser === null) throw new Error("Benutzer nicht eingeloggt.");

  try {
    const result = await firestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("timetables")
      .get();

    const savedTimetables = result.docs.map(value => {
      return value.data() as Timetable;
    });
    console.log("savedTimetables: ", savedTimetables);
    return savedTimetables;
  } catch (e) {
    console.error(e);
    throw new Error("Fehler beim Laden der Stundenpläne.");
  }
};

const saveTimetable = async (newTimetable: Timetable) => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser === null) throw new Error("Benutzer nicht eingeloggt.");

  try {
    const newDocRef = firestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("timetables")
      .doc();

    await newDocRef.set({ ...newTimetable, id: newDocRef.id });
    console.log(
      `Stundenplan "${newTimetable.name}" wurde erfolgreich erstellt.`
    );
  } catch (e) {
    console.error(e);
    throw new Error("Fehler beim Speichern des Stundenplans.");
  }
};

const deleteTimetable = async (timetable: Timetable) => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser === null) throw new Error("Benutzer nicht eingeloggt.");

  try {
    await firestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("timetables")
      .doc(timetable.id)
      .delete();
    console.log(`Stundenplan "${timetable.name}" wurde erfolgreich gelöscht.`);
  } catch (e) {
    console.error(e);
    throw new Error("Fehler beim Löschen des Stundenplans.");
  }
};

export default {
  saveTimetable: saveTimetable,
  deleteTimetable: deleteTimetable,
  fetchTimetables: fetchTimetables
};
