//Event Loop

// Передача call-back
const timeout = setTimeout(() => {  // принимает 2 аргумента (call-back  функцию и количество млСек)
    console.log('after timeout')
}, 2500)

const interval = setInterval(() => {
    console.log('after time')
}, 2500)
// clearInterval(timeout) // очищяет  timeout


const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}

delay( () => {
    console.log('After 2 sec')
}, 2000 )


// Работа с Promise
const delay2 = (wait = 1000) => {
    const pronise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return pronise
}

delay2(2500)
    .then(() => {
        console.log('After 2 seconds')
    })
    .catch(err => console.error(err))
    .finally(() => console.log('Finaly'))


const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))
getData().then(data => console.log(data))


// Работа с асинхронностью  //отслеживание скрола на стене в ВК-астинхронный пример
async function asyncExample() { // делаем функцию асинхронной async
    try {                    // оборачиваем в try{}catch(){}
        await delay2(3000) // await одижание заданое в милисекундах
        const data = await getData()
        console.log('data', data)
    } catch (e) {
        console.log(e)   // вывод ошибки
    } finally {   // выводим finally
        console.log('its finally')
    }
}

asyncExample()
