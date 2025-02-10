import { Injectable, LoggerService, Scope } from '@nestjs/common'
import crypto from 'node:crypto'

import { NestLogger } from './adapter/nest.logger'

import { LoggerRecord } from './interface/logger.record'

@Injectable({ scope: Scope.REQUEST })
export class CustomLogger implements LoggerService {
  private readonly nest: NestLogger

  constructor() {
    this.nest = new NestLogger()
  }

  private create(operation: string, message: string): LoggerRecord {
    return {
      id: crypto.randomUUID(),
      date: Date.now(),
      operation,
      message,
    }
  }

  debug(message: any, context: string): void {
    const record = this.create(context, message)

    this.nest.debug(record)
  }

  error(message: any, context: string, stack: string): void {
    const record = this.create(context, message)

    this.nest.error(record, stack)
  }

  log(message: any, context: string): void {
    const record = this.create(context, message)

    this.nest.info(record)
  }

  warn(message: any, context: string): void {
    const record = this.create(context, message)

    this.nest.warn(record)
  }
}
