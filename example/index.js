const ProgressBar = require('../dist')


const bar = new ProgressBar(100)

let i = 0
let t = setInterval(() => {
    if(i >= 100) clearInterval(t)
    bar.value = i;
    i += 10
}, 1000);
