import React, { FC } from "react";

import { AuthProvider } from "./auth";

// eslint-disable-next-line import/prefer-default-export
export const AppProvider: FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);
