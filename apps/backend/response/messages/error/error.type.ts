type AuthError =
  | 'Wrong Creds'
  | 'No Account Found'
  | 'Account Already Exists with Email'
  | 'Account Already Exists with Username'
  | 'Signup Failed'
  | 'Login Failed';

type UnExpectedError =
  | 'Unauthorized'
  | 'Forbidden'
  | 'Not Found'
  | 'Internal Server Error'
  | 'Something went Wrong';

type ValidationError = 'Validation Error' | 'Validation Failed';

type TokenError =
  | 'Token Error'
  | 'Token Expired'
  | 'Token Invalid'
  | 'Token Missing';

type S3Error = 'S3 Error' | 'S3 Upload Failed' | 'S3 Delete Failed';

type EmailError = 'Email Send Failed';

export type IErrorMessage =
  | AuthError
  | S3Error
  | UnExpectedError
  | ValidationError
  | TokenError
  | EmailError;
