const { readFileSync, writeFileSync } = require('fs')

console.log('starting')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

/* console.log(first, second) */

writeFileSync(
'./content/third.txt',
`This is third. Previous ones: ${first}, - ${second}`,
{flag: 'a'}
)

const third = readFileSync('./content/third.txt', 'utf-8')

console.log(third)

console.log('done')
console.log('starting the next one')