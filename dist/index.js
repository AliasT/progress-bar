const { stdout } = require('process');
module.exports = class ProgressBar {
    constructor(total) {
        this.startDelimiter = '|';
        this.endDelimiter = '|';
        this.filled = '█';
        this.empty = '░';
        this.width = 60;
        this.total = null;
        this.total = total;
    }
    set value(newVal) {
        process.stdout.write(this.transfer(newVal));
    }
    transfer(val) {
        const p = val / this.total;
        const filled = Math.ceil(this.width * p);
        const empty = Math.ceil(this.width - filled);
        let s = "\x1B[?25l"; /* 隐藏光标，哈哈😆 */
        s += this.startDelimiter;
        s += this.filled.repeat(filled);
        s += this.empty.repeat(empty);
        s += this.endDelimiter;
        s += `${p * 100}%`;
        s += " \r";
        return s;
    }
};
