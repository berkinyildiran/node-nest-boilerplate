import { LoggerRecord } from './logger.record'

export interface LoggerStrategy {
  debug(record: LoggerRecord): void

  error(record: LoggerRecord, stack: string): void

  info(record: LoggerRecord): void

  warn(record: LoggerRecord): void
}
