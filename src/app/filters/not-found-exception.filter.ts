import {ArgumentsHost, Catch, ExceptionFilter, NotFoundException} from '@nestjs/common'
import { Response } from 'express'

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()

    return response.render('404', {title: "404 Page Not Found"})
  }
}
