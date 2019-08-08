import moment from "moment";

export const time = (timeString: string) => {
  return moment(timeString, "HH:mm").toDate();
};
