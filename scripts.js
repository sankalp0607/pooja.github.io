const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    mobileMenu.style.left = '0%';
    overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    mobileMenu.style.left = '-100%';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    mobileMenu.style.left = '-100%';
    overlay.style.display = 'none';
});
