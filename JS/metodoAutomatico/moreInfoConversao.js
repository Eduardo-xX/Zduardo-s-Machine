export function functionButtonInformationBase(sistemaAntes, sistemaDepois, textConversao) {
    let horizontal = document.getElementById('horizontal')

    let conteudo = `
        <div class="overlay" id="overlay">
            <div class="modal">
                <span class="close" id="fechar">&times;</span>
                <h3>Conversão de ${sistemaAntes} para ${sistemaDepois}.</h3>
                <span>
                    ${textConversao}
                </span>
            </div>
        </div>
    `

    horizontal.innerHTML += conteudo

    const fechar = document.getElementById('fechar')
    const overlay = document.getElementById('overlay')

    overlay.addEventListener('click', (e) => {
        if (e.target == overlay) {
            horizontal.innerHTML = ''
        }
    })
    fechar.addEventListener('click', (e) => {
        if (e.target == fechar) {
            horizontal.innerHTML = ''
        }
    })
}

export function textMoreDecimalBinarioSave() {
    return `
        1 - Converta de Decimal para Binário.
        <br>
        Caso não saiba e queira aprender como fazer isso, 
        <span id="saberDecimalBinario">Clique Aqui!</span>
        <br>
        <div id="spaceDecimalBinario"></div>
        <br>
    `
}

export function textMoreDecimalBinario() {
    return `
        O sistema binário é baseado em potências de 2:
        <br><br>
        A ideia é decompor o número decimal em uma soma de potências de 2. Em seguida, colocamos 1 nas posições em que a potência foi usada e 0 onde não foi.
        <br><br>
        Passo a passo:
        <br><br>
        1 - Liste as potências de 2 até chegar num valor maior ou igual ao número que você quer converter.
        <br>
        2 - Veja quais dessas potências podem ser somadas para formar o número.
        <br>
        3 - Para cada potência: <br>
        * Se ela foi usada → escreva 1 <br>
        * Se não foi usada → escreva 0 <br>
        4 - O resultado é o número em binário <br>
        <br>
        <img width="100%" src="./assets/exemploDecimalParaBinario-Excel.png" alt="">
        <br><br>
        Exemplo: converter 25 (decimal) para binário
        <br><br>
        Passo 1: Potências de 2 até 25:
        <br><br>
        * 2^0 = 1 <br>
        * 2^1 = 2 <br>
        * 2^2 = 4 <br>
        * 2^3 = 8 <br>
        * 2^4 = 16 <br>
        * 2^5 = 32 → já passou de 25, então paramos no 2^4 <br>
        <br>
        Passo 2: Agora decompomos 25:
        <br><br>
        * 25 = 16 + 8 + 1 <br>
        * ou seja, 25 = 2^4 + 2^3 + 2^0 <br>
        <br>
        Passo 3: Montando o binário (do maior para o menor):
        <br><br>
        * 2^4 = 16 → 1 <br>
        * 2^3 = 8 → 1 <br>
        * 2^2 = 4 → 0 <br>
        * 2^1 = 2 → 0 <br>
        * 2^0 = 1 → 1 <br>
        <br>
        Resultado: 11001
        <br><br>
        Portanto 25 (decimal) = 11001 (binário)
        <br><br>
        Resuminando:
        <br><br>
        * O binário é formado por 1s e 0s que representam potências de 2 <br>
        * Basta encontrar quais potências de 2 somam o número desejado
    `
}

export function textMoreBinarioOctal() {
    return `
        <h5>Conversão de Binário para Octal</h5>
        2 - Agrupar bits em grupos de 3
        <br><br>
        Cada dígito octal corresponde a 3 bits binários.
        <br><br>
        Exemplo
        <br><br>
        * 000 = 0 <br>
        * 001 = 1 <br>
        * 010 = 2 <br>
        * 011 = 3 <br>
        * 100 = 4 <br>
        * 101 = 5 <br>
        * 110 = 6 <br>
        * 111 = 7 <br>
        <br>
        3 - Converter cada grupo para octal
        <br><br>
        Depois de formar grupos de 3 bits (da direita para a esquerda), basta substituir cada grupo pelo seu equivalente em octal.
        <br><br>
        Exemplo: converter 111 (decimal) para octal
        <br><br>
        Passo 1 – Decimal → Binário
        <br><br>
        * 111 (decimal) → binário = 1101111
        <br><br>
        Passo 2 – Agrupar em grupos de 3 bits (da direita para a esquerda) <br><br> 
        1101111 → 001 101 111 (coloque zeros à esquerda para fechar os grupos)
        <br><br>
        Passo 3 – Substituir cada grupo pelo octal equivalente
        <br><br>
        * 001 = 1 <br>
        * 101 = 5 <br>
        * 111 = 7 <br>
        <br>
        Resultado = 157 (octal)
        <br><br>
        Resuminando:
        <br><br>
        1° Decimal → Binário. <br>
        2° Agrupa o binário em blocos de 3 bits. <br>
        3° Substitui cada bloco pelo valor octal correspondente.
    `
}

export function textMoreBinarioHexadecimal() {
    return `
        <h5>Conversão de Binário para Hexadecimal</h5>
        2 - Agrupar bits em grupos de 4
        <br><br>
        Cada dígito hexadecimal corresponde a 4 bits binários.
        <br><br>
        Exemplo
        <br><br>
        * 0000 = 0 <br>
        * 0001 = 1 <br>
        * 0010 = 2 <br>
        * 0011 = 3 <br>
        * 0100 = 4 <br>
        * 0101 = 5 <br>
        * 0110 = 6 <br>
        * 0111 = 7 <br>
        * 1000 = 8 <br>
        * 1001 = 9 <br>
        * 1010 = A (10) <br>
        * 1011 = B (11) <br>
        * 1100 = C (12) <br>
        * 1101 = D (13) <br>
        * 1110 = E (14) <br>
        * 1111 = F (15) <br>
        <br>
        3 - Converter cada grupo para hexadecimal
        <br><br>
        Depois de formar grupos de 4 bits (da direita para a esquerda), basta substituir cada grupo pelo seu equivalente em hexadecimal.
        <br><br>
        Exemplo: converter 419 (decimal) para hexadecimal
        <br><br>
        Passo 1 – Decimal → Binário
        <br><br>
        419 em decimal = 110100011 (binário).
        <br><br>
        Passo 2 – Agrupar em grupos de 4 bits (da direita para a esquerda)<br><br> 
        110100011 → 0001 1010 0011 (adicionei zeros à esquerda para completar).
        <br><br>
        Passo 3 – Converter cada grupo em hexadecimal
        <br><br>
        * 0001 = 1 <br>
        * 1010 = A (10) <br>
        * 0011 = 3 <br>
        <br>
        Resultado = 1A3 (hexadecimal)
        <br><br>
        Resuminando:
        <br><br>
        1° Converta o número decimal para binário. <br>
        2° Agrupe em blocos de 4 bits. <br>
        3° Substitua cada bloco pelo equivalente hexadecimal.
    `
}

export function buttonInformationDecimalBinario() {
    functionButtonInformationBase(
        'Decimal',
        'Binário',
        textMoreDecimalBinario()
    )
}

export function buttonInformationDecimalOctal() {
    functionButtonInformationBase(
        'Decimal',
        'Octal',
        `${textMoreDecimalBinarioSave()} ${textMoreBinarioOctal()}}`
    )
    let space = document.getElementById('spaceDecimalBinario')
    
    document.getElementById('saberDecimalBinario').addEventListener('click', () => {
            console.log(space.innerText.length)
            if (space.innerText.length == 0) {
                space.innerHTML = `<h5>Conversão de Decimal para Binário</h5> ${textMoreDecimalBinario()} <br>`
            } else {
               space.innerHTML = ''
            }
        })
}

export function buttonInformationDecimalHexadecimal() {
    functionButtonInformationBase(
        'Decimal',
        'Hexadecimal',
        `${textMoreDecimalBinarioSave()} ${textMoreBinarioHexadecimal()}}`
    )
    let space = document.getElementById('spaceDecimalBinario')

    document.getElementById('saberDecimalBinario').addEventListener('click', () => {
            console.log(space.innerText.length)
            if (space.innerText.length == 0) {
                space.innerHTML = `<h5>Conversão de Decimal para Binário</h5> ${textMoreDecimalBinario()} <br>`
            } else {
               space.innerHTML = ''
            }
        })
}

export function buttonInformationBinarioOctal() {
    functionButtonInformationBase(
        'Binário',
        'Octal',
        textMoreBinarioOctal()
    )
}

export function buttonInformationBinarioDecimal() {
    functionButtonInformationBase(
        'Binário',
        'Decimal',
        'fazer2'
    )
}

export function buttonInformationBinarioHexadecimal() {
    functionButtonInformationBase(
        'Binário',
        'Hexadecimal',
        textMoreBinarioHexadecimal()
    )
}

export function buttonInformationOctalBinario() {
    functionButtonInformationBase(
        'Octal',
        'Binário',
        'fazer4'
    )
}

export function buttonInformationOctalDecimal() {
    functionButtonInformationBase(
        'Octal',
        'Decimal',
        'fazer5'
    )
}

export function buttonInformationOctalHexadecimal() {
    functionButtonInformationBase(
        'Octal',
        'Hexadecimal',
        'fazer6'
    )
}

export function buttonInformationHexadecimalBinario() {
    functionButtonInformationBase(
        'Hexadecimal',
        'Binário',
        'fazer7'
    )
}

export function buttonInformationHexadecimalOctal() {
    functionButtonInformationBase(
        'Hexadecimal',
        'Octal',
        'fazer8'
    )
}

export function buttonInformationHexadecimalDecimal() {
    functionButtonInformationBase(
        'Hexadecimal',
        'Decimal',
        'fazer9'
    )
}