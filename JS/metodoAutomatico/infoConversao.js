import { buttonInformationBinarioDecimal, buttonInformationBinarioHexadecimal, buttonInformationBinarioOctal, buttonInformationDecimalBinario, buttonInformationDecimalHexadecimal, buttonInformationDecimalOctal, buttonInformationHexadecimalBinario, buttonInformationHexadecimalDecimal, buttonInformationHexadecimalOctal, buttonInformationOctalBinario, buttonInformationOctalDecimal, buttonInformationOctalHexadecimal} from "./moreInfoConversao.js"

export function addInfoConversaoBase(sistemaAntes, sistemaDepois, textSistemaAntes, textSistemaDepois, buttonInfo) {
    let column_3 = document.getElementById('column_3')

    let conteudo = `
        <div id="placeInformation">
            <div id="placeInformationText">
                <h3>Sobre Sistema ${sistemaAntes} e ${sistemaDepois}.</h3>
                    <span>
                        Um sistema de numeração é um jeito de representar quantidades usando símbolos (algarismos) e regras.
                    </span>
                    
                    <br>
                    <hr>

                    <h4>Sistema ${sistemaAntes}:</h4>
                    <span>
                        ${textSistemaAntes}
                    </span>

                    <br>
                    <hr>

                    <h4>Sistema ${sistemaDepois}:</h4>
                    <span>
                        ${textSistemaDepois}
                    </span>

                    <br>
                    <hr>

                <button id="${buttonInfo}">Explicação da Conversão</button>
            </div>
        </div>
    `

    column_3.innerHTML = conteudo

    if (buttonInfo == 'buttonInformationDecimalBinario') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationDecimalBinario)
    } else if (buttonInfo == 'buttonInformationDecimalOctal') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationDecimalOctal)
    } else if (buttonInfo == 'buttonInformationDecimalHexadecimal') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationDecimalHexadecimal)
    } else if (buttonInfo == 'buttonInformationBinarioOctal') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationBinarioOctal)
    } else if (buttonInfo == 'buttonInformationBinarioDecimal') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationBinarioDecimal)
    } else if (buttonInfo == 'buttonInformationBinarioHexadecimal') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationBinarioHexadecimal)
    } else if (buttonInfo == 'buttonInformationOctalBinario') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationOctalBinario)
    } else if (buttonInfo == 'buttonInformationOctalDecimal') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationOctalDecimal)
    } else if (buttonInfo == 'buttonInformationOctalHexadecimal') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationOctalHexadecimal)
    } else if (buttonInfo == 'buttonInformationHexadecimalBinario') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationHexadecimalBinario)
    } else if (buttonInfo == 'buttonInformationHexadecimalOctal') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationHexadecimalOctal)
    } else if (buttonInfo == 'buttonInformationHexadecimalDecimal') {
        document.getElementById(`${buttonInfo}`).addEventListener('click', buttonInformationHexadecimalDecimal)
    }

}

function textBinario() {
    return `
            É um sistema de numeração que usa apenas dois símbolos (0 e 1):
            <br><br>
            Assim como o decimal é baseado em potências de 10, o binário é baseado em potências de 2.
            <br><br>
            2^0 = 1 → "unidade" <br>
            2^1 = 2 → "duas unidades" <br>
            2^2 = 4 → "quatro unidades" <br>
            2^3 = 8 → "oito unidades" <br>
            2^4 = 16 <br>
            e assim por diante... <br>
            <br>
            Exemplo
            <br><br>
            Número 1101 (binário)
            <br><br>
            O 1 mais à direita → 1 x 2^0 = 1 <br>
            O 0 → 0 x 2^1 = 0 <br>
            O 1 → 1 x 2^2 = 4 <br>
            O 1 mais à esquerda → 1 x 2^3 = 8 <br>
            <br>
            Somando:
            <br><br>
            8 + 4 + 0 + 1 = 13 (em decimal)
            <br><br>
            Resumindo
            <br><br>
            - O binário usa apenas 0 e 1 <br>
            - É posicional, baseado em potências de 2 <br>
            - Cada dígito (bit) representa um múltiplo de 2^n <br>
            - Para converter: multiplica cada dígito pela potência de 2 correspondente e soma os resultados
        `
}

function textDecimal() {
    return `
            O decimal é posicional, ou seja, o valor de um dígito depende da posição em que ele aparece.
            <br><br>
            Cada posição representa uma potência de 10.
            <br><br>
            Exemplo: o número 4 573
            <br><br>
            O 4 está na casa dos milhares → 4×10^3 = 4000 <br>
            O 5 está na casa das centenas → 5×10^2 = 500 <br>
            O 7 está na casa das dezenas → 7×10^1 = 70 <br>
            O 3 está na casa das unidades → 3×10^0 = 3 <br> <br>
            Somando tudo:
            <br><br>
            4000 + 500 + 70 + 3 = 4573
            <br><br>
            Resumindo
            <br><br>
            - O sistema decimal usa 10 algarismos (0–9) <br>
            - É posicional, baseado em potências de 10 <br>
            - Cada casa tem um peso: unidades, dezenas, centenas, milhares, etc
        `
}

function textOctal() {
    return `
            É um sistema de numeração que usa oito símbolos possíveis:
            <br>
            0, 1, 2, 3, 4, 5, 6, 7
            <br><br>
            Assim como o decimal é baseado em potências de 10, o octal é baseado em potências de 8.
            <br><br>
            Cada posição (da direita para a esquerda) vale:
            <br><br>
            8^0 = 1 → "unidades" <br>
            8^1 = 8 → "oito unidades" <br>
            8^2 = 64 <br>
            8^3 = 512 <br>
            e assim por diante... <br>
            <br>
            Exemplo
            <br><br>
            Número 157 (octal)
            <br><br>
            O 7 (direita) → 7 x 8^0 = 7 <br>
            O 5 (meio) → 5 x 8^1 = 40 <br>
            O 1 (esquerda) → 1 x 8^2 = 64 <br>
            <br>
            Somando:
            <br><br>
            64 + 40 + 7 = 111 (em decimal)
            <br><br>
            Resumindo
            <br><br>
            - O octal usa algarismos de 0 a 7 <br>
            - É posicional, baseado em potências de 8 <br>
            - Cada dígito representa um múltiplo de 8^n <br>
            - Para converter: multiplica cada dígito pela potência de 8 correspondente e soma os resultados
        `
}

function textHexadecimal() {
    return `
            É um sistema de numeração que usa dezesseis símbolos possíveis:
            <br>
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
            <br><br>
            Onde as letras representam valores:
            <br><br>
            A = 10 <br>
            B = 11 <br>
            C = 12 <br>
            D = 13 <br>
            E = 14 <br>
            F = 15 <br>
            <br>
            Assim como os outros sistemas, o hexadecimal é posicional, mas baseado em potências de 16.
            <br><br>
            Cada posição (da direita para a esquerda) vale:
            <br><br>
            16^0 = 1 → "unidades" <br>
            16^1 = 16 → "dezesseis unidades" <br>
            16^2 = 256 <br>
            16^3 = 4096 <br>
            e assim por diante... <br>
            <br>
            Exemplo
            <br><br>
            Número 1A3 (hexadecimal)
            <br><br>
            O 3 → 3 x 16^0 = 3 <br>
            O A → vale 10 → 10 x 16^1 = 160 <br>
            O 1 → 1 x 16^2 = 256 <br>
            <br>
            Somando:
            <br><br>
            256 + 160 + 3 = 419 (em decimal)
            <br><br>
            Resumindo
            <br><br>
            - O hexadecimal usa algarismos de 0-9 e A-F <br>
            - É posicional, baseado em potências de 16 <br>
            - Cada dígito representa um múltiplo de 16^n <br>
            - Para converter: multiplica cada dígito (lembrando das letras) pela potência de 16 correspondente e soma os resultados
        `
}

export function addInfoConversaoDecimalBinario() {
    addInfoConversaoBase(
        'Decimal',
        'Binário',
        textDecimal(),
        textBinario(),
        'buttonInformationDecimalBinario'
    )
}

export function addInfoConversaoDecimalOctal() {
    addInfoConversaoBase(
        'Decimal',
        'Octal',
        textDecimal(),
        textOctal(),
        'buttonInformationDecimalOctal'
    )
}

export function addInfoConversaoDecimalHexadecimal() {
    addInfoConversaoBase(
        'Decimal',
        'Hexadecimal',
        textDecimal(),
        textHexadecimal(),
        'buttonInformationDecimalHexadecimal'
    )
}

export function addInfoConversaoBinarioOctal() {
    addInfoConversaoBase(
        'Binário',
        'Octal',
        textBinario(),
        textOctal(),
        'buttonInformationBinarioOctal'
    )
}

export function addInfoConversaoBinarioDecimal() {
    addInfoConversaoBase(
        'Binário',
        'Decimal',
        textBinario(),
        textDecimal(),
        'buttonInformationBinarioDecimal'
    )
}

export function addInfoConversaoBinarioHexadecimal() {
    addInfoConversaoBase(
        'Binário',
        'Hexadecimal',
        textBinario(),
        textHexadecimal(),
        'buttonInformationBinarioHexadecimal'
    )
}

export function addInfoConversaoOctalBinario() {
    addInfoConversaoBase(
        'Octal',
        'Binário',
        textOctal(),
        textBinario(),
        'buttonInformationOctalBinario'
    )
}

export function addInfoConversaoOctalDecimal() {
    addInfoConversaoBase(
        'Octal',
        'Decimal',
        textOctal(),
        textDecimal,
        'buttonInformationOctalDecimal'
    )
}

export function addInfoConversaoOctalHexadecimal() {
    addInfoConversaoBase(
        'Octal',
        'Hexadecimal',
        textOctal(),
        textHexadecimal(),
        'buttonInformationOctalHexadecimal'
    )
}

export function addInfoConversaoHexadecimalBinario() {
    addInfoConversaoBase(
        'Hexadecimal',
        'Binário',
        textHexadecimal(),
        textBinario(),
        'buttonInformationHexadecimalBinario'
    )
}

export function addInfoConversaoHexadecimalOctal() {
    addInfoConversaoBase(
        'Hexadecimal',
        'Octal',
        textHexadecimal(),
        textOctal(),
        'buttonInformationHexadecimalOctal'
    )
}

export function addInfoConversaoHexadecimalDecimal() {
    addInfoConversaoBase(
        'Hexadecimal',
        'Decimal',
        textHexadecimal(),
        textDecimal(),
        'buttonInformationHexadecimalDecimal'
    )
}