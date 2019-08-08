import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/de";

import { CalendarEvent } from "../types/interfaces/CalendarEvent";
import { time } from "../utils/time";
import { Course } from "../types/interfaces/Course";
import { PracticeColorMap } from "../types/interfaces/PracticeColorMap";
import { toCalendarEvent } from "../utils/toCalendarEvent";
import { practiceColors } from "../utils/practiceColors";
import { Lecture } from "../types/interfaces/Lecture";
import { isPractice, Practice } from "../types/interfaces/Practice";
import { AppState } from "../store/store";
import { updateCoursesWithIdAction } from "../store/courses/coursesActions";

const localizer = momentLocalizer(moment);

const Calendar: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const courses = useSelector((state: AppState) => state.courses.courses);
  const hoveredEventId = useSelector((s: AppState) => s.courses.hoveredEventId);
  const { events, practiceColorMap } = useEventsAndColorMap(courses);

  const handleSelectEvent = (event: CalendarEvent) => {
    dispatch(updateCoursesWithIdAction(event.id));
  };

  return (
    <div className={styles.calendarWrapper}>
      <BigCalendar
        localizer={localizer}
        components={{
          event: ({ event }) => (
            <>
              <Typography noWrap color="inherit">
                {event.resource.shortname}
              </Typography>
              <Typography color="inherit">{event.resource.room}</Typography>
            </>
          )
        }}
        events={events}
        defaultView="week"
        views={["week"]}
        min={time("08:00")}
        max={time("19:00")}
        defaultDate={moment("01.04.2019", "dd.MM.yyyy").toDate()}
        toolbar={false}
        formats={{ dayFormat: "dddd" }}
        onSelectEvent={handleSelectEvent}
        eventPropGetter={({ resource }) => {
          return customEventPropGetter(
            resource,
            hoveredEventId,
            practiceColorMap
          );
        }}
      />
    </div>
  );
};

const useStyles = makeStyles({
  calendarWrapper: {
    height: "calc(100vh - 48px - 36px - 16px - 2 * 32px)",
    margin: 32,
    marginTop: 16
  }
});

export default Calendar;

const useEventsAndColorMap = (courses: Array<Course>) => {
  const events: Array<CalendarEvent> = [];
  const practiceColorMap: PracticeColorMap = {};

  let i = 0;

  courses.forEach(course => {
    course.semesters.forEach(semester => {
      semester.modules.forEach(module => {
        module.lectures.forEach(lecture => {
          if (lecture.visible) {
            events.push(toCalendarEvent(lecture));
          }
        });

        module.practices.forEach(practice => {
          if (practice.visible) {
            events.push(toCalendarEvent(practice));
            if (!practiceColorMap[practice.fullname]) {
              practiceColorMap[practice.fullname] = practiceColors[i++];
            }
          }
        });
      });
    });
  });

  return { events, practiceColorMap };
};

const customEventPropGetter = (
  resource: Lecture | Practice,
  hoveredEventId: number,
  practiceColorMap: PracticeColorMap
) => {
  let customEventStyle = {};

  if (resource.id === hoveredEventId) {
    customEventStyle = {
      ...customEventStyle,
      boxShadow:
        "0 12px 17px 2px rgba(0,0,0,0.14), " +
        "0 5px 22px 4px rgba(0,0,0,0.12), " +
        "0 7px 8px -4px rgba(0,0,0,0.20)"
    };
  }

  if (isPractice(resource) && practiceColorMap) {
    customEventStyle = {
      ...customEventStyle,
      backgroundColor: practiceColorMap[resource.fullname]
    };
  }

  return { style: customEventStyle };
};
