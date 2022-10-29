const form = document.getElementById("novoItem"); //Captura o elemento
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem("itens")) || [];


itens.forEach( (elemento) => {
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) =>{ //evento recebe os dados
    evento.preventDefault() //interromper o comportamento

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const itemAtual = {
        "nome": nome.value,
        "quantidade":quantidade.value
    }

    criaElemento(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens)); // JSON.stringify transforma objeto em uma string


    nome.value = ""
    quantidade.value = ""

    
})

function criaElemento(item) {
    // <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)

     
}