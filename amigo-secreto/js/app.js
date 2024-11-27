let participantes = []

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value
    if (nomeAmigo === null || nomeAmigo === '' || participantes.includes(nomeAmigo)) {
        alert('Nome inválido')
        return
    }
    participantes.push(nomeAmigo)

    document.getElementById('lista-amigos').textContent = participantes
    document.getElementById('nome-amigo').value = ''
}

function sortear() {
    if (participantes.length < 4) {
        alert('Este sorteio está abaixo da quantidade minima de participantes')
        return
    }

    let amigos = []

    while (amigos.length < participantes.length) {
        let indiceAleatorio = parseInt(Math.random() * participantes.length)
        let numeroSorteado = participantes[indiceAleatorio]

        if (!amigos.includes(numeroSorteado)) {
            amigos.push(numeroSorteado)
        }
    }

    let sorteio = document.getElementById('lista-sorteio')

    for (let i = 0; i < amigos.length; i++) {
        sorteio.innerHTML += i == amigos.length - 1 ? `${amigos[i]} --> ${amigos[0]}` : `${amigos[i]} --> ${amigos[i + 1]} <br>`
    }
}

function reiniciar() {
    document.getElementById('lista-sorteio').innerHTML = ''
    document.getElementById('lista-amigos').innerHTML = ''

    participantes = []
    amigos = []
}