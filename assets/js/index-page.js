
let headerBtn = document.querySelector('#header-btn');
let headerMenu = document.querySelector('#header-menu');
let headerNav = document.querySelector('#header');
let headerListItem = document.querySelectorAll('.header_list-item');
let headerLogo = document.querySelector('.header__logo #logo')
const servicesMenu = document.querySelector("#service-menu");
const serviceCloseBtn = document.querySelector("#close-service-menu");
const serviceButtons = document.querySelectorAll(".service-links");


serviceButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    servicesMenu.classList.add("active");
    toggleHeader();
  })
});

serviceCloseBtn.addEventListener("click", () => {
  servicesMenu.classList.remove("active");
})


headerListItem.forEach((item) => {
  item.addEventListener('click', toggleHeader);
});

window.addEventListener('scroll', handleScroll);



headerBtn.addEventListener('click', toggleHeader);

function handleScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  updateHeader(scrollTop);
}

function handleMouseOver() {
  updateHeader(0, true);
}

function handleMouseOut() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  updateHeader(scrollTop);
}

function updateHeader(scrollTop, isMouseOver = false) {
  if (scrollTop > 100 || isMouseOver) {
    headerNav.classList.add('sticky');
    headerLogo.setAttribute('src', 'assets/images/logo/neotet-white-logo.png');
  } else {
    headerNav.classList.remove('sticky');
    headerLogo.setAttribute('src', 'assets/images/logo/neotet-logo.png');
  }
}

function toggleHeader() {
  headerMenu.classList.toggle('active');
  headerBtn.classList.toggle('active');
  headerNav.classList.toggle('active');
}
