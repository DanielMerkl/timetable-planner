import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAZfSQUf92HO103vDXvWW4G8TTly0fQZU",
  authDomain: "timetable-planner-681e6.firebaseapp.com",
  databaseURL: "https://timetable-planner-681e6.firebaseio.com",
  projectId: "timetable-planner-681e6",
  storageBucket: "",
  messagingSenderId: "353525849041",
  appId: "1:353525849041:web:7c1d4f500675c657"
};

const firebase = app.initializeApp(firebaseConfig);

export default firebase;
