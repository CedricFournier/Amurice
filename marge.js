const pachat = document.getElementById("pachat");
const pvente = document.getElementById("pvente");
const quantite = document.getElementById("quantite");
const ctransport = document.getElementById("ctransport");
const conditionnement = document.getElementById("conditionnement");
const tcommercial = document.getElementById("tcommercial");
const errorchamps = document.getElementById("errorchamps");
const bcalculer = document.getElementById("bcalculer");
const chiffreaffaire = document.getElementById("chiffreaffaire");
const poids = document.getElementById("poids");
const coutachat = document.getElementById("coutachat");
const margebrut = document.getElementById("margebrut");
const impot = document.getElementById("impot");
const pcommercial = document.getElementById("pcommercial");
const margenet = document.getElementById("margenet");

bcalculer.addEventListener("click", () => {
    const caffaire = pvente.value * quantite.value;
    const cachat = pachat.value * quantite.value;
    const cpoids = conditionnement.value * quantite.value;
    const mbrut = caffaire - cachat;
    const cimpot = caffaire * 0.123;
    const ccommercial = caffaire * tcommercial.value / 100;
    const mnet = mbrut - cimpot - ccommercial - ctransport.value;

    chiffreaffaire.innerHTML = caffaire + "€";
    poids.innerHTML = cpoids + "KG"
    coutachat.innerHTML = cachat + "€";
    margebrut.innerHTML = mbrut + "€";
    impot.innerHTML = cimpot + "€";
    pcommercial.innerHTML = ccommercial + "€";
    margenet.innerHTML = mnet + "€";
    
});