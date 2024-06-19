type AuthSuccess =
  | 'Signup Success'
  | 'Login Success'
  | 'Logout Success'
  | 'Update Success';

type S3Success = 'S3 Upload Success' | 'S3 Delete Success';

type Misc = 'Success';

type EventSuccess = 'Event Created' | 'Event Updated' | 'Event Deleted';

type EmailSuccess = 'Email Sent';

export type ISuccessMessage =
  | Misc
  | AuthSuccess
  | S3Success
  | EventSuccess
  | EmailSuccess;
