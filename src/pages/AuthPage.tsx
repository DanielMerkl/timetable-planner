import React, { FC, useContext } from "react";
import ApplicationBar from "../components/ApplicationBar";
import AuthForm from "../components/AuthForm";
import { Redirect } from "react-router";
import { TIMETABLE } from "../utils/routes";
import { AuthContext } from "../context/AuthContext";

const AuthPage: FC = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <Redirect to={TIMETABLE} />
  ) : (
    <>
      <ApplicationBar />
      <AuthForm />
    </>
  );
};

export default AuthPage;
