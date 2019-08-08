import { Course } from "../types/interfaces/Course";
import { Weekday } from "../types/enums/Weekday";
import { time } from "./time";

export const fakeCoursesData: Array<Course> = [
  {
    id: 1,
    name: "Bachelor Informatik",
    semesters: [
      {
        id: 1,
        number: 1,
        modules: []
      },
      {
        id: 44,
        number: 2,
        modules: [
          {
            id: 1,
            name: "Software Engineering",
            lectures: [
              {
                id: 1,
                fullname: "Software Engineering",
                shortname: "SE",
                professor: "Riedhammer",
                room: "HQ007",
                start: time("08:00"),
                end: time("09:30"),
                weekday: Weekday.Monday,
                visible: false
              }
            ],
            practices: [
              {
                id: 2,
                group: 1,
                fullname: "Software Engineering Übung",
                shortname: "SE Ü",
                professor: "Riedhammer",
                room: "HQ205",
                start: time("14:00"),
                end: time("15:30"),
                weekday: Weekday.Monday,
                visible: false
              },
              {
                id: 3,
                group: 2,
                fullname: "Software Engineering Übung",
                shortname: "SE Ü",
                professor: "Riedhammer",
                room: "HQ205",
                start: time("08:00"),
                end: time("09:30"),
                weekday: Weekday.Wednesday,
                visible: false
              },
              {
                id: 4,
                group: 3,
                fullname: "Software Engineering Übung",
                shortname: "SE Ü",
                professor: "Riedhammer",
                room: "HQ205",
                start: time("14:00"),
                end: time("15:30"),
                weekday: Weekday.Thursday,
                visible: false
              }
            ]
          },
          {
            id: 2,
            name: "Mathematik II",
            lectures: [
              {
                id: 5,
                fullname: "Mathematik II",
                shortname: "Math II",
                professor: "Scherr",
                room: "HW307",
                start: time("11:30"),
                end: time("13:00"),
                weekday: Weekday.Tuesday,
                visible: false
              },
              {
                id: 6,
                fullname: "Mathematik II",
                shortname: "Math II",
                professor: "Scherr",
                room: "HQ105",
                start: time("11:30"),
                end: time("13:00"),
                weekday: Weekday.Thursday,
                visible: false
              }
            ],
            practices: [
              {
                id: 7,
                group: 1,
                fullname: "Mathematik II Übung",
                shortname: "Math II Ü",
                professor: "Scherr",
                room: "HQ209",
                start: time("14:00"),
                end: time("15:30"),
                weekday: Weekday.Monday,
                visible: false
              },
              {
                id: 8,
                group: 2,
                fullname: "Mathematik II Übung",
                shortname: "Math II Ü",
                professor: "Scherr",
                room: "HQ305",
                start: time("14:00"),
                end: time("15:30"),
                weekday: Weekday.Thursday,
                visible: false
              }
            ]
          },
          {
            id: 3,
            name: "Programmieren II",
            lectures: [
              {
                id: 9,
                fullname: "Programmieren II",
                shortname: "Prog II",
                professor: "Götzelmann",
                room: "HQ013",
                start: time("15:45"),
                end: time("17:15"),
                weekday: Weekday.Monday,
                visible: false
              },
              {
                id: 10,
                fullname: "Programmieren II",
                shortname: "Prog II",
                professor: "Götzelmann",
                room: "HW307",
                start: time("11:30"),
                end: time("13:00"),
                weekday: Weekday.Friday,
                visible: false
              }
            ],
            practices: [
              {
                id: 13,
                group: 1,
                fullname: "Programmieren II Übung",
                shortname: "Prog II Ü",
                professor: "Götzelmann",
                room: "HQ205",
                start: time("11:30"),
                end: time("13:00"),
                weekday: Weekday.Monday,
                visible: false
              },
              {
                id: 11,
                group: 2,
                fullname: "Programmieren II Übung",
                shortname: "Prog II Ü",
                professor: "Götzelmann",
                room: "HQ211",
                start: time("09:45"),
                end: time("11:15"),
                weekday: Weekday.Friday,
                visible: false
              },
              {
                id: 12,
                group: 3,
                fullname: "Programmieren II Übung",
                shortname: "Prog II Ü",
                professor: "Götzelmann",
                room: "HQ211",
                start: time("14:00"),
                end: time("15:30"),
                weekday: Weekday.Friday,
                visible: false
              },
              {
                id: 13,
                group: 4,
                fullname: "Programmieren II Übung",
                shortname: "Prog II Ü",
                professor: "Hartmann",
                room: "HQ205",
                start: time("14:00"),
                end: time("15:30"),
                weekday: Weekday.Friday,
                visible: false
              }
            ]
          },
          {
            id: 4,
            name: "Theoretische Informatik",
            lectures: [
              {
                id: 14,
                fullname: "Theoretische Informatik",
                shortname: "TI",
                professor: "Kröner",
                room: "HQ013",
                start: time("15:45"),
                end: time("17:15"),
                weekday: Weekday.Tuesday,
                visible: false
              },
              {
                id: 15,
                fullname: "Theoretische Informatik",
                shortname: "TI",
                professor: "Kröner",
                room: "HW307",
                start: time("11:30"),
                end: time("13:00"),
                weekday: Weekday.Wednesday,
                visible: false
              }
            ],
            practices: [
              {
                id: 16,
                group: 1,
                fullname: "Theoretische Informatik Übung",
                shortname: "TI Ü",
                professor: "Kröner",
                room: "HQ305",
                start: time("14:00"),
                end: time("15:30"),
                weekday: Weekday.Tuesday,
                visible: false
              },
              {
                id: 17,
                group: 1,
                fullname: "Theoretische Informatik Übung",
                shortname: "TI Ü",
                professor: "Kröner",
                room: "HQ406",
                start: time("09:45"),
                end: time("11:15"),
                weekday: Weekday.Thursday,
                visible: false
              },
              {
                id: 18,
                group: 1,
                fullname: "Theoretische Informatik Übung",
                shortname: "TI Ü",
                professor: "Kröner",
                room: "HQ306",
                start: time("09:45"),
                end: time("11:15"),
                weekday: Weekday.Friday,
                visible: false
              }
            ]
          },
          {
            id: 5,
            name: "Englisch III/IV",
            lectures: [],
            practices: [
              {
                id: 19,
                group: 3,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Raimond",
                room: "HW209",
                start: time("09:45"),
                end: time("11:15"),
                weekday: Weekday.Monday,
                visible: false
              },
              {
                id: 20,
                group: 3,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Raimond",
                room: "HQ406",
                start: time("08:00"),
                end: time("09:30"),
                weekday: Weekday.Friday,
                visible: false
              },
              {
                id: 42,
                group: 2,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Coleman",
                room: "HQ306",
                start: time("09:45"),
                end: time("11:15"),
                weekday: Weekday.Monday,
                visible: false
              },
              {
                id: 21,
                group: 1,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Coleman",
                room: "HQ407",
                start: time("11:30"),
                end: time("13:00"),
                weekday: Weekday.Monday,
                visible: false
              },
              {
                id: 22,
                group: 4,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Raimond",
                room: "HQ405",
                start: time("11:30"),
                end: time("13:00"),
                weekday: Weekday.Monday,
                visible: false
              },
              {
                id: 23,
                group: 2,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Coleman",
                room: "HQ306",
                start: time("09:45"),
                end: time("11:15"),
                weekday: Weekday.Tuesday,
                visible: false
              },
              {
                id: 24,
                group: 1,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Coleman",
                room: "HQ110",
                start: time("09:45"),
                end: time("11:15"),
                weekday: Weekday.Wednesday,
                visible: false
              },
              {
                id: 25,
                group: 4,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Raimond",
                room: "HQ305",
                start: time("09:45"),
                end: time("11:15"),
                weekday: Weekday.Wednesday,
                visible: false
              }
            ]
          }
        ]
      },
      {
        id: 3,
        number: 3,
        modules: []
      },
      {
        id: 4,
        number: 4,
        modules: []
      },
      {
        id: 5,
        number: 5,
        modules: []
      },
      {
        id: 6,
        number: 6,
        modules: []
      },
      {
        id: 7,
        number: 7,
        modules: []
      }
    ]
  },
  {
    id: 2,
    name: "Bachelor Wirtschaftsinformatik",
    semesters: []
  },
  {
    id: 3,
    name: "Bachelor Medieninformatik",
    semesters: []
  },
  {
    id: 4,
    name: "Master Informatik",
    semesters: []
  },
  {
    id: 5,
    name: "Master Wirtschaftsinformatik",
    semesters: []
  },
  {
    id: 6,
    name: "Master Medieninformatik",
    semesters: []
  }
];
