import React, { FC } from "react";

import { InformationDialogContextProvider } from "./InformationDialogContext";
import { AuthContextProvider } from "./AuthContext";

const CombinedAppContext: FC = ({ children }) => {
  return (
    <AuthContextProvider>
      <InformationDialogContextProvider>
        {children}
      </InformationDialogContextProvider>
    </AuthContextProvider>
  );
};

export default CombinedAppContext;
