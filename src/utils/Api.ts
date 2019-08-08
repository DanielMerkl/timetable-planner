import { Timetable } from "../types/interfaces/Timetable";
import { Course } from "../types/interfaces/Course";
import { AuthResponse } from "../types/interfaces/AuthResponse";
import authUtils from "./authUtils";

// TODO: Konsolenausgaben der Error-Messages wieder entfernen

const fetchCourses = async () => {
  const response = await fetch("/courses");
  if (!response.ok) {
    const errorMessage = await response.text();
    console.log("fetchCourses - errorMessage: ", errorMessage);
    throw errorMessage || "Fehler beim Laden der Modulauswahl-Daten.";
  }

  const courses: Array<Course> = await response.json();
  console.log("fetchCourses - JsonResponse: ", courses);

  return courses;
};

const register = async (email: string, password: string) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch("/auth/register", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password })
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    console.log("register - errorMessage: ", errorMessage);
    throw errorMessage || "Fehler beim Registrieren.";
  }

  const authResponse: AuthResponse = await response.json();
  console.log("register - jsonResponse: ", authResponse);

  return { token: authResponse.token, userId: authResponse.user.id };
};

const login = async (email: string, password: string) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch("/auth/login", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password })
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    console.log("login - errorMessage: ", errorMessage);
    throw errorMessage || "Fehler beim Einloggen.";
  }

  const authResponse: AuthResponse = await response.json();
  console.log("login - jsonResponse: ", authResponse);

  return { token: authResponse.token, userId: authResponse.user.id };
};

const logout = () => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${authUtils.getToken()}`);

  return fetch("/auth/logout", {
    method: "POST",
    headers: headers
  });
};

const fetchTimetables = async () => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${authUtils.getToken()}`);

  const response = await fetch(`/users/${authUtils.getUserId()}/timetables`, {
    headers: headers
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    console.log("fetchTimetables - errorMessage: ", errorMessage);
    throw errorMessage || "Fehler beim Laden der Stundenpläne.";
  }

  const savedTimetables: Array<Timetable> = await response.json();
  console.log("fetchTimetables-jsonResponse: ", savedTimetables);

  return savedTimetables;
};

const addTimetable = async (timetable: Timetable) => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${authUtils.getToken()}`);
  headers.append("Content-Type", "application/json");

  const response = await fetch(`/users/${authUtils.getUserId()}/timetables`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(timetable)
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    console.log("addTimetable - errorMessage: ", errorMessage);
    throw errorMessage || "Fehler beim Erstellen eines neuen Stundenplans.";
  }
};

// TODO: Prozess zum Bearbeiten des Stundenplans im Frontend implementieren
// const editTimetable = async (token: string, timetable: Timetable) => {
//   const headers = new Headers();
//   headers.append("Authorization", `Bearer ${token}`);
//   headers.append("Content-Type", "application/json");
//
//   const response = await fetch(`/timetables/${timetable.id}`, {
//     method: "PUT",
//     headers: headers,
//     body: JSON.stringify(timetable)
//   });
//   if (!response.ok) throw "Fehler beim Speichern des Stundenplans.";
// };

const deleteTimetable = async (timetableId: number) => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${authUtils.getToken()}`);

  const path = `/users/${authUtils.getUserId()}/timetables/${timetableId}`;
  const response = await fetch(path, {
    method: "DELETE",
    headers: headers
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    console.log("deleteTimetable - errorMessage: ", errorMessage);
    throw errorMessage || "Fehler beim Löschen des Stundenplans.";
  }
};

export default {
  fetchCourses: fetchCourses,
  register: register,
  login: login,
  logout: logout,
  fetchTimetables: fetchTimetables,
  addTimetable: addTimetable,
  // editTimetable: editTimetable,
  deleteTimetable: deleteTimetable
};
