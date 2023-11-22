function abrirDetails() {
    const details = document.getElementById('details').style.display = "flex"

    document.body.style.overflow = 'hidden';
}

function fecharDetails() {
    const details = document.getElementById('details').style.display = "none"

    document.body.style.overflow = 'auto';
}