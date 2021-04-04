const requestURL = ' https://jsonplaceholder.typicode.com/users' //запрос по URL

function sendRequest(method, url, body = null) {  // длобавляем параметры для метода
    return new Promise((resolve, reject) => { // оборачиваем асинхронный код  в промис

        const xhr = new XMLHttpRequest() //создаем обьект класса
        xhr.open(method, requestURL) // открываем запрос

        xhr.responseType = 'json' // указываем тип ответа
        xhr.onload = () => {   // обьявляем новый слушатель
            if (xhr.status >= 404) {       // ловим возможную ошибку
                reject(xhr.response)  // reject, если есть какая-то ошибка
            } else {
                resolve(xhr.response)// получаем масив обьектов // используем resove, если все ок
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send() // отправляем запрос
    })
}

// sendRequest('GET', requestURL)       // для метода GET
//     .then(data => console.log((data)))
//     .catch(err => console.log(err))

const body = {  // создаем переменную body
    name: 'Mari',
    age: 29
}

sendRequest('GET', requestURL,body)
    .then(data => console.log((data)))
    .catch(err => console.log(err))