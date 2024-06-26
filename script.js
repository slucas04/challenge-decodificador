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
    const regexMaiusculo = /[A-Z]/;
    const regexAcento = /[À-ÖØ-öø-ÿ]/;
    let mensagemRecebida = document.querySelector('input').value;
    if(regexMaiusculo.test(mensagemRecebida) || regexAcento.test(mensagemRecebida)){
        alert('A frase não pode conter acento ou letras maiúsculas.');
        return;
    }
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
    let mensagemRecebida = document.querySelector('input').value;
    if(!(mensagemRecebida.includes('ai')) && !(mensagemRecebida.includes('enter')) && !(mensagemRecebida.includes('imes')) && !(mensagemRecebida.includes('ober')) && !(mensagemRecebida.includes('ufat'))){
        alert('A mensagem não está criptografada!');
        return;
    }
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
    if((document.querySelector('h3').innerHTML) == ' '){
        alert('Não há texto para ser copiado!');
        return;
    }
    navigator.clipboard.writeText(document.querySelector('h3').innerHTML)
    alert('Texto copiado com sucesso!');
}

