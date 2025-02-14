import { ConsoleLogger as NestConsoleLogger } from '@nestjs/common'

export class ConsoleLogger {
  private readonly client: NestConsoleLogger

  constructor() {
    this.client = new NestConsoleLogger()
  }

  debug(message: string, operation: string): void {
    this.client.debug(message, operation)
  }

  error(message: string, stack: string, operation: string): void {
    this.client.error(message, stack, operation)
  }

  log(message: string, operation: string): void {
    this.client.log(message, operation)
  }

  warn(message: string, operation: string): void {
    this.client.warn(message, operation)
  }
}
