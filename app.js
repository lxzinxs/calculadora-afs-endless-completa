let opcao;
const tempoChampion = 4;
let nomes = ["", "Strength", "Durability", "Chakra", "Sword", "Yen"];
let nomeAtual = nomes[opcao] || "Stats";

function calcularPoder() {
    let opcao = Number(document.getElementById('statType').value);
    let nomeAtual = nomes[opcao];

    let click = sufixos(document.getElementById('statPerTick').value);
    let tenho = sufixos(document.getElementById('currentStats').value);
    let champion = sufixos(document.getElementById('championPerTick').value);
    let meta = sufixos(document.getElementById('wantedStats').value);

    
    if (opcao == 5) {
        calcularYen();
        return;
    } 
    
    let tempoClick;

    if (opcao == 3) {
        tempoClick = 2.55;
    } else if (opcao == 2) {
        tempoClick = 1.9;
    } else {
        tempoClick = 1.25;
    }

    let segundosPorClick = click / tempoClick;
    let segundosPorChampion = champion / tempoChampion;
    let totalPorSegundo = segundosPorClick + segundosPorChampion;

    let faltaPoder = meta - tenho;

    let resultadoClick = Math.floor(faltaPoder / totalPorSegundo);

    let horas = Math.floor(resultadoClick / 3600);
    let minutos = Math.floor((resultadoClick % 3600) / 60);
    let segundos = Math.floor(resultadoClick % 60);

    let totalPorMinuto = totalPorSegundo * 60;

    document.getElementById('timeResult').innerText = "Time: " + horas + "h " + minutos + "m " + segundos + "s";
    document.getElementById('statPerMin').innerText = `${nomeAtual} por minuto: ${formatarSufixos(totalPorMinuto)}`;
}

function calcularYen() {
    opcao = Number(document.getElementById('statType').value);
    nomeAtual = nomes[opcao];

    let yen = sufixos(document.getElementById('statPerTick').value);
    let multiplicador1 = parseFloat(document.getElementById('mult1').value);
    let multiplicador2 = parseFloat(document.getElementById('mult2').value);
    let multiChampion = parseFloat(document.getElementById('championPerTick').value);
    let tenho = sufixos(document.getElementById('currentStats').value);
    let meta = sufixos(document.getElementById('wantedStats').value);

    let yenTotal = yen * multiplicador1 * multiplicador2 * multiChampion;

    let yenPorHora = yenTotal * 60

	let segundosPorYen = yenTotal / 60;
	let faltaYen = meta - tenho;
	let resultadoYen = faltaYen / segundosPorYen;

	let horas = Math.floor(resultadoYen / 3600);
	let minutos = Math.floor((resultadoYen % 3600) / 60);
	let segundos = Math.floor(resultadoYen % 60);

    let totalPorMinuto = yenTotal;

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
    opcao = Number(seletor.value);
    nomeAtual = nomes[opcao];

    if (seletor.value === "5") {
        document.getElementById('statPerTick').value = "";
        document.getElementById('currentStats').value = "";
        document.getElementById('wantedStats').value = "";
        document.getElementById('championPerTick').value = "";
        document.getElementById('mult1').value = "";
        document.getElementById('mult2').value = "";

        document.getElementById('statPerMin').innerText = `${nomeAtual} Per Hour: 0`;
        document.getElementById('timeResult').innerText = "Time: 0h 0m 0s";

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
        document.getElementById('labelCurrent').innerText = "Current Stats";
        document.getElementById('labelWanted').innerText = "Wanted Stats";
        
        document.getElementById('statPerMin').innerText = `${nomeAtual} Per Minute: 0`;
    }
});