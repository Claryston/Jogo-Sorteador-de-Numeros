function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

if (de > ate){
    alert (`ATENÇÃO!⚠️ O número incial ${de} é maior que o número final ${ate}! Reveja os valores digitados antes de seguir!`)
return;
}

let intervalo = ate - de + 1;
if (quantidade > intervalo) {
    alert(`ATENÇÃO!⚠️ Você quer sortear ${quantidade} número(s), mas o intervalo só permite ${intervalo}. Reduza a quantidade ou aumente o intervalo.`);
    return;
}

    let sorteados = []

    while (sorteados.length < quantidade) {
        let numero = obterNumeroAleatorio(de, ate);
        if (!sorteados.includes(numero))
        sorteados.push(numero);
        }
    sorteados.sort((a,b) => a - b);
    let textoResultado = quantidade === 1 ? 'Número sorteado' : 'Números sorteados';
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">${textoResultado}:${sorteados}</label>`
    alterarStatusBotao(true);    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(ativar) {
    let botao = document.getElementById('btn-reiniciar');

    if (ativar) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}


function reiniciar() {
    ['quantidade', 'de', 'ate'].forEach(id => document.getElementById(id).value = '');
    
    document.getElementById('resultado').innerHTML = 
        '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    
    alterarStatusBotao(false);
}