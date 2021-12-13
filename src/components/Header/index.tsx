import React from "react";
import logo from "../../assets/images/Suntrust.png";
import schLogo from "../../assets/images/school.png";

export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-20">
          <div className="d-flex align-items-center justify-content-center m-t-20">
            <div className="logo_div padding-20 align-items-center border_right">
              <a href="#">
                <img id="logoId" src={logo} height="100" />
              </a>
            </div>
            <div className="logo_div padding-20 align-items-center">
              <a href="#">
                <img id="logoId" src={schLogo} height="100" />
              </a>
            </div>
          </div>

          <div
            className="mycontent-left"
            style={{ borderRight: " 1px solid #000 !important" }}
          ></div>
        </div>

        <div className="col-lg-12">
          <div className="page_title">
            <div className="page_title_text">
              <h2
                className="page-title label-primary no-padding m-t-20"
                style={{ fontSize: "30px", fontWeight:"normal"}}
              >
                School Connect
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
