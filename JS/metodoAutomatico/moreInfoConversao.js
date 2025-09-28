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

export function textMoreOctalBinarioSave() {
    return `
        1 - Converta de Octal para Binário.
        <br>
        Caso não saiba e queira aprender como fazer isso, 
        <span id="saberOctalBinario">Clique Aqui!</span>
        <br>
        <div id="spaceOctalBinario"></div>
        <br>
    `
}

export function textMoreHexadecimalBinarioSave() {
    return `
        1 - Converta de Hexadecimal para Binário.
        <br>
        Caso não saiba e queira aprender como fazer isso, 
        <span id="saberHexadecimalBinario">Clique Aqui!</span>
        <br>
        <div id="spaceHexadecimalBinario"></div>
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

export function textMoreBinarioDecimal() {
    return `
        <h5>Conversão de Binário para Decimal</h5>
        O sistema binário é posicional e baseado em potências de 2.
        <br><br>
        Cada dígito (bit) tem um peso dependendo da posição em que está:
        <br><br>
        Exemplo
        <br><br>
        * O bit mais à direita vale 2^0 = 1 <br>
        * O próximo vale 2^1 = 2 <br>
        * Depois 2^2 = 4 <br>
        * Depois 2^3 = 8 <br>
        * E assim por diante... <br>
        <br>
        Passo a passo:
        <br><br>
        1 - Escreva o número binário <br>
        2 - Atribua potências de 2 para cada posição, da direita a esquerda <br>
        3 - Multiplique cada bit pelo valor da potência. <br>
        4 - Some os resultados → esse é o número em decimal. <br>
        <br><br>
        Exemplo: converter 1101 (binário) para decimal 
        <br><br>
        * 1 x 2^3 = 8 <br>
        * 1 x 2^2 = 4 <br>
        * 0 x 2^1 = 0 <br>
        * 1 x 2^0 = 1 <br>
        <br>
        Somando: 8 + 4 + 0 + 1 = 13 <br>
        Portanto: <br>
        1101 (binário) = 13 (decimal) <br>
        <br>
        Outro exemplo: 101101 (binário)
        <br><br>
        * 1 x 2^5 = 32 <br>
        * 0 x 2^4 = 0 <br>
        * 1 x 2^3 = 8 <br>
        * 1 x 2^2 = 4 <br>
        * 0 x 2^1 = 0 <br>
        * 1 x 2^0 = 1 <br>
        <br>
        Somando: 32 + 0 + 8 + 4 + 0 + 1 = 45 <br>
        Portanto: <br>
        101101 (binário) = 45 (decimal) <br>
        * 1101 = D (13) <br>
        * 1110 = E (14) <br>
        * 1111 = F (15) <br>
        <br>
        Resuminando:
        <br><br>
        * Cada posição no binário vale uma potência de 2 <br>
        * Multiplique cada bit pela potência correspondente <br>
        * Some os valores → resultado em decimal.
    `
}

export function textMoreOctalBinario() {
    return `
        <h5>Conversão de Octal para Binário</h5>
        O sistema octal é baseado em potências de 8 (dígitos de 0 a 7).
        <br><br>
        Já o sistema binário é baseado em potências de 2 (dígitos 0 e 1).
        <br><br>
        A relação entre eles é simples:
        <br><br>
        cada dígito octal equivale a exatamente 3 bits binários.
        <br><br>
        Passo a passo:
        <br><br>
        1 - Escreva o número em octal. <br>
        2 - Substitua cada dígito octal pelo seu equivalente em 3 bits binários.<br>
        3 - Junte os grupos → esse será o número em binário. <br>
        <br>
        Tabela de conversão rápida (octal → binário)
        <br><br>
        * 0 = 000
        * 1 = 001
        * 2 = 010
        * 3 = 011
        * 4 = 100
        * 5 = 101
        * 6 = 110
        * 7 = 111
        <br><br>
        Exemplo: converter 157 (octal) para binário
        <br><br>
        * O dígito 1 → 001 <br>
        * O dígito 5 → 101 <br>
        * O dígito 7 → 111 <br>
        <br>
        Resultado: 001 101 111 <br>
        Ou seja: <br>
        157 (octal) = 1101111 (binário) <br>
        <br>
        Resuminando:
        <br><br>
        * Pegue cada dígito octal <br>
        * Troque por seu equivalente em 3 bits binários <br>
        * Junte os grupos → binário final
    `
}

export function textMoreHexadecimalBinario() {
    return `
        <h5>Conversão de Hexadecimal para Binário</h5>
        O sistema hexadecimal (base 16) usa os dígitos 0–9 e as letras A–F (que valem de 10 até 15).
        <br><br>
        Já o sistema binário (base 2) usa apenas 0 e 1.
        <br><br>
        A relação entre eles é simples:
        <br><br>
        cada dígito hexadecimal equivale a 4 bits (um "nibble").
        <br><br>
        Tabela de conversão rápida (hex → bin)
        <br><br>
        * 0 = 0000
        * 1 = 0001
        * 2 = 0010
        * 3 = 0011
        * 4 = 0100
        * 5 = 0101
        * 6 = 0110
        * 7 = 0111
        * 8 = 1000
        * 9 = 1001
        * A = 1010
        * B = 1011
        * C = 1100
        * D = 1101
        * E = 1110
        * F = 1111
        <br><br>
        Passo a passo:
        <br><br>
        1 - Escreva o número hexadecimal. <br>
        2 - Troque cada dígito pela sequência de 4 bits binários. <br>
        3 - Junte os grupos → esse é o número em binário. <br>
        <br>
        Exemplo: converter 2F (hex) para binário 
        <br><br>
        2 → 0010 <br>
        F → 1111 <br>
        <br><br>
        Resultado: 0010 1111 (ou 101111 sem os zeros à esquerda).
        <br><br>
        Resultado final:
        <br><br>
        2F (hexadecimal) = 101111 (binário)
        <br><br>
        Resumindo
        <br><br>
        * Cada dígito hexadecimal corresponde a 4 bits binários <br>
        * Basta substituir cada dígito hex pelo grupo de 4 bits <br>
        * Juntar os grupos → resultado final em binário <br>
        <br>
        Exemplo rápido:
        <br><br>
        A3 (hexadecimal) → A = 1010, 3 = 0011 → 10100011 (binário)
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
        textMoreBinarioDecimal()
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
        textMoreOctalBinario()
    )
}

export function buttonInformationOctalDecimal() {
    functionButtonInformationBase(
        'Octal',
        'Decimal',
        `${textMoreOctalBinarioSave()} ${textMoreBinarioDecimal()}}`
    )
    let space = document.getElementById('spaceOctalBinario')

    document.getElementById('saberOctalBinario').addEventListener('click', () => {
            console.log(space.innerText.length)
            if (space.innerText.length == 0) {
                space.innerHTML = `${textMoreOctalBinario()} <br>`
            } else {
               space.innerHTML = ''
            }
        })
}

export function buttonInformationOctalHexadecimal() {
    functionButtonInformationBase(
        'Octal',
        'Hexadecimal',
        `${textMoreOctalBinarioSave()} ${textMoreBinarioHexadecimal()}}`
    )
    let space = document.getElementById('spaceOctalBinario')

    document.getElementById('saberOctalBinario').addEventListener('click', () => {
            console.log(space.innerText.length)
            if (space.innerText.length == 0) {
                space.innerHTML = `${textMoreOctalBinario()} <br>`
            } else {
               space.innerHTML = ''
            }
        })
}

export function buttonInformationHexadecimalBinario() {
    functionButtonInformationBase(
        'Hexadecimal',
        'Binário',
        textMoreHexadecimalBinario()
    )
}

export function buttonInformationHexadecimalOctal() {
    functionButtonInformationBase(
        'Hexadecimal',
        'Octal',
        `${textMoreHexadecimalBinarioSave()} ${textMoreBinarioOctal()}}`
    )
    let space = document.getElementById('spaceHexadecimalBinario')

    document.getElementById('saberHexadecimalBinario').addEventListener('click', () => {
            console.log(space.innerText.length)
            if (space.innerText.length == 0) {
                space.innerHTML = `${textMoreHexadecimalBinario()} <br>`
            } else {
               space.innerHTML = ''
            }
        })
}

export function buttonInformationHexadecimalDecimal() {
    functionButtonInformationBase(
        'Hexadecimal',
        'Decimal',
        `${textMoreHexadecimalBinarioSave()} ${textMoreBinarioDecimal()}}`
    )
    let space = document.getElementById('spaceHexadecimalBinario')

    document.getElementById('saberHexadecimalBinario').addEventListener('click', () => {
            console.log(space.innerText.length)
            if (space.innerText.length == 0) {
                space.innerHTML = `${textMoreHexadecimalBinario()} <br>`
            } else {
               space.innerHTML = ''
            }
        })
}