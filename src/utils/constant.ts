export const BvnValidation = "/";
export const OtpAuth = "/otp_validate";
export const UserDataAuth = "/instant_savings/user_data_auth";

//endpoints
export const bvnValidationUrl = `http://10.11.200.97/SchoolConnect/ValidateBvn`;
export const otpValidationUrl = `http://10.11.200.97/SchoolConnect/ValidateToken`;
export const openSchAccountUrl = `http://10.11.200.97/SchoolConnect/CreateInstantAccount`;

export const userName = "SunTrustBank";
export const password = "P@$$w0rd@suntrust";

export const tokenExpired =
  "Could not find session with provided validation reference. Either this session has expired or you did not initiate BVN validation. Go back to Verify BVN page";

export const createAccountProcessFailed =
  "No valid record for BVN validation request with provided referenceId.";
