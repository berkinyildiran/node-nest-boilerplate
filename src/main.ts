import { NestFactory } from '@nestjs/core'

import { LoggerService } from './logger/logger.service'

import { AppModule } from './app.module'

async function bootstrap() {
  const logger = new LoggerService()

  const app = await NestFactory.create(AppModule, {
    logger,
  })

  await app.listen(3000)
}
bootstrap()
