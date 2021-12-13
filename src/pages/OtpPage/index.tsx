import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import InputField from "./../../components/InputField/index";
import { validateOtp } from "../../services/otp-api";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { tokenExpired } from "../../utils/constant";

export default function OtpPage() {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const history = useHistory();

  const { data: bvnResponse } = useSelector(
    (state: RootState) => state.bvnReducer
  );

  const { loading: otpLoading, data: otpResponse } = useSelector(
    (state: RootState) => state.otpReducer
  );

  console.log(">>>>>otp response", otpResponse);

  const submitOtp = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const otpData = {
      token: otp,
      validationReference: bvnResponse?.requestReference,
      bvn: bvnResponse?.bvn,
      history,
    };

    dispatch(validateOtp(otpData));
  };

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
            className="tab-pane padding-10 sm-no-padding active slide-left nib_cor_instant_tab"
            id="tab1"
          >
            <div className="col-lg-12 ">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12 col-sm-12 bg-master-light padding-15 b-rad-lg">
                  <form onSubmit={submitOtp}>
                    <input name="__RequestVerificationToken" type="hidden" />
                    <div className="col-lg-12">
                      <div className="row clearfix">
                        <div className="form-group font-weight-700">
                          <div className="col-lg-12 m-b-20">
                            <div
                              className="col-lg-12 font-weight-900 font-24 m-t-20 m-b-10"
                              style={{ fontWeight: "bolder", fontSize: "25px" }}
                            >
                              OTP Information
                            </div>
                            <i>
                              <div className="col-lg-12 m-b-20">
                                <i>
                                  A 6 digit code will be sent to your registered
                                  Phone Number
                                </i>
                              </div>
                            </i>
                          </div>
                          {otpResponse?.responseDescription ===
                            tokenExpired && (
                            <p className="text-danger ml-2">
                              sorry, This Token has expired. Go back to verify
                              Bvn page
                            </p>
                          )}
                          {otpResponse?.responseDescription ===
                            "Invalid Token" && (
                            <p className="text-danger ml-2 ">
                              This token is Invalid, Please enter the Token sent
                              to your phone
                            </p>
                          )}
                        </div>

                        <div className="clearfix"></div>

                        <div className="form-group col-lg-12 col-md-6 col-sm-12 font-weight-700 m-b-20">
                          <InputField
                            label="ENTER OTP"
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                              (e.target.value = e.target.value.slice(0, 6))
                            }
                            placeholder="Enter the OTP code sent to your phone"
                            type="number"
                            name="otp"
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setOtp(e.target.value)}
                            className="form-group col-lg-12 col-md-6 col-sm-12 font-weight-700 m-b-20"
                          />
                        </div>

                        <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-20 ">
                          <div className="d-flex justify-content-center m-t-20">
                            <button
                              className="col-lg-5 col-md-5 col-sm-12 btn btn-cons"
                              style={{
                                backgroundColor: "#005D30",
                                color: "#FFF",
                              }}
                              type="submit"
                            >
                              {otpLoading ? <Loader /> : "Submit"}
                            </button>
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
