import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { I18nContext } from 'nestjs-i18n';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    //const i18n = I18nContext.current(host);
    const i18n = I18nContext.current();
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let status = 500;
    try {
      status = exception.getStatus();
    } catch (err) {}
    const resJson = {
      message: i18n.t(`test.${status}`),
    };
    response.status(status).json(resJson);
  }
}
