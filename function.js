// // Функции - это обьекты

//Function Expression  // обьявили, а потом только использовать
const greet2 = function greet2(name) {
    console.log('Hi2 -', name)
}
greet('Jack')

greet2('Nick')

// Function Declaration  // можно использовать до обьявления
function greet(name) {
    console.log('Hi -', name)
}

console.log(typeof greet)  // тип переданого
console.dir(greet) //  показывает данные

// Ананоммые функции
let counter = 0    //  примеер счетчика
const interval = setInterval(function () { // анонимная функция - не имеет названия
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)

// Стрелочные функции
function  greet3(name) {    //
    console.log(' Hi - ', name)
}

const arrow = (name) => {  // идентичные
    console.log(' Hi - ', name)
}

const arrow2 = name => console.log('Привет - ', name )  // идентичныце

arrow('Nick')
arrow2('Jack')

const  pow2 = num => num ** 2
console.log(pow2((5)))

// Параметры по умолчанию
const sum = (a, b = 1) => a + b  // b=1 параметр по умолчанию, если не задан, иначе Nan
console.log(sum(41, 6))

function  sumAll(...all) { // функция собирает все данные в масив
    console.log(all)
}
sumAll(23,46,67,78,78)


function sumAll1(...all) {
    let result = 0              // функция, которая подсчитывает все результаты в масиве
    for ( let num of all) {
        result += num
    }
    return result
}
const res = sumAll1(56,6,7,5,3,2)
console.log(res)

// Замыкания - возврат из одной функции, другой функции

function createMember(name) {   // параметр name  в замыкании, будет возвращен вседа
    return function (lastName) {
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('Din') // параметр name  в замыкании
console.log(logWithLastName('Minin'))
console.log(logWithLastName('Min'))