# 🎯 Jogo do Número Secreto

Este é um projeto simples criado como parte do meu aprendizado em **JavaScript**. O objetivo do jogo é adivinhar um número secreto entre 1 e 10. A cada tentativa, o jogo informa se o número digitado é maior ou menor que o número secreto até que o jogador acerte.

---

## 🚀 O que aprendi com este projeto

Durante o desenvolvimento deste jogo, aprendi diversos conceitos fundamentais de JavaScript e manipulação do DOM. Aqui estão os principais aprendizados:

### ✅ Manipulação do DOM
- Utilizei `document.querySelector()` para acessar e modificar elementos HTML dinamicamente.
- Alterei o conteúdo de tags como `<h1>` e `<p>` com `.innerHTML`.
- Controlei atributos HTML, como o `disabled` do botão de reinício.

### 🔁 Estruturas de controle
- Usei estruturas condicionais `if/else` para comparar o número chutado com o número secreto.
- Utilizei o operador ternário `?` para personalizar mensagens com base na quantidade de tentativas.

### 🔢 Lógica de sorteio e controle de repetições
- Criei um sistema de sorteio de número aleatório entre 1 e 10 com `Math.random()`.
- Implementei uma lógica para evitar repetição de números sorteados, armazenando-os em uma lista (`array`).
- Usei `includes()` para verificar se o número já foi sorteado.

### 🔁 Funções
- Criei funções reutilizáveis como `exbirTextoNaTela`, `verificarChute`, `gerarNumeroAleatorio`, `limparCampo` e `reiniciarJogo`.
- Aprendi sobre escopo de variáveis e a importância de deixar o código modular.

### 🗣️ Integração com voz (extra)
- Integrei o `responsiveVoice.speak()` para que o jogo fale as mensagens em voz alta, usando a voz em português do Brasil.

---

## 📷 Exemplo de uso

[Jogo rodando no navegador](https://jogo-do-numero-secreto2-0-ofhrbwhwj-andrenaves448s-projects.vercel.app/)

---

## 🛠️ Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/andrenaves448/jogoDoNumeroSecreto2.0.git
