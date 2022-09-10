const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const elemID = anchor.getAttribute('href');
    document.querySelector('' + elemID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    closeMenu();
  });
}

const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.nav-close');
const nav = document.querySelector('.nav-list');

burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

function openMenu() {
  nav.classList.add('active');
}

function closeMenu() {
  nav.classList.remove('active');
}
