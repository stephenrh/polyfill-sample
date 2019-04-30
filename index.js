window.onload = async () => {
    console.log('Window loaded', await testme())
}

const testme = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Okay, its done!')
        }, 2000)
    })
}