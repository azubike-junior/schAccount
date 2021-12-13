import React from "react";

export default function Login() {
  return (
    <div className="container container-fixed-lg">
      <div id="rootwizard" className="m-t-20">
        <ul
          className="nav nav-tabs nav-tabs-linetriangle nav-tabs-separator nav-stack-sm"
          role="tablist"
          data-init-reponsive-tabs="dropdownfx"
        ></ul>

        <div className="tab-content">
          <div
            className="tab-pane padding-10 sm-no-padding active slide-left login_form d-flex justify-content-center"
            id="tab1"
          >
            <div className="col-lg-9">
              <div className="row ">
                <div className="col-lg-12 col-md-12 col-sm-12 bg-master-light padding-15 b-rad-lg">
                  <form id="signupformpageone">
                    <input name="__RequestVerificationToken" type="hidden" />
                    <div className="col-lg-12">
                      <div className="row clearfix">
                        <div className="form-group text-center font-weight-900">
                          <div
                            className="col-lg-12 font-weight-900 font-24 m-t-20 m-b-10"
                            style={{
                              fontWeight: "bolder",
                              fontSize: "25px",
                            }}
                          >
                            User Login
                          </div>
                        </div>

                        <div className="clearfix"></div>

                        <div className="form-group col-lg-12 col-md-6 col-sm-12 font-weight-700 m-b-20">
                          <label>Username</label>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter your Username"
                            required
                          />
                        </div>

                        <div className="form-group col-lg-12 col-md-6 col-sm-12 font-weight-700 m-b-20">
                          <label>Password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="pword"
                            placeholder="Enter your Password"
                            required
                          />
                        </div>

                        <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-30">
                          <div className="align-items-center justify-content-center">
                            <a
                              href="student_portal.html"
                              className="col-lg-5 col-md-5 col-sm-12"
                              style={{ color: "#d01111" }}
                              type="submit"
                            >
                              Forgot Password?
                            </a>
                          </div>
                        </div>

                        <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-20">
                          <div className="align-items-center justify-content-center">
                            <a
                              href="student_portal.html"
                              className="col-lg-12 col-md-12 col-sm-12 btn btn-cons"
                              style={{
                                backgroundColor: "#005D30",
                                color: "#FFF",
                              }}
                              type="submit"
                            >
                              Submit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
