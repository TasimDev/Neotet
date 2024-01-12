
let headerBtn = document.querySelector('#header-btn');
let headerMenu = document.querySelector('#header-menu');
let headerNav = document.querySelector('#header');
let headerListItem = document.querySelectorAll('.header_list-item');
let headerLogo = document.querySelector('.header__logo #logo')
const serviceLink = document.querySelector("#service-link");
const servicesMenu = document.querySelector(".services_menu");
const mobileServiceButton = document.querySelector("#mobile-service-list");
const mobilseServiceLinks = document.querySelector("#mobile-service-list .links")

mobileServiceButton.addEventListener("click", () => {
  mobilseServiceLinks.classList.toggle("active");
})

headerListItem.forEach((item) => {
  item.addEventListener('click', toggleHeader);
});

window.addEventListener('scroll', handleScroll);

servicesMenu.addEventListener('mouseover', handleMouseOver);
servicesMenu.addEventListener('mouseout', handleMouseOut);

serviceLink.addEventListener('mouseover', handleMouseOver);
serviceLink.addEventListener('mouseout', handleMouseOut);

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

function showServicesMenu() {
  servicesMenu.classList.add('active');
}

function closeServicesMenu() {
  servicesMenu.classList.remove('active');
}

