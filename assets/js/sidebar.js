// FUNÇÃO PARA ABRIR E FECHAR A SIDEBAR
function openCar() {
    const car = document.getElementById("carrinho");

    setTimeout(function () {
        car.style.display = "flex";
        document.body.style.overflow = "hidden";
    }, 300);
}

function exitCar() {
    const car = document.getElementById("carrinho");

    setTimeout(function () {
        car.style.display = "none";
        document.body.style.overflow = "auto";
    }, 300);
}

/* ---------------------------------------------------------------------------- */

function showMenu() {
    document.querySelector('.drop-menu-account').style.display = 'block';
}

function hideMenu() {
    document.querySelector('.drop-menu-account').style.display = 'none';
}