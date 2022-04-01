import { Logger } from 'tslog'

export const log: Logger = new Logger({
  displayDateTime: false,
  displayFilePath: 'hidden',
  displayFunctionName: false,
})
