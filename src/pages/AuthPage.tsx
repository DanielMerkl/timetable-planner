import React, { FC } from "react";
import ApplicationBar from "../components/ApplicationBar";
import AuthForm from "../components/AuthForm";

const AuthPage: FC = () => (
  <>
    <ApplicationBar />
    <AuthForm />
  </>
);

export default AuthPage;
