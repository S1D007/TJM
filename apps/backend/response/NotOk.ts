import { Response } from 'express';
import { dateAndTime } from '../utils/dateTime';
import { IErrorMessage } from './messages/error/error.type';
import { HttpStatus } from '@nestjs/common';
import { NotOK_ResponseMessage } from './messages/error/errorResponseMessages';

const NotOK = (
  res: Response,
  entity: IErrorMessage,
  data: any,
  status: HttpStatus,
) => {
  res.status(status).json({
    status: 'Not OK',
    data,
    timestamp: dateAndTime(),
    message: NotOK_ResponseMessage[entity],
  });
};

export default NotOK;
