export function converterDecimal() {
            let decimal = Number(document.getElementById('input_input').value);
            let result_1 = document.getElementById('spanResult_1')
            let result_2 = document.getElementById('spanResult_2')
            let result_3 = document.getElementById('spanResult_3')

            result_1.innerHTML = decimal.toString(2);
            result_2.innerHTML = decimal.toString(8);
            result_3.innerHTML = decimal.toString(16);
}

export function converterBinario() {
            let binario = Number(document.getElementById('input_input').value);
            let result_1 = document.getElementById('spanResult_1')
            let result_2 = document.getElementById('spanResult_2')
            let result_3 = document.getElementById('spanResult_3')

            let decimal = parseInt(binario, 2)

            result_1.innerHTML = decimal.toString(8);
            result_2.innerHTML = decimal
            result_3.innerHTML = decimal.toString(16);
}

export function converterOctal() {
            let octal = Number(document.getElementById('input_input').value);
            let result_1 = document.getElementById('spanResult_1')
            let result_2 = document.getElementById('spanResult_2')
            let result_3 = document.getElementById('spanResult_3')

            let decimal = parseInt(octal, 8)

            result_1.innerHTML = decimal.toString(2);
            result_2.innerHTML = decimal
            result_3.innerHTML = decimal.toString(16);
}

export function converterHexadecimal() {
            let hexadecimal = document.getElementById('input_input').value;
            let result_1 = document.getElementById('spanResult_1')
            let result_2 = document.getElementById('spanResult_2')
            let result_3 = document.getElementById('spanResult_3')

            let decimal = parseInt(hexadecimal, 16)

            result_1.innerHTML = decimal.toString(2);
            result_2.innerHTML = decimal.toString(8);
            result_3.innerHTML = decimal;
}