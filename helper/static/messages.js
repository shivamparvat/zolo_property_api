function authHandler(typeProp) {
  const authObj = {
    AUTH_SUCCESS: 'Authentication successful.',
    AUTH_FAILED: 'Authentication failed.',

    // Inactive
    INACTIVE_ACCOUNT: 'Your account is inactive. Please contact the administrator.',
    DELETED_ACCOUNT: 'Your account has been deleted. Please contact the administrator.',

    // JWT Token
    JWT_NEEDED: 'Empty JWT field in headers.',
    JWT_INVALID: 'Invalid JWT passed in headers.',
    JWT_EXPIRED: 'Expired JWT passed in headers.',

    // Token
    TOKEN_REQUIRED: 'Authentication token is required.',
    TOKEN_INVALID: 'Invalid authentication token passed.',
    TOKEN_EXPIRED: 'Your session has expired. Kindly log in again.',

    // Invalid
    INVALID_USER_NAME: 'Input user name is invalid.',
    INVALID_EMAIL: 'Input email is invalid.',
    INVALID_PASSWORD: 'Input password is invalid.',
    PASSWORD_NOT_MATCH: "Old password doesn't match.",
    INVALID_CRED: `Unable to login, invalid credentials.`,

    // Not found | registered
    UNIQUE_ID_NOT_FOUND: 'Unique Id not found.',
    EMAIL_NOT_FOUND: 'Email not found.',
    CRED_NOT_FOUND: 'Credentials not found.',
    PHONE_NOT_FOUND: 'Mobile number not found.',
    ACCOUNT_NOT_FOUND: `Account not found.`,
    EMAIL_MOB_NOT_REGISTERED: 'Email or Mobile Number not registered.',

    // Duplicates
    DUPLICATE: `Duplicate entry found.`,
    DUPLICATE_EMAIL_PHONE: 'Duplicate email and phone found.',
    DUPLICATE_EMAIL: 'Duplicate email found.',
    DUPLICATE_PHONE: 'Duplicate phone number found.',
    DUPLICATE_USER_NAME: 'Duplicate user name found.',

    UNABLE_EMAIL: `Unable to create, duplicate email found.`,
    UNABLE_PHONE: `Unable to create, duplicate mobile number found.`,
    UNABLE_USER_NAME: `Unable to create, duplicate name found.`,
    UNABLE_EMAIL_PHONE: `Unable to create, duplicate email and mobile number found.`,
    UNABLE_PAN: 'Duplicate PAN card details found.',

    // Already Exist
    NAME_EMAIL_PHONE_EXIST: `Unable to create, email, phone, and username already exist.`,
    EMAIL_PHONE_EXIST: `Unable to create, email and phone already exist.`,
    EMAIL_EXIST: `Unable to create, Email already exists.`,
    USER_NAME_EXIST: `Unable to create, Username already exists.`,
    MOBILE_EXIST: `Unable to create, Mobile number already exists.`,

    // E-Mail
    OTP_MAIL_SENT: 'OTP sent to registered email address.',

    // Mobile
    OTP_SENT: 'OTP sent to registered mobile number.',
    OTP_TEMP: 'Please enter OTP to change password.',
    INVALID_OTP: 'Invalid OTP. Please enter a valid OTP.',

    // Changed
    CHANGE_PASSWORD: 'Password changed successfully.',

    // Signup
    SIGNUP: 'User created successfully.',
    SIGNUP_FAILED: 'Could not create a new user. Please try again.',

    // Login
    DATA_FOUND: 'Data found.',

    // Not Exists
    EMAIL_NOT_EXISTS: 'Email ID does not exist.',
    USER_NOT_EXISTS: 'User does not exist.',

    // Something went wrong
    WRONG: 'Something went wrong.',
    WRONG_PASS: 'Incorrect password entered.',
    USER_LIST_WRONG: 'Error while fetching user list.',
    TOTAL_WRONG: 'Error while fetching total count.',
    FAILED_DELETE_USER: 'Error while deleting user.',
    FAILED_DELETE_CAT: 'Failed to delete category.',

    BRAND_ADDED : "Phone added successfully.",
    BRAND_UPD : "Phone updated successfully.",
    BRAND_NOT_EXISTS : "Phone value not exists, please try again.",
    BRAND_ADD_FAILED : "Phone added failed.",
    BRAND_DELETED : "Phone deleted successfully.",
    FAILED_DELETE_BRAND : "Phone deleted failed.",
    DUPLICATE_BRAND_EXISTS : "Phone already exists.",
    BRAND_UPD_FAILED : "Phone update failed.",
    BRAND_ACTIVATED : "Phone activated successfully.",
    BRAND_INACTIVE : "Phone deactivated successfully.",

    INTERESTED_ADDED : "Phone added successfully.",
    INTERESTED_UPD : "Phone updated successfully.",
    INTERESTED_NOT_EXISTS : "Phone value not exists, please try again.",
    INTERESTED_ADD_FAILED : "Phone added failed.",
    INTERESTED_DELETED : "Phone deleted successfully.",
    FAILED_DELETE_INTERESTED : "Phone deleted failed.",
    DUPLICATE_INTERESTED_EXISTS : "Phone already exists.",
    INTERESTED_UPD_FAILED : "Phone update failed.",
    INTERESTED_ACTIVATED : "Phone activated successfully.",
    INTERESTED_INACTIVE : "Phone deactivated successfully.",

    MODAL_ADDED : "Phone added successfully.",
    MODAL_UPD : "Phone updated successfully.",
    MODAL_NOT_EXISTS : "Phone value not exists, please try again.",
    MODAL_ADD_FAILED : "Phone added failed.",
    MODAL_DELETED : "Phone deleted successfully.",
    FAILED_DELETE_MODAL : "Phone deleted failed.",
    DUPLICATE_MODAL_EXISTS : "Phone already exists.",
    MODAL_UPD_FAILED : "Phone update failed.",
    MODAL_ACTIVATED : "Phone activated successfully.",
    MODAL_INACTIVE : "Phone deactivated successfully.",


    PHONE_ADDED : "Phone added successfully.",
    PHONE_UPD : "Phone updated successfully.",
    PHONE_NOT_EXISTS : "Phone value not exists, please try again.",
    PHONE_ADD_FAILED : "Phone added failed.",
    PHONE_DELETED : "Phone deleted successfully.",
    FAILED_DELETE_PHONE : "Phone deleted failed.",
    DUPLICATE_PHONE_EXISTS : "Phone already exists.",
    PHONE_UPD_FAILED : "Phone update failed.",
    PHONE_ACTIVATED : "Phone activated successfully.",
    PHONE_INACTIVE : "Phone deactivated successfully.",

    //EMI
    DUPLICATE_EMI_EXISTS : "EMI value already exists, please try another value.",
    EMI_NOT_EXISTS : "EMI value not exists, please try again.",
    EMI_UPD : "EMI value updated successfully.",
    EMI_ACTIVATED : "EMI activated successfully.",
    EMI_DEACTIVATED : "EMI deactivated successfully.",
    EMI_UPD_FAILED : "Failed to update tax value.",
    EMI_ADDED : "EMI value added successfully.",
    EMI_ADD_FAILED : "Something went wrong when adding tax.",
    EMI_DELETED : "EMI deleted successfully.",
    FAILED_DELETE_EMI : "Something went wrong when deleting the tax.",



    DUPLICATE_PROPERTY_EXISTS : "PROPERTY value already exists, please try another value.",
    PROPERTY_NOT_EXISTS : "PROPERTY value not exists, please try again.",
    PROPERTY_UPD : "PROPERTY value updated successfully.",
    PROPERTY_ACTIVATED : "PROPERTY activated successfully.",
    PROPERTY_DEACTIVATED : "PROPERTY deactivated successfully.",
    PROPERTY_UPD_FAILED : "Failed to update property value.",
    PROPERTY_ADDED : "PROPERTY value added successfully.",
    PROPERTY_ADD_FAILED : "Something went wrong when adding property.",
    PROPERTY_DELETED : "PROPERTY deleted successfully.",
    FAILED_DELETE_PROPERTY : "Something went wrong when deleting the property.",

    // Image
    NO_FILE: 'No file uploaded.',

    // User
    USER_UPDATED: 'User updated successfully.',
    USER_UPDATED_FAILED: 'User update failed.',
    USER_DELETED: 'User deleted successfully.',
    USER_ACTIVATED: 'User activated successfully.',
    USER_DEACTIVATED: 'User deactivated successfully.',
  };

  return authObj[typeProp];
}

module.exports = { authHandler };
