import React, { createContext, FC, useState } from "react";
import { Practice } from "../types/interfaces/Practice";
import { Lecture } from "../types/interfaces/Lecture";
import { Weekday } from "../types/enums/Weekday";

interface Context {
  open: boolean;
  dialogContent: Lecture | Practice;
  showInformationDialog: (content: Lecture | Practice) => void;
  hideInformationDialog: () => void;
}

const initialDialogContent: Lecture = {
  id: 123,
  visible: false,
  weekday: Weekday.Saturday,
  shortname: "Bana",
  fullname: "Banane",
  room: "HQ123",
  professor: "Prof",
  start: new Date(),
  end: new Date()
};

export const InformationDialogContext = createContext<Context>({
  open: false,
  dialogContent: initialDialogContent,
  showInformationDialog: () => {},
  hideInformationDialog: () => {}
});

export const InformationDialogContextProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<Lecture | Practice>(
    initialDialogContent
  );

  const handleShowDialog = (content: Lecture | Practice) => {
    setDialogContent(content);
    setOpen(true);
  };

  return (
    <InformationDialogContext.Provider
      value={{
        open,
        dialogContent,
        showInformationDialog: handleShowDialog,
        hideInformationDialog: () => setOpen(false)
      }}
    >
      {children}
    </InformationDialogContext.Provider>
  );
};
