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

import { Semester } from "../../types/interfaces/Semester";
import ModuleListItem from "./ModuleListItem";
import { Course } from "../../types/interfaces/Course";
import { updateCoursesAction } from "../../store/courses/coursesActions";

interface SemesterListItemProps {
  semester: Semester;
  courses: Array<Course>;
  semesterIndex: number;
  courseIndex: number;
}

const SemesterListItem: FC<SemesterListItemProps> = ({
  semester,
  courseIndex,
  courses,
  semesterIndex
}) => {
  const styles = useStyles();
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const { modules } = semester;

  const handleListItemClick = () => {
    if (modules.length > 0) {
      setExpanded(prevState => !prevState);
    }
  };

  const handleCheckboxClick = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedCourses: Array<Course> = JSON.parse(JSON.stringify(courses));

    modules.forEach((module, moduleIndex) => {
      module.practices.forEach((practice, lectureIndex) => {
        updatedCourses[courseIndex].semesters[semesterIndex].modules[
          moduleIndex
        ].practices[lectureIndex].visible = event.target.checked;
      });

      module.lectures.forEach((lecture, lectureIndex) => {
        updatedCourses[courseIndex].semesters[semesterIndex].modules[
          moduleIndex
        ].lectures[lectureIndex].visible = event.target.checked;
      });
    });

    dispatch(updateCoursesAction(updatedCourses));
  };

  const checked = (): boolean => {
    let result = true;

    modules.forEach(module => {
      module.lectures.forEach(lecture => {
        if (!lecture.visible) {
          result = false;
        }
      });

      module.practices.forEach(practice => {
        if (!practice.visible) {
          result = false;
        }
      });
    });

    return result;
  };

  const shouldDisplayCheckbox = (): boolean => {
    return modules.some(modules => {
      return modules.lectures.length > 0 || modules.practices.length > 0;
    });
  };

  return (
    <>
      <ListItem button onClick={handleListItemClick}>
        <ListItemText
          primary={`Semester ${semester.number}`}
          className={styles.listItemText}
        />
        {shouldDisplayCheckbox() && (
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
          {modules.map((module, moduleIndex) => (
            <ModuleListItem
              key={module.id}
              module={module}
              courseIndex={courseIndex}
              courses={courses}
              semesterIndex={semesterIndex}
              moduleIndex={moduleIndex}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

const useStyles = makeStyles({
  listItemText: {
    marginLeft: 16
  },
  checkbox: {
    marginTop: -8,
    marginBottom: -8,
    marginRight: 8
  }
});

export default SemesterListItem;
