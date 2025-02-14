import { LoggerService as NestLoggerService } from '@nestjs/common'

import { ConsoleLogger } from './adapter/console.logger'

export class LoggerService implements NestLoggerService {
  private readonly console: ConsoleLogger

  constructor() {
    this.console = new ConsoleLogger()
  }

  debug(message: string, operation: string): void {
    this.console.debug(message, operation)
  }

  error(message: string, stack: string, operation: string): void {
    this.console.error(message, stack, operation)
  }

  log(message: string, operation: string): void {
    this.console.log(message, operation)
  }

  warn(message: string, operation: string): void {
    this.console.warn(message, operation)
  }
}
