import { Course } from "../types/interfaces/Course";

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

export default {
  fetchCourses: fetchCourses
};
