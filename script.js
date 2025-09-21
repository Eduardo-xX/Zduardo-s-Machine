import { chooseDecimal, chooseBinario, chooseOctal, chooseHexadecimal} from "./JS/metodoAutomatico/escolhaDeConversoes.js";

export function activeButtonsDecimal() {
    document.getElementById('buttonResult').addEventListener('click', converterDecimal)
}
export function activeButtonsBinario() {
    document.getElementById('buttonResult').addEventListener('click', converterBinario)
}
export function activeButtonsOctal() {
    document.getElementById('buttonResult').addEventListener('click', converterOctal)
}
export function activeButtonsHexadecimal() {
    document.getElementById('buttonResult').addEventListener('click', converterHexadecimal)
}

document.getElementById('buttonDecimal').addEventListener('click', chooseDecimal)
document.getElementById('buttonBinario').addEventListener('click', chooseBinario)
document.getElementById('buttonOctal').addEventListener('click', chooseOctal)
document.getElementById('buttonHexadecimal').addEventListener('click', chooseHexadecimal)

export function converterDecimal() {
            let decimal = Number(document.getElementById('input_input').value);
            let result_1 = document.getElementById('spanResult_1')
            let result_2 = document.getElementById('spanResult_2')
            let result_3 = document.getElementById('spanResult_3')

            result_1.innerHTML = decimal.toString(2);
            result_2.innerHTML = decimal.toString(8);
            result_3.innerHTML = decimal.toString(16);
}

function converterBinario() {
            let binario = Number(document.getElementById('input_input').value);
            let result_1 = document.getElementById('spanResult_1')
            let result_2 = document.getElementById('spanResult_2')
            let result_3 = document.getElementById('spanResult_3')

            let decimal = parseInt(binario, 2)

            result_1.innerHTML = decimal.toString(8);
            result_2.innerHTML = decimal
            result_3.innerHTML = decimal.toString(16);
}

function converterOctal() {
            let octal = Number(document.getElementById('input_input').value);
            let result_1 = document.getElementById('spanResult_1')
            let result_2 = document.getElementById('spanResult_2')
            let result_3 = document.getElementById('spanResult_3')

            let decimal = parseInt(octal, 8)

            result_1.innerHTML = decimal.toString(2);
            result_2.innerHTML = decimal
            result_3.innerHTML = decimal.toString(16);
}

function converterHexadecimal() {
            let hexadecimal = document.getElementById('input_input').value;
            let result_1 = document.getElementById('spanResult_1')
            let result_2 = document.getElementById('spanResult_2')
            let result_3 = document.getElementById('spanResult_3')

            let decimal = parseInt(hexadecimal, 16)

            result_1.innerHTML = decimal.toString(2);
            result_2.innerHTML = decimal.toString(8);
            result_3.innerHTML = decimal;
}