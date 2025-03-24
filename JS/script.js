import { catalog } from "../db.js";

const burger = document.getElementById('burger');
const headerList = document.getElementById('header-list');
const overlay = document.createElement('div'); // Создаём элемент для затемнения фона
const header = document.getElementById('header');
const cart = document.getElementById('cart');
const cart_bag = document.querySelector('.cart_line svg'); // Используем <svg> вместо <img>
const list = document.getElementById('scrollContainer');
const spans = document.querySelectorAll('.burger span'); // Получаем все span внутри бургера
const logo = document.getElementById('top');
const card = document.querySelectorAll(".home_catalog-card .home_card-item");

const scrollContainer = document.getElementById('scrollContainer');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

// Добавляем затемнение фона
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Обработчик для бургер-меню
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
  logo.style.color = "#000";
  if (cart_bag) {
    cart_bag.setAttribute('fill', '#000'); // Меняем цвет SVG
  }
});

header.addEventListener('mouseleave', () => {
  if (pageYOffset === 0) {
    header.style.backgroundColor = "transparent";
    cart.style.color = "#fff";
    spans.forEach(span => span.style.backgroundColor = "#fff"); // Возвращаем цвет span
    logo.style.color = "#fff";
    if (cart_bag) {
      cart_bag.setAttribute('fill', '#fff'); // Возвращаем цвет SVG
    }
  }
});

// Изменение цвета фона при скролле
window.addEventListener('scroll', () => {
  if (pageYOffset > 0) {
    header.style.backgroundColor = "#fff";
    cart.style.color = "#000";
    spans.forEach(span => span.style.backgroundColor = "#000"); // Меняем цвет span при скролле
    logo.style.color = "#000"; 
    if (cart_bag) {
      cart_bag.setAttribute('fill', '#000'); // Меняем цвет SVG при скролле
    }
  } else {
    header.style.backgroundColor = "transparent";
    cart.style.color = "#fff";
    spans.forEach(span => span.style.backgroundColor = "#fff"); // Возвращаем цвет span
    logo.style.color = "#fff";
    if (cart_bag) {
      cart_bag.setAttribute('fill', '#fff'); // Возвращаем цвет SVG
    }
  }
});

// Генерация списка карточек (закомментировано, так как catalog не используется)
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
if (scrollContainer && modal) {
  scrollContainer.addEventListener('click', (event) => {
    if (event.target.closest('.home_card-item')) {
      modal.style.display = 'block';
    }
  });
}

// Закрытие модального окна при клике на крестик
if (closeModal && modal) {
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// Закрытие модального окна при клике вне его области
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Имитация загрузки
window.onload = function () {
  setTimeout(function () {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    if (loadingScreen && content) {
      loadingScreen.style.display = 'none';
      content.style.display = 'block';
    }
  }, 3000); // Время загрузки в миллисекундах
};

// Скролл кнопки
const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

if (buttonRight && buttonLeft && scrollContainer) {
  buttonRight.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: 700, // Прокручиваем на 700px вправо
      behavior: 'smooth' // Плавный скролл
    });
  });

  buttonLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -700, // Прокручиваем на 700px влево
      behavior: 'smooth' // Плавный скролл
    });
  });
}