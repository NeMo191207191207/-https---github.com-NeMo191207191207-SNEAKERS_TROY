import { catalog } from "../db.js";

const burger = document.getElementById('burger');
const headerList = document.getElementById('header-list');
const overlay = document.createElement('div'); // Создаём элемент для затемнения фона
const header = document.getElementById('header');
const cart = document.getElementById('cart');
const list = document.getElementById('scrollContainer');
const spans = document.querySelectorAll('.burger span'); // Получаем все span внутри бургера

overlay.classList.add('overlay');
document.body.appendChild(overlay);

burger.addEventListener('click', () => {
  headerList.classList.toggle('active');
  burger.classList.toggle('active');
  spans.forEach(span => span.style.backgroundColor = "#ffcc00");
});



// Изменение цвета фона при наведении на header
header.addEventListener('mouseenter', () => {
  header.style.backgroundColor = "#fff";
  cart.style.color = "#000";
  spans.forEach(span => span.style.backgroundColor = "#000"); // Меняем цвет всех span внутри бургера
});

header.addEventListener('mouseleave', () => {
  if (pageYOffset === 0) {
    header.style.backgroundColor = "transparent";
    cart.style.color = "#fff";
    spans.forEach(span => span.style.backgroundColor = "#fff"); // Возвращаем цвет span
  }
});

// Изменение цвета фона при скролле
window.addEventListener('scroll', () => {
  if (pageYOffset > 0) {
    header.style.backgroundColor = "#fff";
    cart.style.color = "#000";
    spans.forEach(span => span.style.backgroundColor = "#000"); // Меняем цвет span при скролле
  } else {
    header.style.backgroundColor = "transparent";
    cart.style.color = "#fff";
    spans.forEach(span => span.style.backgroundColor = "#fff"); // Возвращаем цвет span
  }
});

// Генерация списка карточек
// for (const card of catalog) {
//   list.innerHTML += `
//     <li class="home_card-item">
//       <div class="home_card-item-image"><img src="${card.image}" alt="${card.name}"></div>
//       <div class="home_card-info">
//         <span>${card.name}</span>
//         <p>${card.dis}</p>
//         <div class="container-button"><button class="button_buy">Купить</button></div>
//       </div>
//     </li>
//   `;
// }