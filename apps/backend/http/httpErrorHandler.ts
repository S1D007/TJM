import { Response } from 'express';
import { HttpError } from './error';
import { HttpStatus } from '@nestjs/common';
import NotOK from 'response/NotOk';
import exceptionChecker from './httpErrorExceptions';

const errorHandler = (error: any, res: Response) => {
  if (error instanceof HttpError)
    return NotOK(res, error.type, error.data, error.status);

  if (exceptionChecker(error, res)) {
    return;
  }

  return NotOK(
    res,
    'Internal Server Error',
    error.message,
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
};

export default errorHandler;
