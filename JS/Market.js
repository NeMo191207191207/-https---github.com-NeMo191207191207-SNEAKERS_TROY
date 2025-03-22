import { catalog } from "../db.js";

const burger = document.getElementById('burger');
const headerList = document.getElementById('header-list');
const overlay = document.createElement('div'); // Создаём элемент для затемнения фона
const header = document.getElementById('header');
const cart = document.getElementById('cart');
const cart_bag = document.querySelectorAll('.cart_line svg'); // Используем <svg> вместо <img>
const list = document.getElementById('scrollContainer');
const spans = document.querySelectorAll('.burger span'); // Получаем все span внутри бургера
const logo = document.getElementById('top');
const card = document.querySelectorAll(".home_catalog-card .home_card-item");

const scrollContainer = document.getElementById('scrollContainer');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

overlay.classList.add('overlay');
document.body.appendChild(overlay);

burger.addEventListener('click', () => {
  headerList.classList.toggle('active');
  burger.classList.toggle('active');
  spans.forEach(span => span.style.backgroundColor = "#ffcc00");
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

// Открытие модального окна при клике на любой элемент внутри ul
scrollContainer.addEventListener('click', (event) => {
  if (event.target.closest('.home_card-item')) {
    modal.style.display = 'block';
  }
});

// Закрытие модального окна при клике на крестик
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его области
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});