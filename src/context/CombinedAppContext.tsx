import React, { FC } from "react";

import { SnackbarContextProvider } from "./SnackbarContext";
import { InformationDialogContextProvider } from "./InformationDialogContext";
import { AuthContextProvider } from "./AuthContext";

const CombinedAppContext: FC = ({ children }) => {
  return (
    <AuthContextProvider>
      <SnackbarContextProvider>
        <InformationDialogContextProvider>
          {children}
        </InformationDialogContextProvider>
      </SnackbarContextProvider>
    </AuthContextProvider>
  );
};

export default CombinedAppContext;
