let precoCarrinho = 0;
let listaProdutos = document.getElementById("lista-produtos");
let total = document.getElementById("valor-total");

function adicionar() {
    let quantidade = Number(document.getElementById("quantidade").value);
    let produto = document.getElementById("produto").value;

    if (quantidade > 0) {
        let nomeDoProduto = produto.split("-")[0];
        let precoDoProduto = Number(produto.split("R$")[1]);

        precoCarrinho = precoCarrinho + (precoDoProduto * quantidade);

        listaProdutos.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${precoDoProduto}</span>
        </section>`;

        total.innerHTML = `R$ ${precoCarrinho},00`;
    } else {
        alert('ai não né major')
    }

}

function limpar() {
    listaProdutos.innerHTML = `
    <section class="carrinho__produtos__produto">
    </section>`;
    total.innerHTML = `R$ $0,00`;
    precoCarrinho = 0;
}
