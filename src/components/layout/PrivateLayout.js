import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import withAuthenticated from "../../hoc/withAuthenticated";

const PrivateLayout = ({ ...props }) => (
  <WithAuthenticatedOutlet {...props} replace {...{ to: "/login" }} />
);

export default PrivateLayout;

const WithAuthenticatedOutlet = withAuthenticated(Outlet, Navigate);
