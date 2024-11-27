let qtdPista = parseInt(document.getElementById('qtd-pista').textContent)
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent)
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent)

function comprarPista(qtd) {
    if (qtd > qtdPista.textContent && ((qtdPista - qtd) < 0)) {
        alert('Quantidade não disponivel')
    } else {
        qtdPista = qtdPista - qtd
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso')
    }
}

function comprarSuperior(qtd) {
    if (qtd > qtdSuperior.textContent && ((qtdSuperior - qtd) < 0)) {
        alert('Quantidade não disponivel')
    } else {
        qtdSuperior = qtdSuperior - qtd
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert('Compra realizada com sucesso')
    }
}

function comprarInferior(qtd) {
    if (qtd > qtdInferior.textContent && ((qtdInferior - qtd) < 0)) {
        alert('Quantidade não disponivel')
    } else {
        qtdInferior = qtdInferior - qtd
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Compra realizada com sucesso')
    }
}

function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value
    let qtd = parseInt(document.getElementById('qtd').value)

    if (tipo == 'pista') {
        comprarPista(qtd)
    } else if (tipo == 'superior') {
        comprarSuperior(qtd)
    } else {
        comprarInferior(qtd)
    }
}