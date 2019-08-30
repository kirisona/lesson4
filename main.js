// 1. Найти параграф и получить его текстовое содержимое (только текст!)

let paragraf = document.querySelector("p");
console.log(paragraf.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function information(element) {
  let info = {
    type: element.nodeType,
    name: element.nodeName,
    child: element.childNodes.length
  };

  return info;
}

console.log(information(document.querySelector("div")));

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: `getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]`

let link = document.querySelectorAll("a");

let linkArray = [];

for (let i = 0; i < link.length; i++) {
  if (link[i].closest("ul") !== null) {
    linkArray.push(link[i].textContent);
  }
}

console.log(linkArray);

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// `-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-`

let paragrafArray = paragraf.childNodes;

for (let i = 0; i < paragrafArray.length; i++) {

    paragrafArray[i].data = "-text-";

}

// второй вариант - наглый, но тоже работает.
// paragraf.innerHTML = `-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-`;

// console.log(paragraf);

// атрибуты

// 1. Найти в коде список `ul` и добавить класс `“list”`

let list = document.querySelector('ul');

list.setAttribute('class', 'list');

// 2. Найти в коде ссылку, находящуюся после списка `ul`, и добавить `id=link`

let linkLast = document.querySelector('ul ~ a');

console.log(linkLast.setAttribute('id', 'link'));

// 3. На `li` через один (начиная с самого первого) установить класс `“item”`

let items = document.querySelectorAll('li');

for (let i = 0; i < items.length; i++) {
  if (i % 2 === 0) {
    items[i].classList.add('item');
  }
}

// 4. На все ссылки в примере установить класс `“custom-link”`

for (let i = 0; i < link.length; i++) {
  link[i].classList.add('custom-link');
}

// # Манипуляция DOM

// 1. Не используя innerHTML, добавить в список несколько `li` с классом `‘new-item’` и текстом `‘item’` + номер `li`:
// ```html
// <ul>
//   <li><a href="#">Link1</a></li>
//   ...
//   <li class=”new-item”>item 5</li>
//   <li class=”new-item”>item 6</li>
// </ul>
// ```
// Вручную номер `li` не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

for (let i = 1; i < 5; i++) {
  let li = document.createElement('li');
  list.insertAdjacentElement('beforeend', li);

  if (li.textContent == '') {
    li.classList.add('new-item');
  }
}

let newLiItem = document.querySelectorAll('li.new-item');

for (let i = 0; i < newLiItem.length; i++) {
  newLiItem[i].textContent = `item ${i + 1}`;
}

// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу `strong` (в каждую ссылку один - `strong`). 

for (let i = 0; i < link.length; i++) {
  let strong = document.createElement('strong');
  if (link[i].closest("ul") !== null) {
    link[i].insertAdjacentElement('beforeend', strong);
  }
}

// 3. В начало документа (в начало `body`) добавить картинку `img` с атрибутами `src` и `alt` (текст придумайте сами). В `src` добавьте реальный `url` к картинке. Для создания элемента используйте метод `createElement`.

let newImg = document.createElement('img');

let body = document.body;

body.insertAdjacentElement('afterbegin', newImg);

newImg.setAttribute('src', 'earth.png');
newImg.setAttribute('alt', 'Earth');

console.log(newImg);

// 4. Найти на странице элемент `mark`, добавить в конец содержимого текст `“green”` и на элемент установить класс green

let mark = document.querySelector('mark');

mark.insertAdjacentText('beforeend', ' green');
mark.classList.add('green');

// 5. Отсортировать `li` внутри списка в обратном порядке (по тексту внутри)

let newListLi = document.querySelector('ul');

let newListLiText = [...newListLi.children];

console.log(newListLiText);

// for (let i = 0; i < newListLi.length; i++) {
//   newListLiText.push(newListLi[i].textContent);
// }

// console.log(newListLiText);

// newListLiText.sort(function(prev, next) {
//   if (prev > next) return -1;
//   if (prev < next) return 1;
// });

// function reverceLi() {
//   for (let i = 0;; i++) {
//     newListLi[i].innerHTML = newListLiText[i];
//   }
// }

// reverceLi();


function compareStr(prevLi, nextLi) {
  if (
    prevLi.innerText[prevLi.innerText.length - 1] >
    nextLi.innerText[nextLi.innerText.length - 1]
  ) {
    return -1;
  }

  if (
    prevLi.innerText[prevLi.innerText.length - 1] <
    nextLi.innerText[nextLi.innerText.length - 1]
  ) {
    return 1;
  }
}

function sortLi() {
  newListLiText.sort(compareStr);

  for (let i = 0; i < newListLiText.length; i++) {
    newListLi.appendChild(newListLiText[i]);
  }
}
sortLi();

//честно скопипастила, но разобралась в решении

