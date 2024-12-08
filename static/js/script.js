function random(min, max) {
    let n = Math.random() * (max - min) + min;
    n = parseInt(n);
    return n;
}

function changeGreen() {
    start.innerHTML = "CLICCA ORA!";
    luceAlta.classList.replace("rosso", "verde");
    luceCentrale.classList.replace("rosso", "verde");
    luceBassa.classList.replace("rosso", "verde");
    wait = true; 
    startTime = Date.now(); 
}

function resetLights() {
    luceAlta.classList.replace("verde", "rosso");
    luceCentrale.classList.replace("verde", "rosso");
    luceBassa.classList.replace("verde", "rosso");
    wait = false; 
    start.disabled = false;
    start.innerHTML = "INIZIA IL TEST!";
}

let start = document.querySelector("#start");
let luceAlta = document.querySelector("#luce-alta");
let luceCentrale = document.querySelector("#luce-centrale");
let luceBassa = document.querySelector("#luce-bassa");
let type = document.querySelector("#reflex");
let typeTime = document.querySelector("#time");

let wait = false; 
let startTime;
let bestTime = Infinity;

start.addEventListener("click", function () {
    if (!wait) {
        resetLights(); 
        let delay = random(1000, 3000); 
        type.innerHTML = "Preparati...";
        setTimeout(changeGreen, delay); 
    } else {
        let reactionTime = (Date.now() - startTime) / 1000;
        type.innerHTML = "Tempo di reazione: " + reactionTime + "s"; 
        if (reactionTime < bestTime) {
            bestTime = reactionTime; 
            typeTime.innerHTML = "Record personale: " + bestTime + "s";
        } else {
            typeTime.innerHTML = "Record personale: " + bestTime + "s";
        }
        start.disabled = true; 
        setTimeout(resetLights, 3000); 
    }
});
