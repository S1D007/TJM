import { IErrorMessage } from './error.type';

export const NotOK_ResponseMessage: Record<IErrorMessage, string> = {
  // Authentication Error Messages
  'Wrong Creds': 'Incorrect username or password.',
  'No Account Found': 'No account found with Provided credentials.',
  'Account Already Exists with Email':
    'An account with this Email already exists, If You have any problem regarding your account please contact us. or you can login with this Email.',
  'Account Already Exists with Username':
    'An account with this Username already exists, If You have any problem regarding your account please contact us. or you can login with this Username.',
  'Signup Failed': 'Failed to create an account.',
  'Login Failed': 'Login failed. Please check your credentials.',

  // Unexpected Error Messages
  Unauthorized: 'Unauthorized access. Please login.',
  Forbidden: 'Access to this resource is forbidden.',
  'Not Found': 'The requested resource was not found.',
  'Internal Server Error': 'Internal server error. Please try again later.',
  'Something went Wrong': 'Something unexpected happened. Please try again.',

  // Validation Error Messages
  'Validation Error': 'Validation error encountered.',
  'Validation Failed': 'Validation failed for the input data.',

  // Token-related Error Messages
  'Token Error': 'Error with token processing.',
  'Token Expired': 'Token has expired. Please authenticate again.',
  'Token Invalid': 'Invalid token provided.',
  'Token Missing': 'Token is missing. Please provide a valid token.',

  // S3 (Storage) Error Messages
  'S3 Error': 'Error occurred, Please Try Again.',
  'S3 Upload Failed': 'Failed to upload file.',
  'S3 Delete Failed': 'Failed to delete file.',

  // Email Error Messages
  'Email Send Failed': 'Failed to send email.',
};
