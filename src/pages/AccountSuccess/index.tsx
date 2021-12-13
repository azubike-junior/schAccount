import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";

export default function BvnPage() {
  const history = useHistory();
  const dispatch = useDispatch();

    const { loading: openAccountLoading, data: openAccResponse } = useSelector(
      (state: RootState) => state.openSchAccReducer
    );

  const goBack = () => {
    history.push("/");
  };

  return (
    <div className="container container-fixed-lg" style={{ marginTop: "0" }}>
      <div id="rootwizard" className="m-t-20">
        <ul
          className="nav nav-tabs nav-tabs-linetriangle nav-tabs-separator nav-stack-sm"
          role="tablist"
          data-init-reponsive-tabs="dropdownfx"
        ></ul>

        <div className="tab-content">
          <div
            className="tab-pane padding-10 sm-no-padding active slide-left nib_cor_instant_tab"
            id="tab1"
          >
            <div className="col-lg-12">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12 col-sm-12 bg-master-light padding-15 b-rad-lg">
                  <form>
                    <input name="__RequestVerificationToken" type="hidden" />
                    <div className="d-flex justify-content-center">
                      <div className="col-lg-10 ">
                        <div className="row clearfix">
                          <div className="form-group font-weight-700">
                            <div className="col-lg-12 m-b-20">
                              <div
                                className="col-lg-12 m-t-20 m-b-10"
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "25px",
                                }}
                              >
                                Account Success
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="text-center pt-5">
                              <h4>
                                Congratulations! Your{" "}
                                <span style={{ fontWeight: "bolder" }}>
                                  SunTrust Bank
                                </span>{" "}
                                Savings Account has been opened. We are glad to
                                have you on board.
                              </h4>
                              <h5>
                                Your Account number is{" "}
                                <span
                                  className=""
                                  style={{
                                    color: "#005d30",
                                    fontWeight: "bolder",
                                  }}
                                >
                                  {openAccResponse?.accountNum}
                                </span>
                              </h5>

                              <h4 className="pt-4 pb-5">
                                Now you can enjoy the many benefits of banking
                                with Suntrust Bank
                              </h4>
                              <h4
                                style={{
                                  color: "#005d30",
                                  fontWeight: "bolder",
                                }}
                              ></h4>
                            </div>
                          </div>

                          <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-20">
                            <div className="d-flex justify-content-center m-t-20">
                              <button
                                className="col-lg-5 col-md-5 col-sm-12 btn btn-cons"
                                style={{
                                  backgroundColor: "#005D30",
                                  color: "#FFF",
                                }}
                                type="button"
                                onClick={goBack}
                              >
                                Go Back
                              </button>
                            </div>
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
