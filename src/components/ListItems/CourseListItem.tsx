import React, { FC, useState } from "react";

import { Collapse, List, ListItem, ListItemText } from "@material-ui/core";

import { Course } from "../../types/interfaces/Course";
import SemesterListItem from "./SemesterListItem";

interface Props {
  course: Course;
  courseIndex: number;
  courses: Array<Course>;
}

const CourseListItem: FC<Props> = ({ courses, courseIndex, course }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (course.semesters.length > 0) {
      setExpanded(prevState => !prevState);
    }
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={course.name} />
      </ListItem>
      <Collapse in={expanded} timeout="auto" mountOnEnter unmountOnExit>
        <List disablePadding>
          {course.semesters.map((semester, semesterIndex) => (
            <SemesterListItem
              key={semester.id}
              courses={courses}
              courseIndex={courseIndex}
              semester={semester}
              semesterIndex={semesterIndex}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CourseListItem;
