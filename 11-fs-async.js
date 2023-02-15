const { readFile, writeFile } = require('fs')

/* readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
}) */

console.log('starting')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result

        writeFile('./content/fourth.txt', `Fourth one`, (err, result) =>{
            if(err) {
                return
            }
            /* console.log(result) */
            console.log('done with this task')
        })
    
    })

})

console.log('starting the next one')