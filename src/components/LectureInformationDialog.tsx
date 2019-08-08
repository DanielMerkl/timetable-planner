import React, { FC, useContext } from "react";
import moment from "moment";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { toWeekdayString } from "../utils/toWeekdayString";
import { isPractice } from "../types/interfaces/Practice";
import { InformationDialogContext } from "../context/InformationDialogContext";

const LectureInformationDialog: FC = () => {
  const styles = useStyles();
  const { open, dialogContent, hideInformationDialog } = useContext(
    InformationDialogContext
  );
  const { fullname, weekday, start, end, room, professor } = dialogContent;

  const startString = moment(start).format("HH:mm");
  const endString = moment(end).format("HH:mm");
  const timeString = `${startString} - ${endString} Uhr`;

  return (
    <Dialog open={open} onClose={hideInformationDialog}>
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
