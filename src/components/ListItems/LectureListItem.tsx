import React, { FC } from "react";
import { useDispatch } from "react-redux";

import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import { Lecture } from "../../types/interfaces/Lecture";
import {
  updateCoursesWithIdAction,
  updateHoveredEventAction
} from "../../store/courses/coursesActions";
import { openInformationDialogAction } from "../../store/informationDialog/informationDialogActions";

interface Props {
  lecture: Lecture;
}

const LectureListItem: FC<Props> = ({ lecture }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const handleListItemClick = () => {
    dispatch(updateCoursesWithIdAction(lecture.id));
    dispatch(updateHoveredEventAction(lecture.id));
  };

  const handleInformationIconClick = () => {
    dispatch(updateHoveredEventAction(-1));
    dispatch(openInformationDialogAction(lecture));
  };

  const handleMouseEnter = () => {
    if (lecture.visible) {
      dispatch(updateHoveredEventAction(lecture.id));
    }
  };

  const handleMouseLeave = () => {
    dispatch(updateHoveredEventAction(-1));
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ListItem button onClick={handleListItemClick}>
        <Checkbox
          color="primary"
          className={styles.checkbox}
          checked={lecture.visible}
        />
        <ListItemText primary={lecture.shortname} />

        <ListItemSecondaryAction>
          <IconButton
            className={styles.informationIcon}
            onClick={handleInformationIconClick}
          >
            <InfoOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};

const useStyles = makeStyles({
  checkbox: {
    marginLeft: 32,
    marginTop: -8,
    marginBottom: -8
  },
  informationIcon: {
    marginRight: 8
  }
});

export default LectureListItem;
