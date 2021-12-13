import React from "react";
// import { sendSms } from "../../services/otp-api";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { BvnValidation } from "../../utils/constant";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function AcountOpenedPage({ data }: any) {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails") || "{}");
    // dispatch(
    //   sendSms({
    //     phoneNumber: user.phoneNumber,
    //     messageBody: `SunTrust Bank
    //     Your Suntrust Instant Saving Account is ${data}.
    //     `,
    //   })
    // );
    localStorage.clear();
  }, []);

  return (
    <div className="col-lg-12">
      <div className="text-center pt-5">
        <h4>
          Congratulations! Your{" "}
          <span style={{ fontWeight: "bolder" }}>Suntrust Bank</span> Savings
          Account has been opened. We are glad to have you on board.
        </h4>
        <h5>
          Your Account number is{" "}
          <span className="" style={{ color: "#005d30", fontWeight: "bolder" }}>
            {data}
          </span>
        </h5>

        <h4 className="pt-4 pb-5">
          Now you can enjoy the many benefits of banking with Suntrust Bank
        </h4>
        <h4 style={{ color: "#005d30", fontWeight: "bolder" }}>
          <Link to={BvnValidation}>Go Back Home</Link>
        </h4>
      </div>
    </div>
  );
}
