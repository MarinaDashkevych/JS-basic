// Обьекты
const person = {   //  пример создания масива
    name: 'mari',    // string
    age: 29,           // number
    isProgrammer: true,    // boolean
    language: ['ru', 'uk', 'en'], // array
    'complex key': 'complex value',  // хотим удалить этот ключ
    ['something_' + (1 + 8)]: 'something key ',
    greet: function () {                 // function  устарелый вариант вывода функции в обьекте
        console.log('greet deplaceted')
    },
    greet() {                 // function  правильное обьявление функции
        console.log('greet')
    },
    info() {
        console.info('Инфо по имени', this.name)
    }
}

console.log(person.name) //обращеник в конкретному полю обьекта
console.log(['complex key']) // так же обращение к свойству обьекта
person.greet()      // вызов метода обьекта
delete person['something_9'] // удаление не нужного ключа и значения в масиве
console.log(person)

// пример деструкторизации, для избежания дублирования кода
const name1 = person.name           // не оч обращение к группе свойств обьекта - много дкблирования
const language1 = person.lenguage
const age1 = person.age
console.log(name1, age1, language1)

const {name, age, language} = person // идентичные записи правильное обращение к группе свойств обьекта
console.log(name, age, language)


for (let key in person) {  // итерирование обьекта  ОПАСЕН-бежит не тольео по ключам, а и может заходить в прототип
    if (person.hasOwnProperty(key)) {   // делать цикл только с проверкой  hasOwnProperty
        console.log('key:', key)
        console.log('value:', person[key])
    }
}

const keys = Object.keys(person) // метод глобального обьекта, который получает ключи в виде масива
console.log(keys)


Object.keys(person).forEach((key) => {  // forEach первым параметром принимает call-back функцию
    console.log('key:', key)
    console.log('value:', person[key])
})

const logger = {
    keys() {
        console.log('Obj Keys: ', Object.keys(this))
    },

// logger.keys(person)
// const bound = logger.keys.bind(logger)    // привязка по this // bind
// bound()

withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('-----start-----')
        }
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
            if (between) {
                console.log('---between-----')
            }
        })
        if (bottom) {
            console.log('------end-----')
        }
    }
}

logger.withParams.call(person, true, true)
logger.withParams.apply(person, [true, true, true]) // аналогичный вывод
