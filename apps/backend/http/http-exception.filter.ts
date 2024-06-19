import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import errorHandler from './httpErrorHandler';

@Catch()
export class HttpExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const message = exception.message;

      return errorHandler({ message, status }, response);
    }

    return errorHandler(exception, response);
  }
}
