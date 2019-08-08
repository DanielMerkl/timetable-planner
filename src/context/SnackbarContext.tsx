import React, { createContext, FC, useState } from "react";

interface Context {
  open: boolean;
  message: string;
  showSnackbar: (message: string) => void;
  hideSnackbar: () => void;
}

export const SnackbarContext = createContext<Context>({
  open: false,
  message: "",
  showSnackbar: () => {},
  hideSnackbar: () => {}
});

export const SnackbarContextProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleShowSnackbar = (message: string) => {
    setMessage(message);
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider
      value={{
        open,
        message,
        showSnackbar: handleShowSnackbar,
        hideSnackbar: () => setOpen(false)
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
