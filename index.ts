const { stdout } = require('process')

module.exports = class ProgressBar {
  startDelimiter = '|'
  endDelimiter = '|'
  filled = '█'
  empty = '░'
  width = 60
  total = null

  constructor (total: number) {
    this.total = total
  }

  set value(newVal: number) {
    process.stdout.write(this.transfer(newVal))
  }

  transfer(val: number) {
    const p = val / this.total
    const filled = Math.ceil(this.width * p)
    const empty = Math.ceil(this.width - filled)

    let s = "\x1B[?25l" /* 隐藏光标，哈哈😆 */
    s += this.startDelimiter
    s += this.filled.repeat(filled)
    s += this.empty.repeat(empty)
    s += this.endDelimiter
    s += `${p * 100}%`
    s += " \r"

    return s
  }
}