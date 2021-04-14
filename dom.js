// console.dir(heading) // вернет обьект большой каталог
// heading.textContent = 'changed from JS'  // изменит хэдинг(шапку)
// heading.style.color = 'red' // меняем цвет текста
// heading.style.textAlign = 'center' // вывод по центру
// // const heading2 = document.getElementsByTagName('h2') // устарелый вариант получения
// // console.log(heading2)

// // setTimeout((node) => {  // node - задаем узал и к нему обращяемся
// //     node.textContent = 'changed from JS'
// //     node.style.color = 'red'
// //     node.textAlign = 'center'
// // }, 1500)
//

// Задача
const heading = document.getElementById('hello')
const heading2 = document.querySelector('h2') //возвращяет всегда один элемент
console.dir(heading2)
const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length - 1]
console.log(heading3)


setTimeout(() => {
    addStyleTo(heading, 'JS is amazing', 'green')
}, 1500)


const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
})
setTimeout(() => {
    addStyleTo(link, 'learn JS')
}, 3000)


setTimeout(() => {
    addStyleTo(heading2, 'you can this!', 'blue', '4rem')
}, 4500)

function addStyleTo(node, text, color = 'red', fontSize = '1rem') {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.widht = '100%'
    if (fontSize) {   // проверка на falsy : ' ', undefined, null, 0, false
        node.style.fontSize = fontSize
    }
}

heading3.onclick = () => {
    if (heading3.style.color === 'red') {
        heading3.style.color = 'green'
        heading3.style.backgroundColor = 'white'
    } else {
        heading3.style.color = 'white'
        heading3.style.color = 'black'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'red') {
        heading2.style.color = 'green'
        heading2.style.backgroundColor = 'white'
    } else {
        heading2.style.color = 'white'
        heading2.style.color = 'yellow'
    }
})