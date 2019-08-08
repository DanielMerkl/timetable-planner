import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";

import {
  Checkbox,
  Collapse,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import LectureListItem from "./LectureListItem";
import { Module } from "../../types/interfaces/Module";
import { Course } from "../../types/interfaces/Course";
import { updateCoursesAction } from "../../store/courses/coursesActions";

interface Props {
  module: Module;
  courses: Array<Course>;
  courseIndex: number;
  semesterIndex: number;
  moduleIndex: number;
}

const ModuleListItem: FC<Props> = ({
  module,
  courses,
  moduleIndex,
  semesterIndex,
  courseIndex
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const { lectures, practices } = module;

  const handleListItemClick = () => {
    if (practices.length > 0 || lectures.length > 0) {
      setExpanded(prevState => !prevState);
    }
  };

  const handleCheckboxClick = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedCourses: Array<Course> = JSON.parse(JSON.stringify(courses));

    practices.forEach((practice, lectureIndex) => {
      updatedCourses[courseIndex].semesters[semesterIndex].modules[
        moduleIndex
      ].practices[lectureIndex].visible = event.target.checked;
    });

    lectures.forEach((lecture, lectureIndex) => {
      updatedCourses[courseIndex].semesters[semesterIndex].modules[
        moduleIndex
      ].lectures[lectureIndex].visible = event.target.checked;
    });

    dispatch(updateCoursesAction(updatedCourses));
  };

  const checked = (): boolean => {
    return (
      practices.every(practice => practice.visible) &&
      lectures.every(lecture => lecture.visible)
    );
  };

  return (
    <>
      <ListItem button onClick={handleListItemClick}>
        <ListItemText
          primary={module.name}
          className={styles.listItemText}
          primaryTypographyProps={{ noWrap: true }}
        />
        {(practices.length > 0 || lectures.length > 0) && (
          <ListItemSecondaryAction>
            <Checkbox
              color="primary"
              className={styles.checkbox}
              checked={checked()}
              onChange={handleCheckboxClick}
            />
          </ListItemSecondaryAction>
        )}
      </ListItem>
      <Collapse in={expanded} timeout="auto" mountOnEnter unmountOnExit>
        <List disablePadding>
          {lectures.map(lecture => (
            <LectureListItem key={lecture.id} lecture={lecture} />
          ))}
        </List>
        <List disablePadding>
          {practices.map(practice => (
            <LectureListItem key={practice.id} lecture={practice} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

const useStyles = makeStyles({
  listItemText: {
    marginLeft: 32
  },
  checkbox: {
    marginTop: -8,
    marginBottom: -8,
    marginRight: 8
  }
});

export default ModuleListItem;
