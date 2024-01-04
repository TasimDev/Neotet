
let headerBtn = document.querySelector('#header-btn');
let headerMenu = document.querySelector('#header-menu');
let headerNav = document.querySelector('#header');
let headerListItem = document.querySelectorAll('.header_list-item');

headerBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  headerBtn.classList.toggle('active');
  headerNav.classList.toggle('active');
})
headerListItem.forEach((item) => {
  item.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    headerBtn.classList.toggle('active');
    headerNav.classList.toggle('active');
  })
})

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let width = window.innerWidth;
  if (width > '900') {
    if (scrollTop >= lastScrollTop) {
      headerNav.style.top = '-100px';

    } else {
      headerNav.style.top = '0';
    }
    lastScrollTop = scrollTop;
  } else {
    headerNav.style.top = 0;
  }

})


