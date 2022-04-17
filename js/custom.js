const burger = document.querySelector('.menu-xs');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const header = document.querySelector('.header-nav');
const links = document.querySelectorAll('.header-nav a');

const appear = () => {
    header.style.transform = 'none';
}
const disappear = () => {
    header.style.transform = '';
}

burger.addEventListener('click', appear);
main.addEventListener('click', disappear);
footer.addEventListener('click', disappear);
links.forEach((link)=>{
    link.addEventListener('click', disappear);
});