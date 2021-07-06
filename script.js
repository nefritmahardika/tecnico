const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navlist ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});
