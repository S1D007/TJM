import { ISuccessMessage } from './success.type';

export const OK_ResponseMessage: Record<ISuccessMessage, string> = {
  // Misc
  Success: 'Success',

  // Authentication Success Messages
  'Signup Success': 'Your signup was successful.',
  'Login Success': 'You have successfully logged in.',
  'Logout Success': 'You have been successfully logged out.',
  'Update Success': 'Your profile has been updated successfully.',

  // S3 (Storage) Success Messages
  'S3 Upload Success': 'File uploaded successfully.',
  'S3 Delete Success': 'File deleted successfully.',

  // Product Success Messages
  'Event Created': 'Event created successfully.',
  'Event Updated': 'Event updated successfully.',
  'Event Deleted': 'Event deleted successfully.',

  // Email Success Messages
  'Email Sent': 'Email sent successfully.',
};
