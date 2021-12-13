import React, { Suspense, lazy, useEffect } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader/index";
import { BvnValidation, OtpAuth, UserDataAuth } from "./utils/constant";
import PrivateRoute from "./components/Routes/PrivateRoute/index";
import Header from "./components/Header";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";

const BvnPage = lazy(() => import("./pages/BvnPage"));
const LoginPage = lazy(() => import("./pages/Login"));
const PortalPage = lazy(() => import("./pages/Portal"));
const AccountSuccessPage = lazy(() => import("./pages/AccountSuccess"));
const OtpPage = lazy(() => import("./pages/OtpPage"));
const UserAuthPage = lazy(() => import("./pages/UserConfirmation"));
const NotFoundPage = lazy(() => import("./pages/UserConfirmation"));

function App() {
  // const { isSuccessful: bvnSuccess } = useSelector(
  //   (state: RootState) => state.bvnReducer
  // );

  const bvnSuccess = localStorage.getItem("bvnSuccess");

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Suspense fallback={Loader}>
            <Route path="/" exact component={BvnPage} />
            <Route path="/otp_validate" exact component={OtpPage} />
            {/* <Route path="/login" exact component={LoginPage} /> */}
            <Route
              path="/account_success"
              exact
              component={AccountSuccessPage}
            />
            {/* <Route path="/student_portal" exact component={PortalPage} /> */}
            <Route path="/confirm_user" exact component={UserAuthPage} />
          </Suspense>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
