import { activeButtonsDecimal, activeButtonsBinario, activeButtonsOctal, activeButtonsHexadecimal } from "../../script.js"

export function chooseBase(hexa, placeholder, result1, result2, result3) {
    console.log('testando')
    let column2 = document.getElementById('column_2')
    let textHtml = `
        <div id="mainResult">
            <div id="divInput">
                <input type="${hexa}" name="" id="input_input" placeholder="Digite um Número ${placeholder}">
                <button disabled id="buttonSpace"></button>
                <button id="buttonResult">=</button>
            </div>

            <div class="divResults">
                <span>
                    <button>!</button>
                    <span class="tituloResult">${result1}:</span>
                    <span id="spanResult_1" class="spansResults"></span>
                </span>
            </div>
            <div class="divResults">
                <span>
                    <button>!</button>
                    <span class="tituloResult">${result2}:</span>
                    <span id="spanResult_2" class="spansResults"></span>
                </span>
            </div>
            <div class="divResults">
                <span>
                    <button>!</button>
                    <span class="tituloResult">${result3}:</span>
                    <span id="spanResult_3" class="spansResults"></span>
                </span>
            </div>
        </div>
    `
    column2.innerHTML = textHtml
}

export function chooseDecimal() {
    chooseBase('number', 'Decimal', 'Binário', 'Octal', 'Hexadecimal')
    activeButtonsDecimal()
}

export function chooseBinario() {
    chooseBase('number', 'Binário', 'Octal', 'Decimal', 'Hexadecimal')
    activeButtonsBinario()
}

export function chooseOctal() {
    chooseBase('number', 'Octal', 'Binário', 'Decimal', 'Hexadecimal')
    activeButtonsOctal()
}

export function chooseHexadecimal() {
    chooseBase('text', 'Hexadecimal', 'Binário', 'Octal', 'Decimal')
    activeButtonsHexadecimal()
}