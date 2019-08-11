import React, { Dispatch, FC } from "react";
import moment from "moment";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { toWeekdayString } from "../utils/toWeekdayString";
import { isPractice } from "../types/interfaces/Practice";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, AppState } from "../store/store";
import { closeInformationDialogAction } from "../store/informationDialog/informationDialogActions";

const LectureInformationDialog: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch<Dispatch<AppActions>>();
  const open = useSelector((s: AppState) => s.informationDialog.open);
  const dialogContent = useSelector(
    (s: AppState) => s.informationDialog.dialogContent
  );
  const { fullname, weekday, start, end, room, professor } = dialogContent;

  const startString = moment(start).format("HH:mm");
  const endString = moment(end).format("HH:mm");
  const timeString = `${startString} - ${endString} Uhr`;

  return (
    <Dialog
      open={open}
      onClose={() => dispatch(closeInformationDialogAction())}
    >
      <DialogTitle>{fullname}</DialogTitle>
      <DialogContent>
        <div className={styles.contentGridWrapper}>
          {isPractice(dialogContent) && (
            <>
              <Typography>Gruppe</Typography>
              <Typography>{dialogContent.group}</Typography>
            </>
          )}
          <Typography>Wochentag</Typography>
          <Typography>{toWeekdayString(weekday)}</Typography>
          <Typography>Uhrzeit</Typography>
          <Typography>{timeString}</Typography>
          <Typography>Raum</Typography>
          <Typography>{room}</Typography>
          <Typography>Professor</Typography>
          <Typography>{professor}</Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const useStyles = makeStyles({
  contentGridWrapper: {
    display: "grid",
    gridGap: 8,
    gridTemplateColumns: "1fr 1fr"
  }
});

export default LectureInformationDialog;
