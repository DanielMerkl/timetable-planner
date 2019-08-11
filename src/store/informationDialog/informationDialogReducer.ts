import {
  InformationDialogActions,
  InformationDialogState
} from "./informationDialogTypes";
import { Weekday } from "../../types/enums/Weekday";

const initialInformationDialogState: InformationDialogState = {
  open: false,
  dialogContent: {
    id: 123,
    visible: false,
    weekday: Weekday.Saturday,
    shortname: "Bana",
    fullname: "Banane",
    room: "HQ123",
    professor: "Prof",
    start: new Date(),
    end: new Date()
  }
};

export const informationDialogReducer = (
  state: InformationDialogState = initialInformationDialogState,
  action: InformationDialogActions
): InformationDialogState => {
  switch (action.type) {
    case "OPEN_INFORMATION_DIALOG":
      return { ...state, open: true, dialogContent: action.dialogContent };
    case "CLOSE_INFORMATION_DIALOG":
      return { ...state, open: false };
    default:
      return state;
  }
};
