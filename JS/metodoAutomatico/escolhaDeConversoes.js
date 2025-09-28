import { activeButtonsDecimal, activeButtonsBinario, activeButtonsOctal, activeButtonsHexadecimal } from "../../script.js"

export function chooseBase(hexa, placeholder, result1, result2, result3, label) {
    let column2 = document.getElementById('column_2')
    let column3 = document.getElementById('column_3')
    let textHtml = `
    <div id="mainResult">
    <div id="divInput">
    <input type="${hexa}" name="" id="input_input" placeholder="Digite um Número ${placeholder}">
    <button disabled id="buttonSpace"></button>
    <button id="buttonResult">=</button>
    </div>
    
    <div class="divResults">
    <span>
    <button id="buttonResult_1" class="buttonsResult ${label}" title="Clique para saber como funciona a conversão">!</button>
    <span class="tituloResult">${result1}:</span>
    <span id="spanResult_1" class="spansResults"></span>
    </span>
    </div>
    <div class="divResults">
    <span>
    <button id="buttonResult_2" class="buttonsResult ${label}" title="Clique para saber como funciona a conversão">!</button>
    <span class="tituloResult">${result2}:</span>
    <span id="spanResult_2" class="spansResults"></span>
    </span>
    </div>
    <div class="divResults">
    <span>
    <button id="buttonResult_3" class="buttonsResult ${label}" title="Clique para saber como funciona a conversão">!</button>
    <span class="tituloResult">${result3}:</span>
    <span id="spanResult_3" class="spansResults"></span>
    </span>
    </div>
    </div>
    `
    if (column2.innerHTML.length == 0) {
        column2.innerHTML = textHtml
    } else {
        column2.innerHTML = ''
        column3.innerHTML = ''
    }
}

export function chooseDecimal() {
    chooseBase('number', 'Decimal', 'Binário', 'Octal', 'Hexadecimal', 'labelDecimal')
    activeButtonsDecimal()
}

export function chooseBinario() {
    chooseBase('number', 'Binário', 'Octal', 'Decimal', 'Hexadecimal', 'labelBinario')
    activeButtonsBinario()
}

export function chooseOctal() {
    chooseBase('number', 'Octal', 'Binário', 'Decimal', 'Hexadecimal', 'labelOctal')
    activeButtonsOctal()
}

export function chooseHexadecimal() {
    chooseBase('text', 'Hexadecimal', 'Binário', 'Octal', 'Decimal', 'labelHexadecimal')
    activeButtonsHexadecimal()
}