const searchElement = document.querySelector('.search');
const searchInputElement = searchElement.querySelector('input');

searchElement.addEventListener('click', () => {
  searchInputElement.focus();
});

searchInputElement.addEventListener('focus', () => {
  searchElement.classList.add('focused');
  searchInputElement.setAttribute('placeholder', '통합검색');
});

searchInputElement.addEventListener('blur', () => {
  searchElement.classList.remove('focused');
  searchInputElement.setAttribute('placeholder', '');
});

const badgeElement = document.querySelector('header .badges');

window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (window.scrollY > 500) {
      // TODO 배지 숨기기
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeElement, 0.6, {
        opacity: 0,
        display: 'none',
      });
    } else {
      // TODO 배지 보이기
      gsap.to(badgeElement, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300),
);
// _.throttle(함수, 시간)

const fadeElements = document.querySelectorAll('.visual .fade-in');

fadeElements.forEach((fadeElement, index) => {
  gsap.to(fadeElement, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});
