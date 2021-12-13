import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

type CsvProps = {
  csvData: any;
  fileName: string;
};

export const ExportCSV = ({ csvData, fileName }: CsvProps) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData: any, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 d-none d-lg-block">
      <button
        onClick={(e) => exportToCSV(csvData, fileName)}
        className="col-lg-12 col-md-12 col-sm-12 btn btn-cons"
        type="submit"
        style={{
          backgroundColor: "#0275d8",
          color: "#FFF",
        }}
      >
        Export Data to Excel
      </button>
    </div>
  );
};
