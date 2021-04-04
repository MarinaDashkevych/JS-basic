//Number

const num = 42
const float = 42.42
const pow = 10e3
console.log(pow)

console.log('MAX_SAVE_INTEGER',Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2,53) -1)
console.log(Number.MIN_SAFE_INTEGER)
console.log('2/0', 2/0) // INFINITY бесконечность будет при :0

console.log(Number.NuN) //
const  wierd = 2 / undefined
console.log(Number.isNaN(wierd))

console.log(Number.isNaN(42)) // обьект Number
console.log(Number.isNaN(Infinity))
console.log(isFinite(42))

const  stringInt = '40'
const stringFloat = '40.40'
console.log(stringInt + 2) //422 получится

console.log(Number.parseInt(stringInt) + 2) // функция сложения строки и числа

console.log(0.4 + 0.2) // 0.60000000001 - проблема(битовый размер)
console.log(+(0.4 + 0.2).toFixed(1)) // вернет строку
console.log(parseFloat((0.4 + 0.2).toFixed(1))) // вернет число

//BigInt
console.log(typeof 9999999999999999999) //Number
console.log(typeof 9999999999999999999n) //BigInt
console.log(9999999999999999999n - 657585959598585858589n) // работает только с таким же типом данных BigInt
console.log(10n - 4) // error
console.log(10n - BigInt(4)) // получим 6n

//Math
console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25)) // квадрат
console.log(Math.pow(5,5))  // степень
console.log(Math.abs(-42))  // убирает отрицание
console.log(Math.max(45,89,42.7)) // max  значение
console.log(Math.min(45,89,42.7)) //min значение
console.log(Math.floor(42.7)) // округление в большую сторону
console.log(Math.ceil(42.7)) // округление в меньшую сторону

function getRandomBeetween(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}
console.log(getRandomBeetween(45, 67));

const name = 'mari'
const age = 26

function getAge() {
    return age
}

const out = 'Привет я  ' + name + ' и мне ' + age + ' лет' // конкатенаяция и вывод переменных
console.log(out)

const out1 = ` привет меня зовут ${name} и мой возраст ${getAge()} и еще ${age < 30 ? 'a' : 'B'} лет` // по-новому E6
console.log(out1)

const  output = `
<div> HTML div</div>
<p> This p </p>
`
console.log(output) // `` дает возмоджность вывода HTML


const nameFirst = 'Mari'
console.log(name.length)  // длина
console.log(name.toUpperCase(nameFirst))   // верхний регистр
console.log(name.toLowerCase(nameFirst))   // нижний регистр
console.log(name.charAt(2))  // какой символ в строке
console.log(name.indexOf('y'))  //ищит конкретный елемент,если нет, то выдаст -1
console.log(name.startsWith('mari')) // с какго слова начинается строка,реристр имеет значение true/false
console.log(name.repeat(8)) //  повторяет заданок количество раз
const str = '      pass    '
console.log(str.trim())   // убирает пробелы
console.log(str.trimRight())

//
function logPerson(s, name, age) {
    if (age < 0) {
        age = 'еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`   //  пример валидации
}

const namePers = 'mari'
const agePers = 26
const namePers2 = 'tim'
const agePers2 = 0

const outP = logPerson`ИМЯ: ${namePers} , Возраст: ${agePers} !! `
const outP2 = logPerson`ИМЯ: ${namePers2} , Возраст: ${agePers2}  `

console.log(outP)
console.log(outP2)
