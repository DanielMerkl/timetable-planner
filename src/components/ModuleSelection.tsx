import React, { FC, useEffect, useState } from "react";

import {
  Divider,
  Drawer,
  IconButton,
  LinearProgress,
  Typography
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import CourseListItem from "./ListItems/CourseListItem";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, AppState } from "../store/store";
import { updateCoursesAction } from "../store/courses/coursesActions";
import { Dispatch } from "redux";
import { fakeCoursesData } from "../utils/fakeCoursesData";

interface Props {
  open: boolean;
  setModuleSelectionOpen: (open: boolean) => void;
}

const ModuleSelection: FC<Props> = ({ open, setModuleSelectionOpen }) => {
  const styles = useStyles();
  const courses = useSelector((state: AppState) => state.courses.courses);
  const dispatch = useDispatch<Dispatch<AppActions>>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setTimeout(() => {
        dispatch(updateCoursesAction(fakeCoursesData));
        setLoading(false);
      }, 150);
    };

    fetchCourses();
  }, [dispatch]);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      PaperProps={{ style: { maxWidth: 296 } }}
    >
      <div className={styles.drawerHeader} style={{ width: 280 }}>
        <Typography variant="h6" style={{ marginLeft: 8 }}>
          Modul-Auswahl
        </Typography>
        <IconButton onClick={() => setModuleSelectionOpen(false)}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      {loading && <LinearProgress />}
      <div style={{ overflowY: "auto" }}>
        {courses.map((course, courseIndex, courses) => (
          <CourseListItem
            key={course.id}
            courses={courses}
            courseIndex={courseIndex}
            course={course}
          />
        ))}
      </div>
    </Drawer>
  );
};

const useStyles = makeStyles({
  drawerHeader: {
    display: "grid",
    gridTemplateColumns: "auto 48px",
    gridGap: 8,
    margin: 8,
    alignItems: "center"
  }
});

export default ModuleSelection;
