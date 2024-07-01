// ENCRIPTAÇÃO DA FRASE

function encriptarPalavra(palavra){
    let arrayLetras = [];
    for (const char of palavra) {
        if(char == 'a'){arrayLetras.push('ai');}
        else if(char == 'e'){arrayLetras.push('enter');}
        else if(char == 'i'){arrayLetras.push('imes');}
        else if(char == 'o'){arrayLetras.push('ober');}
        else if(char == 'u'){arrayLetras.push('ufat');}
        else {arrayLetras.push(char);}  
    }

    palavraFinal = '';
    for (const char of arrayLetras){palavraFinal = palavraFinal + char;}
    return palavraFinal;
}

function encriptarFrase(){
    let mensagemRecebida = document.querySelector('input').value;

    if(mensagemRecebida == ''){
        document.querySelector('button.button-38').style.visibility = 'hidden';
        document.querySelector('h3').innerHTML = '';
        return;
    }

    const regexMaiusculo = /[A-Z]/;
    const regexAcento = /[À-ÖØ-öø-ÿ]/;
    if(regexMaiusculo.test(mensagemRecebida) || regexAcento.test(mensagemRecebida)){
        abrir('acento');
        return;
    }

    mostrarBotao();

    let arrayFrases = mensagemRecebida.split(' ');
    let arrayPalavrasEncriptadas = [];
    for (const palavra of arrayFrases) {
        arrayPalavrasEncriptadas.push(encriptarPalavra(palavra));
    }

    let fraseEncriptada = '';
    for(const palavra of arrayPalavrasEncriptadas){fraseEncriptada = fraseEncriptada + palavra + ' ';}
    fraseEncriptada = fraseEncriptada.slice(0, -1);
    console.log(fraseEncriptada);
    document.querySelector('h3').innerHTML = fraseEncriptada;
}

// DESENCRIPTAÇÃO DA FRASE

function desencriptarPalavra(palavra){
    let palavraDesencriptada = palavra;
    let condicao = true;
    while(condicao){
        if(palavraDesencriptada.includes('ai')){palavraDesencriptada = palavraDesencriptada.replace('ai', 'a');}
        else if(palavraDesencriptada.includes('enter')){palavraDesencriptada = palavraDesencriptada.replace('enter', 'e');}
        else if(palavraDesencriptada.includes('imes')){palavraDesencriptada = palavraDesencriptada.replace('imes', 'i');}
        else if(palavraDesencriptada.includes('ober')){palavraDesencriptada = palavraDesencriptada.replace('ober', 'o');}
        else if(palavraDesencriptada.includes('ufat')){palavraDesencriptada = palavraDesencriptada.replace('ufat', 'u');}
        else {
            condicao = false;
        }
    }
    return palavraDesencriptada;
}

function desencriptarFrase(){
    let mensagemRecebida = document.getElementById('descriptografarInput').value;
    if(mensagemRecebida == ''){
        document.querySelector('button.button-38').style.visibility = 'hidden';
        document.querySelector('h3').innerHTML = '';
        return;
    }

    const regexMaiusculo = /[A-Z]/;
    const regexAcento = /[À-ÖØ-öø-ÿ]/;
    if(regexMaiusculo.test(mensagemRecebida) || regexAcento.test(mensagemRecebida)){
        abrir('acento');
        return;
    }

    //if(!(mensagemRecebida.includes('ai')) && !(mensagemRecebida.includes('enter')) && !(mensagemRecebida.includes('imes')) && !(mensagemRecebida.includes('ober')) && !(mensagemRecebida.includes('ufat'))){
    //    alert('A mensagem não está criptografada!');
    //    return;
    //}

    mostrarBotao();

    let arrayFrases = mensagemRecebida.split(' ');
    let arrayPalavrasEncriptadas = [];
    for (const palavra of arrayFrases) {
        arrayPalavrasEncriptadas.push(desencriptarPalavra(palavra));
    }

    let fraseDesencriptada = '';
    for(const palavra of arrayPalavrasEncriptadas){fraseDesencriptada = fraseDesencriptada + palavra + ' ';}
    fraseDesencriptada = fraseDesencriptada.slice(0, -1);
    console.log(fraseDesencriptada);
    document.querySelector('h3').innerHTML = fraseDesencriptada;
}

// COPIAR TEXTO
function copiarTexto() {
    navigator.clipboard.writeText(document.querySelector('h3').innerHTML)
    abrir('copiar');
    sleep(1000).then(() => { fechar(); });
}

//MOSTRAR/ESCONDER BOTÃO
function mostrarBotao() {
    let botaomostrar = document.querySelector('button.button-38');
    let titulo = document.querySelector('h2');
    botaomostrar.style.visibility = 'visible';
}

//CONFIGURANDO POP-UP
function fechar(){
    document.getElementById('popup-decrypt').style.display = 'none';
    document.getElementById('popup-encrypt').style.display = 'none';
    document.getElementById('popup-acento').style.display = 'none';
    document.getElementById('popup-copiar').style.display = 'none';
  }

function abrir(funcao){
    if(funcao == 'decrypt'){
        document.getElementById('popup-decrypt').style.display = 'block';
    }
    if(funcao == 'encrypt'){
        document.getElementById('popup-encrypt').style.display = 'block';
    }
    if(funcao == 'acento'){
        document.getElementById('popup-acento').style.display = 'block';
    }
    if(funcao == 'copiar'){
        document.getElementById('popup-copiar').style.display = 'block';
    }
    
  }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function botaoCriptografar() {
    document.getElementById('criptografarInput').value = '';
    document.querySelector('h3').innerHTML = '';
    mensagemlabel.innerHTML = 'Mensagem criptografada:';
    document.getElementById('criptografarInput').style.display = 'block';
    document.getElementById('descriptografarInput').style.display = 'none';
}

function botaoDescriptografar() {
    document.getElementById('descriptografarInput').value = '';
    document.querySelector('h3').innerHTML = '';
    mensagemlabel.innerHTML = 'Mensagem descriptografada:';
    document.getElementById('criptografarInput').style.display = 'none';
    document.getElementById('descriptografarInput').style.display = 'block';
    

}

