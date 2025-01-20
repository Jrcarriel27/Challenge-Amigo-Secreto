// Lista para armazenar os nomes dos amigos
let listaAmigos = [];
// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    listaAmigos.includes(nome);
    listaAmigos.push(nome);
    atualizarListaAmigos();
    input.value = ''; // Limpa o campo de entrada
    if  (input === ''){
        alert('Por favor, digite um nome válido');
    }
}
// Atualiza a exibição da lista
function atualizarListaAmigos() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    listaAmigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = amigo;
//Botão para remover o nome caso digitado errado
        let removerBotao = document.createElement('button');
        removerBotao.textContent = 'Remover';
        removerBotao.classList.add('button-remove');
        removerBotao.onclick = () => removerAmigo(index);
        removerBotao.style.padding = '2px 5px';
        li.appendChild(removerBotao);
        ul.appendChild(li);
    });
}
// Remove um amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarListaAmigos();
}
// Função para sortear os pares de amigo 
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('É necessário ter pelo menos 2 amigos.');
        return;
    }
    let sorteio = [];
    let amigosRestantes = [...listaAmigos];   
    listaAmigos.forEach(amigo => {
        let indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
        let sorteado = amigosRestantes[indiceAleatorio];
        // Garante que a pessoa não sorteie a si mesma
        while (sorteado === amigo) {
            if (amigosRestantes.length === 1) {
                alert('Não foi possível realizar sem repetiçao. Tente novamente.');
                return;
            }
            sorteado = amigosRestantes[Math.floor(Math.random() * amigosRestantes.length)];
        }
        sorteio.push(`${amigo} tirou ${sorteado}`);
        amigosRestantes.splice(indiceAleatorio, 1);
    });
    exibirResultado(sorteio);
}
// Função para exibir o resultado do sorteio
function exibirResultado(sorteio) {
    let ul = document.getElementById('resultado');
    ul.innerHTML = '';
    sorteio.forEach(par => {
        let li = document.createElement('li');
        li.textContent = par;
        ul.appendChild(li);
    });
}