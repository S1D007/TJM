import { HttpStatus } from '@nestjs/common';
import OK from 'response/Ok';
import errorHandler from './httpErrorHandler';
import { Response } from 'express';
import { ISuccessMessage } from 'response/messages/success/success.type';

async function response<T>(
  type: ISuccessMessage,
  data: T,
  res: Response,
  status: HttpStatus,
): Promise<T | void> {
  try {
    return OK(res, type, data, status);
  } catch (error) {
    return errorHandler(error, res);
  }
}

export default response;
