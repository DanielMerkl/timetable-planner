import React, { FC, useState } from "react";

import ModuleSelection from "../components/ModuleSelection";
import Calendar from "../components/Calendar";
import LectureInformationDialog from "../components/LectureInformationDialog";
import ApplicationBar from "../components/ApplicationBar";
import CalendarActions from "../components/CalendarActions";
import SaveTimetableDialog from "../components/SaveTimetableDialog";
import LoadTimetableDialog from "../components/LoadTimetableDialog";

const TimetablePage: FC = () => {
  const [moduleSelectionOpen, setModuleSelectionOpen] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [loadDialogOpen, setLoadDialogOpen] = useState(false);

  let appWidth = "100vw";
  let marginLeft = "0px";
  const moduleSelectionWidth = "296px";
  if (moduleSelectionOpen) {
    appWidth = `calc(100vw - ${moduleSelectionWidth})`;
    marginLeft = "296px";
  }

  return (
    <div
      style={{
        transition: "all 200ms ease-out",
        width: appWidth,
        marginLeft: marginLeft
      }}
    >
      <ApplicationBar
        moduleSelectionOpen={moduleSelectionOpen}
        setModuleSelectionOpen={setModuleSelectionOpen}
      />
      <CalendarActions
        openSaveTimetableDialog={() => setSaveDialogOpen(true)}
        openLoadTimetableDialog={() => setLoadDialogOpen(true)}
      />
      <Calendar />
      <ModuleSelection
        open={moduleSelectionOpen}
        setModuleSelectionOpen={setModuleSelectionOpen}
      />
      <LectureInformationDialog />
      <SaveTimetableDialog
        open={saveDialogOpen}
        closeDialog={() => setSaveDialogOpen(false)}
      />
      <LoadTimetableDialog
        open={loadDialogOpen}
        closeDialog={() => setLoadDialogOpen(false)}
      />
    </div>
  );
};

export default TimetablePage;
