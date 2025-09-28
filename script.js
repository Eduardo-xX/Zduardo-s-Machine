import { chooseDecimal, chooseBinario, chooseOctal, chooseHexadecimal} from "./JS/metodoAutomatico/escolhaDeConversoes.js";
import { converterDecimal, converterBinario, converterOctal, converterHexadecimal } from "./JS/metodoAutomatico/conversoes.js";
import { addInfoConversaoBinarioDecimal, addInfoConversaoBinarioHexadecimal, addInfoConversaoBinarioOctal, addInfoConversaoDecimalBinario, addInfoConversaoDecimalHexadecimal, addInfoConversaoDecimalOctal, addInfoConversaoHexadecimalBinario, addInfoConversaoHexadecimalDecimal, addInfoConversaoHexadecimalOctal, addInfoConversaoOctalBinario, addInfoConversaoOctalDecimal, addInfoConversaoOctalHexadecimal } from "./JS/metodoAutomatico/infoConversao.js";

export function activeButtonsDecimal() {
    document.getElementById('buttonResult').addEventListener('click', converterDecimal)
    document.getElementById('buttonResult_1').addEventListener('click', addInfoConversaoDecimalBinario)
    document.getElementById('buttonResult_2').addEventListener('click', addInfoConversaoDecimalOctal)
    document.getElementById('buttonResult_3').addEventListener('click', addInfoConversaoDecimalHexadecimal)
    
}
export function activeButtonsBinario() {
    document.getElementById('buttonResult').addEventListener('click', converterBinario)
    document.getElementById('buttonResult_1').addEventListener('click', addInfoConversaoBinarioOctal)
    document.getElementById('buttonResult_2').addEventListener('click', addInfoConversaoBinarioDecimal)
    document.getElementById('buttonResult_3').addEventListener('click', addInfoConversaoBinarioHexadecimal)
}
export function activeButtonsOctal() {
    document.getElementById('buttonResult').addEventListener('click', converterOctal)
    document.getElementById('buttonResult_1').addEventListener('click', addInfoConversaoOctalBinario)
    document.getElementById('buttonResult_2').addEventListener('click', addInfoConversaoOctalDecimal)
    document.getElementById('buttonResult_3').addEventListener('click', addInfoConversaoOctalHexadecimal)
}
export function activeButtonsHexadecimal() {
    document.getElementById('buttonResult').addEventListener('click', converterHexadecimal)
    document.getElementById('buttonResult_1').addEventListener('click', addInfoConversaoHexadecimalBinario)
    document.getElementById('buttonResult_2').addEventListener('click', addInfoConversaoHexadecimalOctal)
    document.getElementById('buttonResult_3').addEventListener('click', addInfoConversaoHexadecimalDecimal)
}

document.getElementById('buttonDecimal').addEventListener('click', chooseDecimal)
document.getElementById('buttonBinario').addEventListener('click', chooseBinario)
document.getElementById('buttonOctal').addEventListener('click', chooseOctal)
document.getElementById('buttonHexadecimal').addEventListener('click', chooseHexadecimal)





