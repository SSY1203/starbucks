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

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

const promotionElement = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {
    promotionElement.classList.add('hide');
  } else {
    promotionElement.classList.remove('hide');
  }
});

const random = (min, max) => {
  return parseFloat(Math.random() * (max - min) + min);
};

const floatingObject = (selector, delay, size) => {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
};

floatingObject('.floating', 1, 15);
floatingObject('.floating', 0.5, 15);
floatingObject('.floating', 1.5, 20);
