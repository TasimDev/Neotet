
let headerBtn = document.querySelector('#header-btn');
let headerMenu = document.querySelector('#header-menu');
let headerNav = document.querySelector('#header');
let headerListItem = document.querySelectorAll('.header_list-item');
let headerLogo = document.querySelector('.header__logo #logo')


headerListItem.forEach((item) => {
  item.addEventListener('click', () => {
    toggleHeader();
  });
});

let lastScrollTop = 0;

window.addEventListener("scroll", handleScroll);



const servicesMenu = document.querySelector(".services__menu");
const serviceLink = document.querySelector("#services-link");



function handleScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    headerNav.classList.add('sticky');
    headerLogo.setAttribute('src', "assets/images/logo/neotet-white-logo.png");
  } else {
    headerNav.classList.remove('sticky');
    headerLogo.setAttribute('src', "assets/images/logo/neotet-logo.png");
  }
}

function toggleHeader() {
  headerMenu.classList.toggle('active');
  headerBtn.classList.toggle('active');
  headerNav.classList.toggle('active');
}

function showServicesMenu() {

  servicesMenu.classList.add("active");

}

function closeServicesMenu() {
  servicesMenu.classList.remove("active");

}


headerBtn.addEventListener('click', toggleHeader);


