import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputField from "../../components/InputField";
import { OtpProp } from "../../interfaces";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { openSchoolAcc } from "../../services/openSchAcc";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { createAccountProcessFailed } from "../../utils/constant";

export default function UserDataAuthPage() {
  const dispatch = useDispatch();
  const { loading: otpLoading, data: otpResponse } = useSelector(
    (state: RootState) => state.otpReducer
  );
  const [userData, setUserData] = useState<OtpProp>({});
  const history = useHistory();

  const { loading: openAccountLoading, data: openAccResponse } = useSelector(
    (state: RootState) => state.openSchAccReducer
  );

  console.log(">>>>>oprn", openAccResponse);

  const handleOpenSchAcc = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      referenceId: userData?.referenceId,
      history,
    };

    dispatch(openSchoolAcc(data));
  };

  useEffect(() => {
    const user_ = JSON.parse(localStorage.getItem("user_") || "");
    setUserData(user_);
  }, []);

  const goBack = () => {
    history.push("/");
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
            <div className="col-lg-12 col-md-12 col-sm-12 bg-master-light padding-15 b-rad-lg">
              <div
                className="col-lg-12 m-b-2 font-weight-900 font-24"
                style={{ fontWeight: "bolder", fontSize: "25px" }}
              >
                User Confirmation
              </div>
              <br />

              <div className="col-lg-12 m-b-20">
                <i>
                  If you have verified your data displayed below, click on the
                  "Create Account" button
                </i>
              </div>
              <form
                className="d-flex justify-content-center"
                onSubmit={handleOpenSchAcc}
              >
                <input name="__RequestVerificationToken" type="hidden" />
                <div className="col-lg-7">
                  <div className="row clearfix">
                    <div className="clearfix"></div>

                    {openAccResponse?.responseCode === "97" && (
                      <p className="text-danger ml-2">
                        This Bvn has been used to create an Account
                      </p>
                    )}

                    {openAccResponse?.responseCode === "96" && (
                      <p className="text-danger ml-2">
                        Sorry, Please something went wrong
                      </p>
                    )}

                    {openAccResponse?.responseMessage ===
                      createAccountProcessFailed && (
                      <p className="text-danger ml-2">
                        Account Creation process failed due to existence of Bvn,
                        please Restart validation Process
                      </p>
                    )}

                    <div className="form-group col-lg-12 col-md-6 col-sm-12 font-weight-700">
                      <InputField
                        type="firstName"
                        name="text"
                        value={userData?.firstName}
                        readOnly
                        label="First Name"
                        // onChange={(e) => setValue(user?.bvn || "")}
                      />
                    </div>
                    <div className="form-group col-lg-12 col-md-6 col-sm-12 font-weight-700">
                      <InputField
                        type="text"
                        name="lastname"
                        value={userData?.lastName}
                        readOnly
                        label="Last Name"
                        // onChange={(e) => setValue(user?.lastName || "")}
                      />
                    </div>
                    <div className="form-group col-lg-12 col-md-6 col-sm-12 font-weight-700">
                      <InputField
                        type="number"
                        name="phoneNumber"
                        value={userData?.phoneNumber}
                        readOnly
                        label="Phone Number"
                        // onChange={(e) => setValue(user?.firstName || "")}
                      />
                    </div>
                  </div>
                  {openAccResponse?.responseMessage !==
                    createAccountProcessFailed && (
                    <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-20">
                      <div className="d-flex justify-content-center m-t-20">
                        <button
                          className="col-lg-5 col-md-5 col-sm-12 btn btn-cons"
                          style={{
                            backgroundColor: "#005D30",
                            color: "#FFF",
                          }}
                          type="submit"
                        >
                          {openAccountLoading ? <Loader /> : "Create Account"}
                        </button>
                      </div>
                    </div>
                  )}
                  {openAccResponse?.responseMessage ===
                    createAccountProcessFailed && (
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
                          Restart Bvn validation
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
