import { Response } from 'express';

import { dateAndTime } from '../utils/dateTime';
import { HttpStatus } from '@nestjs/common';
import { OK_ResponseMessage } from './messages/success/successResponseMessages';
import { ISuccessMessage } from './messages/success/success.type';

const OK = (
  res: Response,
  entity: ISuccessMessage,
  data: any,
  status: HttpStatus,
) => {
  res.status(status).json({
    status: 'OK',
    data,
    timestamp: dateAndTime(),
    message: OK_ResponseMessage[entity],
  });
};

export default OK;
