<div align="center">
  <a href="https://www.oracle.com/br/education/oracle-next-education/">
    <img src="https://img.shields.io/badge/challenge-oracle%20next%20education-blue" alt="Challenge Oracle Next Education">
  </a>
</div>
<div align="center">
    <img src="https://img.shields.io/badge/finished-june-green" alt="Finished in June">
</div>

---

# Decodificador de Texto

Este é um projeto desenvolvido como parte do challenge do Oracle Next Education, uma parceria entre a Alura e a Oracle para formação de backend em Java com foco em inteligência artificial. O desafio inicial utiliza lógica de programação em JavaScript e desenvolvimento web.

## 🔍 Sobre o Projeto

O **Decodificador de Texto** permite a criptografia e descriptografia de mensagens de texto utilizando uma lógica específica de substituição de caracteres. O usuário pode criptografar uma mensagem e posteriormente descriptografá-la, respeitando certas regras impostas pelo desafio.

### Tecnologias Utilizadas

- **HTML** para estrutura da página
- **CSS** para o estilo
- **JavaScript** para lógica de criptografia e manipulação de elementos
- **Fontes e ícones** customizados

## 📋 Funcionalidades

1. **Criptografar Mensagem**: converte uma mensagem de texto com uma lógica própria de substituição.
2. **Descriptografar Mensagem**: reverte a mensagem criptografada para o texto original.
3. **Copiar Texto**: o usuário pode copiar a mensagem criptografada ou descriptografada com um único clique.
4. **Verificação de Entrada**: as mensagens não devem conter letras maiúsculas ou acentos.

## 🔒 Regras de Criptografia

A criptografia é baseada em substituições simples:
- **"a"** é substituído por **"ai"**
- **"e"** é substituído por **"enter"**
- **"i"** é substituído por **"imes"**
- **"o"** é substituído por **"ober"**
- **"u"** é substituído por **"ufat"**

Exemplo:
- Texto original: `ola mundo`
- Texto criptografado: `oberlai mundofat`

## 🚀 Como Usar

1. **Digite a mensagem** a ser criptografada ou descriptografada no campo de texto.
2. **Clique em "Criptografar"** para ver a mensagem criptografada ou em "Descriptografar" para reverter uma mensagem já criptografada.
3. Use o botão **"Copiar Texto"** para copiar o resultado.

> ⚠️ *Insira apenas letras minúsculas e sem acentos.*

## 📁 Estrutura do Projeto

```plaintext
.
├── index.html       # Estrutura HTML do projeto
├── style.css        # Estilos visuais do projeto
└── script.js        # Lógica de criptografia/descriptografia em JavaScript
```
