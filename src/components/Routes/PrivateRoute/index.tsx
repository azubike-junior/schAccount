import React from "react";
import { Route, Redirect } from "react-router-dom";
import { BvnValidation } from "../../../utils/constant";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  // const { isSuccess } = rest;
  const success = localStorage.getItem("bvnSuccess")

  // console.log(">>>>>>success from private", success);


  return (
    <Route
      {...rest}
      render={(props) =>
        success ? <Component {...props} /> : <Redirect to={BvnValidation} />
      }
    />
  );
};

export default PrivateRoute;
