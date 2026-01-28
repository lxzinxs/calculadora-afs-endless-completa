let click, champion, tempoClick, tempoYen, tenho, faltaPoder, faltaYen, meta, segundosPorClick, segundosPorChampion, segundosPorYen, totalPorSegundo, totalPorMinuto, yen, multiplicador1Yen, multiplicador2Yen, yenTotal, horas, minutos, opcao, resultadoYen, resultadoClick, segundos;
const tempoChampion = 4;
let nomes = ["", "Strength", "Durability", "Chakra", "Sword", "Yen"];
let nomeAtual = nomes[opcao] || "Stats";

function calculator() {
    opcao = Number(document.getElementById('statType').value);

    click = sufixos(document.getElementById('statPerTick').value);
    tenho = sufixos(document.getElementById('currentStats').value);
    champion = sufixos(document.getElementById('championPerTick').value);
    meta = sufixos(document.getElementById('wantedStats').value);

    if (opcao == 3) {
        tempoClick = 3;
    } else if (opcao == 2) {
        tempoClick = 1.9;
    } else {
        tempoClick = 1.25;
    }

    segundosPorClick = click / tempoClick;
    segundosPorChampion = champion / tempoChampion;
    totalPorSegundo = segundosPorClick + segundosPorChampion;

    faltaPoder = meta - tenho;

    resultadoClick = Math.floor(faltaPoder / totalPorSegundo);

    horas = Math.floor(resultadoClick / 3600);
    minutos = Math.floor((resultadoClick % 3600) / 60);
    segundos = Math.floor(resultadoClick % 60);

    totalPorMinuto = totalPorSegundo * 60;

    document.getElementById('timeResult').innerText = "Time: " + horas + "h " + minutos + "m " + segundos + "s";
    document.getElementById('statPerMin').innerText = `${nomeAtual} por minuto: ${formatarSufixos(totalPorMinuto)}`;
}

function sufixos(texto) {
    let textoLimpo = texto.toLowerCase().trim();
    let numeroBase = parseFloat(textoLimpo);

    if (textoLimpo.endsWith('k')) {
        return numeroBase * 1000;
    } else if (textoLimpo.endsWith('m')) {
        return numeroBase * 1000000
    } else if (textoLimpo.endsWith('b')) {
        return numeroBase * 1000000000
    } else if (textoLimpo.endsWith('t')) {
        return numeroBase * 1000000000000
    } else if (textoLimpo.endsWith('qd')) {
        return numeroBase * 1000000000000000
    } else if (textoLimpo.endsWith('qn')) {
        return numeroBase * 1000000000000000000
    } else if (textoLimpo.endsWith('sx')) {
        return numeroBase * 1000000000000000000000
    } else if (textoLimpo.endsWith('sp')) {
        return numeroBase * 1000000000000000000000000
    } else if (textoLimpo.endsWith('oc')) {
        return numeroBase * 1000000000000000000000000000
    }
    return numeroBase || 0;
}

function formatarSufixos(valor) {
   if (!valor || valor === 0) {
    return 0;
   }

    const sufixosLista = ['', 'k','m', 'b', 't', 'qd', 'qn', 'sx', 'sp', 'oc'];
    let grau = 0;

    while (Math.abs(valor) >= 1000 && grau < sufixosLista.length - 1) {
        valor /= 1000;
        grau++;
    }

    return valor.toFixed(2) + sufixosLista[grau];
}