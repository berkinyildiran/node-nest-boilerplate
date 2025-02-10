import { NestFactory } from '@nestjs/core'

import { CustomLogger } from './logger'

import { AppModule } from './app.module'

async function bootstrap() {
  const logger = new CustomLogger()

  const app = await NestFactory.create(AppModule, {
    logger,
  })

  await app.listen(3000)
}
bootstrap()
