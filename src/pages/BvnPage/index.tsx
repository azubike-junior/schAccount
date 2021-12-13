import React, { useEffect, useState } from "react";
import InputField, {
  PackageField,
  SchoolField,
} from "../../components/InputField";
import {
  useGetPackagesQuery,
  useGetSchoolsQuery,
} from "../../services/dropDowns";
import { getValues } from "../../utils/utilities";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { validateBvn } from "../../services/bvn-api";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";

export default function BvnPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data: packages } = useGetPackagesQuery("");
  const { data: schools } = useGetSchoolsQuery("");
  const [bvn, setBvn] = useState("");
  const [package_, setPackage] = useState<number>();
  const [school_, setSchool] = useState<number>();
  const [bvnError, setBvnError] = useState("");
  const [disabled, setDisabled] = useState(true);

  const {
    loading,
    data: response,
    isSuccessful,
    error,
  } = useSelector((state: RootState) => state.bvnReducer);

  const _schools = getValues(schools, {
    schoolId: "",
    schoolName: "Select School",
  });

  const _packages = getValues(packages, {
    packageId: "",
    packageName: "Select Package",
  });

  const handlePackage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPackage(Number(value));
  };

  const handleSchool = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSchool(Number(value));
  };

  const handleBvn = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value.length === 11) {
      setDisabled(false);
      setBvn(value);
    }
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      bvn,
      packageId: package_,
      schoolId: school_,
      history,
    };
    dispatch(validateBvn(data));
  };

  console.log(">>>>>>response", response);
  

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
                  <form onSubmit={submitHandler}>
                    <input name="__RequestVerificationToken" type="hidden" />
                    <div className="d-flex justify-content-center">
                      <div className="col-lg-10 ">
                        <div className="row clearfix">
                          <div className="form-group font-weight-700">
                            <div className="col-lg-12 m-b-20">
                              <div
                                className="col-lg-12 m-t-20 m-b-10"
                                style={{
                                  fontWeight: "bolder",
                                  fontSize: "25px",
                                }}
                              >
                                User Information
                              </div>
                              <i>
                                Kindly Provide the correct information in the
                                fields below
                              </i>
                            </div>
                            <div>
                              {error?.message === "Rejected" ? (
                                <p className="text-danger ml-2">
                                  Please make sure the school or package
                                  selected exists
                                </p>
                              ) : (
                                ""
                              )}

                              {error?.name === "TypeError" && (
                                <p className="text-danger ml-2">
                                  Sorry, something went wrong, Please try again
                                </p>
                              )}

                              {response?.responseMessage === "Invalid BVN" ? (
                                <p className="text-danger ml-2">
                                  Invalid Bvn Input, Please enter a correct
                                  Bvn
                                </p>
                              ) : (
                                ""
                              )}

                              {response?.responseCode === "98" && (
                                <p className="text-danger ml-2">
                                  Sorry Something went wrong, couldn't send Otp Code
                                </p>
                              )}
                            </div>
                          </div>

                          <InputField
                            type="number"
                            label="BVN"
                            className="form-group col-lg-12 col-md-6 col-sm-12 font-weight-700 m-b-20"
                            name="bvn"
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                              (e.target.value = e.target.value.slice(0, 11))
                            }
                            onChange={handleBvn}
                            placeholder="Enter your BVN"
                          />

                          <SchoolField
                            label="SCHOOL"
                            name="school"
                            onChange={handleSchool}
                            selectArray={_schools}
                            className="form-group col-lg-12 col-md-6 col-sm-12 font-weight-700 m-b-20"
                          />

                          <PackageField
                            label="PACKAGE"
                            name="package"
                            onChange={handlePackage}
                            selectArray={_packages}
                            className="form-group col-lg-12 col-md-6 col-sm-12 font-weight-700 m-b-20"
                          />

                          <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-20">
                            <div className="d-flex justify-content-center m-t-20">
                              <button
                                className="col-lg-5 col-md-5 col-sm-12 btn btn-cons"
                                style={{
                                  backgroundColor: "#005D30",
                                  color: "#FFF",
                                }}
                                disabled={disabled}
                                type="submit"
                              >
                                {loading ? <Loader /> : "Continue"}
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
