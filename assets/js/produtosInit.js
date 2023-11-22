function createHTML() {
    let container = document.getElementById('categoriasContainer');

    categoriasProducts.forEach(categoria => {
        let categoriaDiv = document.createElement('div');
        categoriaDiv.classList.add('category');
        categoriaDiv.innerHTML += `
            <h2>${categoria.title}</h2>
            <a href="${categoria.url}" class="all">Ver tudo</a>
        `;

        container.appendChild(categoriaDiv);

        let produtosDiv = document.createElement('div');
        produtosDiv.classList.add('products');

        categoria.products.slice(0, 4).forEach((produto, key) => {
            let produtoDiv = document.createElement('div');
            produtoDiv.classList.add('products-itens');
            produtoDiv.innerHTML += `
                <div class="img-p">
                    <img class="img-product" src="${produto.img}" alt="${produto.alt}">
                </div>
                <div class="desc-p">
                    <p class="desc">${produto.name}</p>
                    <span class="de">R$ ${produto.priceDe.toFixed(2)}</span>
                    <span class="por">R$ ${produto.pricePor.toFixed(2)}</span>
                    <p class="parcela">${produto.desc}</p>
                </div>
                <div class="btn-add">
                    <button class="btn-add-product">Adicionar <i class="bi bi-cart"></i></button>
                </div>
            `;

            produtosDiv.appendChild(produtoDiv);

        });

        container.appendChild(produtosDiv);

    });
}

createHTML();


// CARRINHO

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', made)
} else {
    made()
}

var totalAmount = "0,00"


function made() {
    const dellProductBtn = document.getElementsByClassName('deletar-btn');
    for (var i = 0; i < dellProductBtn.length; i++) {
        dellProductBtn[i].addEventListener('click', removeItens);
    }

    // Adiciona o evento de adicionar ao carrinho
    const addProductCar = document.getElementsByClassName('btn-add-product');
    for (var i = 0; i < addProductCar.length; i++) {
        addProductCar[i].addEventListener('click', addCar);
    }

    // Adiciona o evento de atualizar ao carrinho para os elementos existentes
    const inputQtd = document.getElementsByClassName('qtd-product');
    for (var i = 0; i < inputQtd.length; i++) {
        inputQtd[i].addEventListener('change', atualizaCar);
    }
}

// Adiciona o evento de atualizar ao carrinho para elementos futuros
document.body.addEventListener('change', function (e) {
    if (e.target.classList.contains('qtd-product')) {
        atualizaCar();
    }
});

// Chama a função made
made();


function removeItens(e) {
    e.target.parentElement.parentElement.parentElement.remove();
    atualizaCar();
}

function addCar(e) {
    const btn = e.target;
    const infoProduct = btn.parentElement.parentElement;
    const imgProduct = infoProduct.getElementsByClassName('img-product')[0].src;
    const title = infoProduct.getElementsByClassName('desc')[0].innerText;
    const pricePor = infoProduct.getElementsByClassName('por')[0].innerText;

    const productName = document.getElementsByClassName('name-product');
    let productExists = false;

    for (var i = 0; i < productName.length; i++) {
        if (productName[i].innerText === title) {
            productName[i].parentElement.parentElement.getElementsByClassName('qtd-product')[0].value++;
            productExists = true;
            break;
        }
    }

    if (!productExists) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('carrinho-item');

        newDiv.innerHTML = `
            <div class="img-car">
                <img src="${imgProduct}" alt="${title}">
            </div>
            <div class="content-car">
                <div class="desc-car">
                    <p class="name-product">${title}</p>
                    <button onclick="abrirDetails()">Detalhes</button>
                </div>
                <div class="price-product">
                    <p class="price-car">${pricePor}</p>
                </div>
                <div class="dell-car">
                    <i title="Deletar" class="bi bi-trash deletar-btn"></i>
                    <input class="qtd-product" type="number" value="1" min="1" max="10">
                </div>
            </div>
        `;

        const cart = document.querySelector('.sidebar-car .carrinho');
        cart.append(newDiv);

        const carrinho = document.querySelector('.sidebar-car .carrinho');

        carrinho.addEventListener('click', function (e) {
            if (e.target && e.target.classList.contains('deletar-btn')) {
                removeItens(e);
            }
        });

    }

    atualizaCar();

    qtdSacolaDiv.style.display = 'flex';
}

const qtdSacolaDiv = document.getElementById('qtd-sacola');

function atualizaCar() {
    const carrinhoItem = document.getElementsByClassName('carrinho-item');
    let totalProduct = 0;
    let totalQuantity = 0;

    for (var i = 0; i < carrinhoItem.length; i++) {
        const priceCarElement = carrinhoItem[i].getElementsByClassName('price-car')[0];
        const priceCarText = priceCarElement ? priceCarElement.innerText : '0';

        const priceCarWithoutCurrency = priceCarText.includes('R$') ? priceCarText.replace("R$", "").replace(",", ".") : priceCarText;
        const priceCar = parseFloat(priceCarWithoutCurrency) || 0;

        const qtdProductElement = carrinhoItem[i].getElementsByClassName('qtd-product')[0];
        const productQtd = qtdProductElement ? parseInt(qtdProductElement.value) || 0 : 0;

        totalProduct += priceCar * productQtd;
        totalQuantity += productQtd;
    }

    totalProduct = totalProduct.toFixed(2);
    totalProduct = totalProduct.replace(".", ",");
    document.querySelector('.total span').innerText = "R$" + totalProduct;

    // Atualiza a quantidade na div "qtd-sacola"
    qtdSacolaDiv.innerText = totalQuantity.toString();
}