const $ = require('jquery')
window.onload = async () => {
    await testme()
}

const testme = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve($('#hello').html('Hey there, sorry I took so long'))
        }, 2000)
    })
}