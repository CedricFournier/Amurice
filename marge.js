const pachat = document.getElementById("pachat");
const pvente = document.getElementById("pvente");
const quantite = document.getElementById("quantite");
const ctransport = document.getElementById("ctransport");
const tcommercial = document.getElementById("tcommercial");
const breset = document.getElementById("breset");
const bcalculer = document.getElementById("bcalculer");
const chiffreaffaire = document.getElementById("chiffreaffaire");
const coutachat = document.getElementById("coutachat");
const margebrut = document.getElementById("margebrut");
const impot = document.getElementById("impot");
const pcommercial = document.getElementById("pcommercial");
const margenet = document.getElementById("margenet");

bcalculer.addEventListener("click", () => {
    const caffaire = pvente.value * quantite.value;
    const cachat = pachat.value * quantite.value;
    const mbrut = caffaire - cachat;
    const cimpot = caffaire * 0.13;
    const ccommercial = caffaire * tcommercial.value / 100;
    const mnet = mbrut - cimpot - ccommercial - ctransport.value;

    chiffreaffaire.innerHTML = caffaire.toFixed(2) + "€";
    coutachat.innerHTML = cachat.toFixed(2) + "€";
    margebrut.innerHTML = mbrut.toFixed(2) + "€";
    impot.innerHTML = cimpot.toFixed(2) + "€";
    pcommercial.innerHTML = ccommercial.toFixed(2) + "€";
    margenet.innerHTML = mnet.toFixed(2) + "€";
    
});

breset.addEventListener("click", () => {
    pachat.value = "";
    pvente.value = "";
    quantite.value = "";
    ctransport.value = "";
    tcommercial.value = "";
    chiffreaffaire.innerHTML = "0€";
    coutachat.innerHTML = "0€";
    margebrut.innerHTML = "0€";
    impot.innerHTML = "0€";
    pcommercial.innerHTML = "0€";
    margenet.innerHTML = "0€";

})