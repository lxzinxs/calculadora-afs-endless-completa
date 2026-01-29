let click, champion, multiChampion, tempoClick, tempoYen, tenho, faltaPoder, faltaYen, meta, segundosPorClick, segundosPorChampion, segundosPorYen, yenPorHora, totalPorSegundo, totalPorMinuto, yen, multiplicador1Yen, multiplicador2Yen, yenTotal, horas, minutos, opcao, resultadoYen, resultadoClick, segundos;
const tempoChampion = 4;
let nomes = ["", "Strength", "Durability", "Chakra", "Sword", "Yen"];
let nomeAtual = nomes[opcao] || "Stats";

function calcularPoder() {
    opcao = Number(document.getElementById('statType').value);
    nomeAtual = nomes[opcao];

    click = sufixos(document.getElementById('statPerTick').value);
    tenho = sufixos(document.getElementById('currentStats').value);
    champion = sufixos(document.getElementById('championPerTick').value);
    meta = sufixos(document.getElementById('wantedStats').value);

    if (opcao == 5) {
        calcularYen();
        return;
    } else if (opcao == 3) {
        tempoClick = 2.55;
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

function calcularYen() {
    opcao = Number(document.getElementById('statType').value);
    nomeAtual = nomes[opcao];

    yen = sufixos(document.getElementById('statPerTick').value);
    multiplicador1 = parseFloat(document.getElementById('mult1').value);
    multiplicador2 = parseFloat(document.getElementById('mult2').value);
    multiChampion = parseFloat(document.getElementById('championPerTick').value);
    tenho = sufixos(document.getElementById('currentStats').value);
    meta = sufixos(document.getElementById('wantedStats').value);

    yenTotal = yen * multiplicador1 * multiplicador2 * multiChampion;

    yenPorHora = yenTotal * 60

	segundosPorYen = yenTotal / 60;
	faltaYen = meta - tenho;
	resultadoYen = faltaYen / segundosPorYen;

	horas = Math.floor(resultadoYen / 3600);
	minutos = Math.floor((resultadoYen % 3600) / 60);
	segundos = Math.floor(resultadoYen % 60);

    totalPorMinuto = yenTotal;

    document.getElementById('timeResult').innerText = "Time: " + horas + "h " + minutos + "m " + segundos + "s";
    document.getElementById('statPerMin').innerText = `${nomeAtual} Per Hour: ${formatarSufixos(yenPorHora)}`;
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

const seletor = document.getElementById('statType'); 
const divYen = document.getElementById('camposYen');
const divChampion = document.getElementById('grupoChampion');

seletor.addEventListener('change', function() {
    if (seletor.value === "5") {
        divYen.style.display = "block";    
        divChampion.style.display = "block"; 
        document.getElementById('labelStat').innerText = "Earning Per Minute";
        document.getElementById('labelChampion').innerText = "Champion Multiplier";
        document.getElementById('labelCurrent').innerText = "Current Yen";
        document.getElementById('labelWanted').innerText = "Wanted Yen";
    } else {
        divYen.style.display = "none";     
        divChampion.style.display = "block"; 
        document.getElementById('labelStat').innerText = "Stat Per Click";
        document.getElementById('labelChampion').innerText = "Champion Per Click";
        document.getElementById('labelCurrent').innerText = "Curent Stats";
        document.getElementById('labelWanted').innerText = "Wanted stats";
    }
});