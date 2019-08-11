import { Lecture } from "../../types/interfaces/Lecture";
import {
  CLOSE_INFORMATION_DIALOG,
  CloseInformationDialogAction,
  OPEN_INFORMATION_DIALOG,
  OpenInformationDialogAction
} from "./informationDialogTypes";

export const openInformationDialogAction = (
  dialogContent: Lecture
): OpenInformationDialogAction => ({
  type: OPEN_INFORMATION_DIALOG,
  dialogContent
});

export const closeInformationDialogAction = (): CloseInformationDialogAction => ({
  type: CLOSE_INFORMATION_DIALOG
});
