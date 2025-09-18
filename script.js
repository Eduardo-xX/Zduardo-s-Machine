function converterDecimal() {
            var decimal = Number(document.getElementById('input_Decimal').value);

            demo4.innerHTML = decimal.toString(2);
            demo2.innerHTML = decimal.toString(8);
            demo3.innerHTML = decimal.toString(16);
}

function converterBinario() {
            var binario = Number(demo1.value);

            demo2.innerHTML = binario.toString(10);
            demo3.innerHTML = binario.toString(8);
            demo4.innerHTML = binario.toString(16);
}

function converterOctal() {
            var decimal = Number(demo1.value);

            demo4.innerHTML = decimal.toString(2);
            demo2.innerHTML = decimal.toString(8);
            demo3.innerHTML = decimal.toString(16);
}

function converterHexadecimal() {
            var decimal = Number(demo1.value);

            demo4.innerHTML = decimal.toString(2);
            demo2.innerHTML = decimal.toString(8);
            demo3.innerHTML = decimal.toString(16);
}