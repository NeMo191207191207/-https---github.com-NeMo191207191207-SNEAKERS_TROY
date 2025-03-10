const burger = document.getElementById('burger');
const headerList = document.getElementById('header-list');
const overlay = document.createElement('div'); // Создаём элемент для затемнения фона
const header = document.getElementById('header')
overlay.classList.add('overlay');
document.body.appendChild(overlay);

burger.addEventListener('click', () => {
  headerList.classList.toggle('active');
  burger.classList.toggle('active');
});

// Закрытие меню при клике на затемнение
overlay.addEventListener('click', () => {
  headerList.classList.remove('active');
  burger.classList.remove('active');
  overlay.classList.remove('active');
});
window.addEventListener('scroll', function(){
  if(pageYOffset > 0){
    header.style.backgroundColor = "#fff"
  }else{
    header.style.backgroundColor = "transparent"
  }
})