const btnExit = document.querySelector('.exit-menu');
const btnOpen = document.querySelector('.btn-menu-mobile');
let menuOpen = false;

function openMenuMobile() {
    const menuMobile = document.querySelector('.menu-mobile');
    menuMobile.style.display = "block";
    menuOpen = true
    updateIcon()
}

function exitMenuMobile() {
    const menuMobile = document.querySelector('.menu-mobile');
    menuMobile.style.display = "none";
    menuOpen = false
    updateIcon()
}

function updateIcon() {
    if (menuOpen) {
        btnOpen.style.display = "none";
        btnExit.style.display = "block";
    } else {
        btnOpen.style.display = "block";
        btnExit.style.display = "none";
    }
}

btnOpen.addEventListener('click', openMenuMobile);
btnExit.addEventListener('click', exitMenuMobile);