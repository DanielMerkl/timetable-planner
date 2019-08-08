import { Course } from "../types/interfaces/Course";

export const fakeOptimalCourses: Array<Course> = [
  {
    id: 7,
    name: "Bachelor Informatik",
    semesters: [
      {
        id: 1,
        number: 1,
        modules: []
      },
      {
        id: 2,
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
                start: new Date("2019-03-11T08:00:00"),
                end: new Date("2019-03-11T09:30:00"),
                weekday: 1,
                visible: true
              }
            ],
            practices: [
              {
                group: 1,
                id: 2,
                fullname: "Software Engineering Übung",
                shortname: "SE Ü",
                professor: "Riedhammer",
                room: "HQ205",
                start: new Date("2019-03-11T14:00:00"),
                end: new Date("2019-03-11T15:30:00"),
                weekday: 1,
                visible: true
              },
              {
                group: 2,
                id: 3,
                fullname: "Software Engineering Übung",
                shortname: "SE Ü",
                professor: "Riedhammer",
                room: "HQ205",
                start: new Date("2019-03-13T08:00:00"),
                end: new Date("2019-03-13T09:30:00"),
                weekday: 3,
                visible: false
              },
              {
                group: 3,
                id: 4,
                fullname: "Software Engineering Übung",
                shortname: "SE Ü",
                professor: "Riedhammer",
                room: "HQ205",
                start: new Date("2019-03-14T14:00:00"),
                end: new Date("2019-03-14T15:30:00"),
                weekday: 4,
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
                start: new Date("2019-03-12T11:30:00"),
                end: new Date("2019-03-12T13:00:00"),
                weekday: 2,
                visible: true
              },
              {
                id: 6,
                fullname: "Mathematik II",
                shortname: "Math II",
                professor: "Scherr",
                room: "HQ105",
                start: new Date("2019-03-14T11:30:00"),
                end: new Date("2019-03-14T13:00:00"),
                weekday: 4,
                visible: true
              }
            ],
            practices: [
              {
                group: 1,
                id: 7,
                fullname: "Mathematik II Übung",
                shortname: "Math II Ü",
                professor: "Scherr",
                room: "HQ209",
                start: new Date("2019-03-11T14:00:00"),
                end: new Date("2019-03-11T15:30:00"),
                weekday: 1,
                visible: false
              },
              {
                group: 2,
                id: 8,
                fullname: "Mathematik II Übung",
                shortname: "Math II Ü",
                professor: "Scherr",
                room: "HQ305",
                start: new Date("2019-03-14T14:00:00"),
                end: new Date("2019-03-14T15:30:00"),
                weekday: 4,
                visible: true
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
                start: new Date("2019-03-11T15:45:00"),
                end: new Date("2019-03-11T17:15:00"),
                weekday: 1,
                visible: true
              },
              {
                id: 10,
                fullname: "Programmieren II",
                shortname: "Prog II",
                professor: "Götzelmann",
                room: "HW307",
                start: new Date("2019-03-15T11:30:00"),
                end: new Date("2019-03-15T13:00:00"),
                weekday: 5,
                visible: true
              }
            ],
            practices: [
              {
                group: 1,
                id: 11,
                fullname: "Programmieren II Übung",
                shortname: "Prog II Ü",
                professor: "Götzelmann",
                room: "HQ205",
                start: new Date("2019-03-11T11:30:00"),
                end: new Date("2019-03-11T13:00:00"),
                weekday: 1,
                visible: true
              },
              {
                group: 2,
                id: 12,
                fullname: "Programmieren II Übung",
                shortname: "Prog II Ü",
                professor: "Götzelmann",
                room: "HQ211",
                start: new Date("2019-03-15T09:45:00"),
                end: new Date("2019-03-15T11:15:00"),
                weekday: 5,
                visible: false
              },
              {
                group: 3,
                id: 13,
                fullname: "Programmieren II Übung",
                shortname: "Prog II Ü",
                professor: "Götzelmann",
                room: "HQ211",
                start: new Date("2019-03-15T14:00:00"),
                end: new Date("2019-03-15T15:30:00"),
                weekday: 5,
                visible: false
              },
              {
                group: 4,
                id: 14,
                fullname: "Programmieren II Übung",
                shortname: "Prog II Ü",
                professor: "Hartmann",
                room: "HQ205",
                start: new Date("2019-03-15T14:00:00"),
                end: new Date("2019-03-15T15:30:00"),
                weekday: 5,
                visible: false
              }
            ]
          },
          {
            id: 4,
            name: "Theoretische Informatik",
            lectures: [
              {
                id: 15,
                fullname: "Theoretische Informatik",
                shortname: "TI",
                professor: "Kröner",
                room: "HQ013",
                start: new Date("2019-03-12T15:45:00"),
                end: new Date("2019-03-12T17:15:00"),
                weekday: 2,
                visible: true
              },
              {
                id: 16,
                fullname: "Theoretische Informatik",
                shortname: "TI",
                professor: "Kröner",
                room: "HW307",
                start: new Date("2019-03-13T11:30:00"),
                end: new Date("2019-03-13T13:00:00"),
                weekday: 3,
                visible: true
              }
            ],
            practices: [
              {
                group: 1,
                id: 17,
                fullname: "Theoretische Informatik Übung",
                shortname: "TI Ü",
                professor: "Kröner",
                room: "HQ305",
                start: new Date("2019-03-12T14:00:00"),
                end: new Date("2019-03-12T15:30:00"),
                weekday: 2,
                visible: true
              },
              {
                group: 1,
                id: 18,
                fullname: "Theoretische Informatik Übung",
                shortname: "TI Ü",
                professor: "Kröner",
                room: "HQ406",
                start: new Date("2019-03-14T09:45:00"),
                end: new Date("2019-03-14T11:15:00"),
                weekday: 4,
                visible: false
              },
              {
                group: 1,
                id: 19,
                fullname: "Theoretische Informatik Übung",
                shortname: "TI Ü",
                professor: "Kröner",
                room: "HQ306",
                start: new Date("2019-03-15T09:45:00"),
                end: new Date("2019-03-15T11:15:00"),
                weekday: 5,
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
                group: 3,
                id: 20,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Raimond",
                room: "HW209",
                start: new Date("2019-03-11T09:45:00"),
                end: new Date("2019-03-11T11:15:00"),
                weekday: 1,
                visible: false
              },
              {
                group: 3,
                id: 21,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Raimond",
                room: "HQ406",
                start: new Date("2019-03-15T08:00:00"),
                end: new Date("2019-03-15T09:30:00"),
                weekday: 5,
                visible: false
              },
              {
                group: 2,
                id: 22,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Coleman",
                room: "HQ306",
                start: new Date("2019-03-11T09:45:00"),
                end: new Date("2019-03-11T11:15:00"),
                weekday: 1,
                visible: true
              },
              {
                group: 1,
                id: 23,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Coleman",
                room: "HQ407",
                start: new Date("2019-03-11T11:30:00"),
                end: new Date("2019-03-11T13:00:00"),
                weekday: 1,
                visible: false
              },
              {
                group: 4,
                id: 24,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Raimond",
                room: "HQ405",
                start: new Date("2019-03-11T11:30:00"),
                end: new Date("2019-03-11T13:00:00"),
                weekday: 1,
                visible: false
              },
              {
                group: 2,
                id: 25,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Coleman",
                room: "HQ306",
                start: new Date("2019-03-12T09:45:00"),
                end: new Date("2019-03-12T11:15:00"),
                weekday: 2,
                visible: true
              },
              {
                group: 1,
                id: 26,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Coleman",
                room: "HQ110",
                start: new Date("2019-03-13T09:45:00"),
                end: new Date("2019-03-13T11:15:00"),
                weekday: 3,
                visible: false
              },
              {
                group: 4,
                id: 27,
                fullname: "Englisch III/IV",
                shortname: "Engl",
                professor: "Raimond",
                room: "HQ305",
                start: new Date("2019-03-13T09:45:00"),
                end: new Date("2019-03-13T11:15:00"),
                weekday: 3,
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
    id: 8,
    name: "Bachelor Wirtschaftsinformatik",
    semesters: []
  },
  {
    id: 9,
    name: "Bachelor Medieninformatik",
    semesters: []
  },
  {
    id: 10,
    name: "Master Informatik",
    semesters: []
  },
  {
    id: 11,
    name: "Master Wirtschaftsinformatik",
    semesters: []
  },
  {
    id: 12,
    name: "Master Medieninformatik",
    semesters: []
  }
];
