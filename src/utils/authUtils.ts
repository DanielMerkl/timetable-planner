const TOKEN = "TOKEN";
const USER_ID = "USER_ID";

const getToken = (): string => {
  const token = sessionStorage.getItem(TOKEN);

  return token || "";
};

const getUserId = (): number => {
  const userIdString = sessionStorage.getItem(USER_ID);
  if (userIdString !== "" && userIdString !== null) {
    return Number.parseFloat(userIdString);
  }

  return -1;
};

const setToken = (token: string) => {
  sessionStorage.setItem(TOKEN, token);
};

const setUserId = (userId: number) => {
  sessionStorage.setItem(USER_ID, userId.toString());
};

const clearStorage = () => {
  sessionStorage.removeItem(TOKEN);
  sessionStorage.removeItem(USER_ID);
};

export default {
  getToken: getToken,
  getUserId: getUserId,
  setToken: setToken,
  setUserId: setUserId,
  clearStorage: clearStorage
};
