import { Response } from 'express';
import { HttpStatus } from '@nestjs/common';
import NotOK from 'response/NotOk';

const duplicateKeyError = (error: any, res: Response) => {
  if (error.keyValue.email) {
    return NotOK(
      res,
      'Account Already Exists with Email',
      error.keyValue.email,
      HttpStatus.CONFLICT,
    );
  } else if (error.keyValue.username) {
    return NotOK(
      res,
      'Account Already Exists with Username',
      error.keyValue.username,
      HttpStatus.CONFLICT,
    );
  }
};

const exceptionChecker = (error: any, res: Response) => {
  switch (error.code) {
    case 11000:
      duplicateKeyError(error, res);
      return true;
    default:
      return;
  }
};

export default exceptionChecker;
