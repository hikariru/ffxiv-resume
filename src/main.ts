import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import * as hbs from 'hbs'
import { NotFoundExceptionFilter } from './app/filters/not-found-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, '..', 'views'))

  app.setViewEngine('hbs')
  app.set('view options', { layout: 'layouts/main' })
  hbs.registerPartials(join(__dirname, '..', '/views/partials'))

  app.useGlobalFilters(new NotFoundExceptionFilter())
  await app.listen(Number(process.env.PORT) || 3000)
}
bootstrap()
