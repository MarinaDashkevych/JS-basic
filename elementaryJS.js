alert('Hello111')
// Переменные
var name = 'Mari'  // избегать
// const lastName = 'Odessa' // неизменяемая переменная(хороший тон)
console.log(name)

const isProgramer = true
console.log(isProgramer)

// мутирование
const firstName = 'Mari'
const age = 29
 alert('Имя человека: '+ firstName + ', а возраст человека:' + age)
// console.log(age.toString()) // в строку

const lastName = prompt('Введите фамилию')  // окошко имя-фамилия
alert(firstName + ' ' + lastName)

// Операторы
const currentYear1 = 2021
const birthYear1 = 1991
const  age = currentYear1 - birthYear
console.log(age)

const a = 10
let c = 32
// c = c + a // одинаковая запись
c += a  // одинаковая запись, так же для  -= , /= , *=
console.log(c)

//Типы данных
const isProgramer1 = true
const name1 = 'Odessa'
const age1 = 29
let  x

console.log(typeof isProgramer1) // boolean
console.log(typeof name1) // string
console.log(typeof age1) // number
console.log(typeof x)  // undifind (обьявлена, но без значения)
console.log(typeof null) //исключение вернется OBJECT

// Приоритет операций < > >= <=
//  в поиск mdn - библиотека-учерник JS
const fullAge = 29
const birthYear = 1991
const currentYear = 2021

const  isFullAge = (currentYear - birthYear)  >= fullAge
console.log(isFullAge)

// Условные опретароры
const courseStatus = ' ' // ready, fail, pending
if (courseStatus === 'ready') {
    console.log(' готово')
} else if (courseStatus === 'pending') {
    console.log('no')
}else {
    console.log('Stop')
}

const num1 = 42  // nunber
const num2 = '42'  //  string
console.log(num1 === num2)  //  проверка по значению и тупу данных

const isReady = true
if (isReady) {console.log('все готово')
}else {
    console.log('NO')
}

//тернарное выражение
isReady ? console.log('все готово') : console.log('no') // сокращенный вариант записи выше

// Булиевая логика

// Функции
function calcAge(year) {
    return 2021 - year
}
const age = calcAge(1991)
console.log(age)
//*
console.log(calcAge(1998)) // такая же запись, как и выше


function logInfo(name, year) {
    const age = calcAge(year)

    if (age > 0) {
        console.log('Человеку ' + name + age + ' лет')
    } else {
        console.log('не возможно ')
    }

}
logInfo('Mary', 1991)
logInfo('Rita', 1999)
logInfo('Nick', 3030)

//Массивы
const cars = ['Мазда', 'Мерс', 'Ниссан']
console.log(cars)
console.log(cars[1])
console.log(cars[0])

cars[0] = 'mers'
console.log(cars)

cars[cars.length] = 'mitsu' // запись в конец масива
console.log(cars)
// const cars1 = new Array( 'bmw', 'infinity', 'lada') // устарелый вариант
// console.log(cars1)

// Циклы
const cars = ['Мазда', 'Мерс', 'Ниссан']
// for (let i = 0; i < cars.length; i++) {  // вывод элеменов масивов
//     const  car = cars[i]
//     console.log(car)
// }

for (let car of cars) { // цикл вывода всех элементов масива for(let ... of ...)
    console.log(car)
}

// Обьекты

const person = {   // создание обьекта {}
    firstName: 'Mike',
    lastName: 'Rex',
    lang: ['ru', 'en', 'de'], // масив в обьекте
    hasWife: false,      // булиевое значение
    greet: function (){   // функция в обекте
        console.log('greet')
    }
}
console.log(person.firstName) // обращение к  конкретному элементу обьекта
console.log(person['lastName']) //
person.greet() //

const  key = 'lang'  // создание и обращение к динамическому ключу
console.log(person[key])

person.hasWife = true  // изменение элемента обьекта
console.log(person)

person.isProgramer = true // добавление элемента обьекта
console.log(person)