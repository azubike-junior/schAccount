export interface AccountResponse {
  accountNum: string;
}

export type OtpProp = {
  token?: string;
  validationReference?: string;
  bvn?: string;
  history?: any;
  responseMessage?: string;
  responseCode?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  referenceId?: string;
  responseDescription?: string;
};

export interface AccountResponseProp {
  referenceId?: string;
  responseMessage?: string;
  responseCode?: string;
  history?: any;
  accountNum?: string;
}

export interface DataProps {
  bvn: string;
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  phoneNumber1: string;
  gender: string;
  email: string;
  nationality: string;
  surname: string;
  nin: string;
  maritalStatus: string;
  address: string;
  residentialAddress: string;
  responseCode?: string;
  responseMessage?: string;
  requestReference?: string;
}

export interface CsProps {
  bvn?: string;
  title?: string;
  firstname?: string;
  lastname?: string;
  middlename?: string;
  phone1?: string;
  phone2?: string;
  email?: string;
  motherMaidenName?: string;
  dateofBirth?: string;
  gender?: string;
  placeOfBirth?: string;
  stateOfOrigin?: string;
  Lga?: string;
  nationality?: string;
  residentPermitNumber?: string;
  placeOfPermitIssue?: string;
  permitIssueDate?: Date;
  permitExpireDate?: Date;
  religion?: string;
  maritalStatus?: string;
}

export type NextAndPreviousHandler = {
  handleNext: () => void;
  handlePrevious: () => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
