import React, { useMemo, useState } from "react";
import { ExportCSV } from "./../../components/ExportCsv/index";
import Pagination from "../../components/Pagination";
import "../../assets/scss/styles.scss";
import InputField from "../../components/InputField";

export default function Portal() {
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 10;

  const data = [{ name: "hdjdd" }];
  const fileName = "";

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
            className="tab-pane padding-10 sm-no-padding active slide-left"
            id="tab1"
          >
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 bg-master-light padding-15 b-rad-lg">
                  <form id="signupformpageone">
                    <input name="__RequestVerificationToken" type="hidden" />

                    <div className="col-lg-12">
                      <div className="row clearfix">
                        <div className="form-group col-lg-12 col-md-12 col-sm-12 font-weight-700 m-b-30">
                          <div className="col-lg-12 font-weight-900 font-24 m-t-20 m-b-10 " style={{fontWeight:"normal", fontSize:"20px"}}>
                            Query Logs
                          </div>
                        </div>

                        <div className="clearfix"></div>

                        <div className="form-group col-lg-12 col-md-12 col-sm-12 font-weight-700 m-b-20">
                          <InputField
                            type="date"
                            label="From Date"
                            className="form-group col-lg-4 col-md-12 col-sm-12 font-weight-700"
                            name="fromDate"
                            style={{ fontSize: "16px" }}
                          />
                        </div>

                        <div className="form-group col-lg-12 col-md-12 col-sm-12 font-weight-700 m-b-20">
                          <InputField
                            type="date"
                            label="To Date"
                            className="form-group col-lg-4 col-md-12 col-sm-12 font-weight-700"
                            name="toDate"
                            style={{ fontSize: "16px" }}
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-12 col-sm-12 m-b-50">
                          <div className="align-items-center justify-content-center">
                            <button
                              className="col-lg-6 col-md-12 col-sm-12 btn btn-cons"
                              style={{
                                backgroundColor: "#005D30",
                                color: "#FFF",
                              }}
                              type="submit"
                            >
                              Search
                            </button>
                          </div>
                        </div>

                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group col-lg-12 col-md-12 col-sm-12 m-t-20 m-b-10 d-flex">
                            <div className="col-lg-9 col-md-12 col-sm-12 ">
                              <p className="font-weight-bold acct_info_txt">
                                ACCOUNT INFORMATION
                              </p>
                            </div>

                            <ExportCSV csvData={data} fileName={fileName} />
                          </div>

                          <div className="table-responsive">
                            <table className="table table-hover mb-0 ">
                              <thead className="thead-dark" >
                                <tr>
                                  <th className="text-red">S/N</th>
                                  <th>Account Number</th>
                                  <th>Account Name</th>
                                  <th>Package</th>
                                  <th>Percentage Paid</th>
                                  <th>Account Balance (&#8358;)</th>
                                </tr>
                              </thead>
                              <tbody style={{ textAlign: "center" }}>
                                <tr>
                                  <td>1</td>
                                  <td>3115679989</td>
                                  <td>Tiger Nixon</td>
                                  <td>Package 1</td>
                                  <td>32%</td>
                                  <td>50,000.50</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>3115679989</td>
                                  <td>Tiger Nixon</td>
                                  <td>Package 1</td>
                                  <td>32%</td>
                                  <td>50,000.50</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>3115679989</td>
                                  <td>Tiger Nixon</td>
                                  <td>Package 1</td>
                                  <td>32%</td>
                                  <td>50,000.50</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>3115679989</td>
                                  <td>Tiger Nixon</td>
                                  <td>Package 1</td>
                                  <td>32%</td>
                                  <td>50,000.50</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>3115679989</td>
                                  <td>Tiger Nixon</td>
                                  <td>Package 1</td>
                                  <td>32%</td>
                                  <td>50,000.50</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="col-lg-3 col-md-6 col-sm-12 d-md-none b m-t-20">
                            <a
                              href="#"
                              className="col-lg-12 col-md-12 col-sm-12 btn btn-cons"
                              type="submit"
                              style={{
                                backgroundColor: "#0275d8",
                                color: "#FFF",
                              }}
                            >
                              Export Data to Excel
                            </a>
                          </div>

                          <div className="d-flex"></div>
                          <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={222}
                            pageSize={PageSize}
                            onPageChange={(page: any) => setCurrentPage(page)}
                          />
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
