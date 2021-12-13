import React from "react";
import { classNames } from "./../../utils/classNames";

interface InputProps {
  label?: string;
  type?: string;
  className?: string;
  readOnly?: boolean;
  value?: string;
  required?: boolean;
  name?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  maxLength?: number;
  onInput?: any;
  selectArray?: any[];
  style?: any;
}

export default function InputField({
  label,
  type,
  onChange,
  required,
  value,
  name,
  readOnly,
  placeholder,
  className,
  onInput,
  style,
}: InputProps) {
  return (
    <div className={className}>
      <label style={style}>{label}</label>
      <input
        autoComplete="off"
        type={type}
        className="form-control text-muted"
        placeholder={placeholder}
        name={name}
        value={value}
        readOnly={readOnly}
        required={required}
        onChange={onChange}
        onInput={onInput}
      />
    </div>
  );
}

export const SchoolField = ({
  label,
  name,
  className,
  selectArray,
  value,
  onChange
}: InputProps) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <select name={name} onChange={onChange} value={value} className="form-control">
        {
          selectArray?.map((school: any) => {
            return (
              <option key={school.schoolId} value={school?.schoolId}>{school?.schoolName}</option>
            );
          })}
      </select>
    </div>
  );
};

export const PackageField = ({
  label,
  name,
  className,
  selectArray,
  onChange
}: InputProps) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <select name={name} onChange={onChange} className="form-control">
        {selectArray?.map((_package: any) => {
          return (
            <option key={_package.packageId} value={_package?.packageId}>{_package?.packageName}</option>
          );
        })}
      </select>
    </div>
  );
};
