import { Lecture } from "../../types/interfaces/Lecture";

export const OPEN_INFORMATION_DIALOG = "OPEN_INFORMATION_DIALOG";
export const CLOSE_INFORMATION_DIALOG = "CLOSE_INFORMATION_DIALOG";

export interface OpenInformationDialogAction {
  type: typeof OPEN_INFORMATION_DIALOG;
  dialogContent: Lecture;
}

export interface CloseInformationDialogAction {
  type: typeof CLOSE_INFORMATION_DIALOG;
}

export type InformationDialogActions =
  | OpenInformationDialogAction
  | CloseInformationDialogAction;

export interface InformationDialogState {
  open: boolean;
  dialogContent: Lecture;
}
