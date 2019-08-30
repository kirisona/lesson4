/*
6. Дан массив пользователей, его можно скопировать [отсюда](https://www.notion.so/8e2b70ab692a4986b1816ce7dd2fb1ca), создать таблицу (см. презентацию).

Условия:
* В конце таблицы обязательно последняя `tr` должна содержать `total balance` всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю. 
* Количество пользователей может быть любым.
* Таблица и все ее содержимое должно создаваться через `js`, в разметке у вас может быть только контейнер какой то.
* В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков `th` которые будут выводиться в таблице. Что то типа `{ name: ‘Name’, email: ‘Email’... }` соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок `th`.
*/

const clients = [
  {
    number: "#",
    name: "Name",
    email: "Email",
    balance: "Balance"
  },
  {
    number: 1,
    name: "Buckner Osborne",
    email: "bucknerosborne@empirica.com",
    balance: 2853.33
  },
  {
    number: 2,
    name: "Rosalie Smith",
    email: "rosaliesmith@katakana.com",
    balance: 1464.63
  },
  {
    number: 3,
    name: "Estrada Davenport",
    email: "estradadavenport@ebidco.com",
    balance: 2823.39
  }
];

let amount = 0;
for (let i = 1; i < clients.length; i++) {
  amount += clients[i].balance;
}

let container = document.querySelector(".container");

let table = `
<table>
  <tr>
    <th>${clients[0].number}</th>
    <th>${clients[0].name}</th>
    <th>${clients[0].email}</th>
    <th>${clients[0].balance}</th>
  </tr>
  <tr>
  <td>${clients[1].number}</td>
  <td>${clients[1].name}</td>
  <td>${clients[1].email}</td>
  <td>${clients[1].balance}</td>
  </tr>
  <tr>
  <td>${clients[2].number}</td>
  <td>${clients[2].name}</td>
  <td>${clients[2].email}</td>
  <td>${clients[2].balance}</td>
  </tr>
  <tr>
  <td>${clients[3].number}</td>
  <td>${clients[3].name}</td>
  <td>${clients[3].email}</td>
  <td>${clients[3].balance}</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td></td>
    <td>Total balance: ${amount}</td>
  </tr>
</table>`;

container.insertAdjacentHTML("afterbegin", table);

let tableStyle = document.querySelector("table");

tableStyle.style.width = "100%";

let th = document.querySelectorAll("th");

for (let i = 0; i < th.length; i++) {
  th[i].style.textAlign = "left";
}
