import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import * as hbs from 'hbs'
import { NotFoundExceptionFilter } from './app/common/filters/not-found-exception.filter'
import session from 'express-session'
import passport from 'passport'
import flash = require('connect-flash')
import csurf from 'csurf'
import helmet from 'helmet'
require('dotenv').config()

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.use(helmet())

  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, '..', 'views'))

  app.setViewEngine('hbs')
  app.set('view options', { layout: 'layouts/main' })
  hbs.registerPartials(join(__dirname, '..', '/views/partials'))

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      },
    }),
  )

  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash())

  app.use(csurf())

  app.useGlobalFilters(new NotFoundExceptionFilter())
  await app.listen(Number(process.env.PORT) || 3000)
}
bootstrap()
