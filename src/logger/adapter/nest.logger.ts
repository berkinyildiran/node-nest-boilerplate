import { ConsoleLogger } from '@nestjs/common'

import { LoggerRecord } from '../interface/logger.record'
import { LoggerStrategy } from '../interface/logger.strategy'

export class NestLogger implements LoggerStrategy {
  private client: ConsoleLogger

  constructor() {
    this.client = new ConsoleLogger()
  }

  debug(record: LoggerRecord): void {
    this.client.debug(record.message, record.operation)
  }

  error(record: LoggerRecord, stack: string): void {
    this.client.error(record.message, stack, record.operation)
  }

  info(record: LoggerRecord): void {
    this.client.log(record.message, record.operation)
  }

  warn(record: LoggerRecord): void {
    this.client.warn(record.message, record.operation)
  }
}
