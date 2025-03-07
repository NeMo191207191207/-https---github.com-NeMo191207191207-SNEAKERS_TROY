// Скролл карточек
function scrollLeft() {
  const container = document.querySelector('.home_catalog-card');
  container.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
  const container = document.querySelector('.home_catalog-card');
  container.scrollBy({ left: 200, behavior: 'smooth' });
}

// Обновление состояния кнопок
function updateButtons() {
  const container = document.querySelector('.home_catalog-card');
  const leftButton = document.querySelector('.scroll-button.left');
  const rightButton = document.querySelector('.scroll-button.right');

  leftButton.disabled = container.scrollLeft === 0;
  rightButton.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
}

// Добавляем обработчик события скролла
document.querySelector('.home_catalog-card').addEventListener('scroll', updateButtons);

// Инициализация кнопок при загрузке страницы
updateButtons();