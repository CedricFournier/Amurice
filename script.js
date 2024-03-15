const element = document.getElementById("element-to-print");
const pool = document.getElementById("pool");
const apy = document.getElementById("apy");
const frais = document.getElementById("frais");
const mois = document.getElementById("mois");
const bcalculer = document.getElementById("bcalculer");
const bdlpdf = document.getElementById("bdlpdf");
const errorchamps = document.getElementById("errorchamps")
const bestinterest = document.getElementById("bestinterest");
const tabdetail = document.querySelector(".tabdetail");
const tabcompound = document.querySelector(".tabcompound");

bcalculer.addEventListener("click", () => {
    const npool = pool.value;
    const napy = apy.value / 100;
    const nfrais = frais.value / 100;
    if (npool === "") {
        errorchamps.innerHTML = "Veuillez remplir le champs pool"
    } else if (napy === 0) {
        errorchamps.innerHTML = "Veuillez remplir le champs APY"
    } else {
        errorchamps.innerHTML = ""
        calbestinterest(npool, napy, nfrais)
    }   
});

bdlpdf.addEventListener("click", () => {
    html2pdf().from(element).save()
})

function calbestinterest (npool, napy, nfrais) {
    let tabinterest = []
    let i = 1;
    for (i ; i < 366; i++) {
        const result = npool * Math.pow(1 + (napy / i - nfrais), i)
        const object = {i: i, result: result}
        tabinterest.push(object)
    };
    const biginterest = tabinterest.slice().sort((evtA, evtB) =>
    evtA.result > evtB.result ? -1 : 1 )[0];
    datecompound(npool, napy, nfrais, biginterest)    
}

function datecompound (npool, napy, nfrais, biginterest) {
    const besti = biginterest.i
    const bestresult = biginterest.result
    bestinterest.innerHTML = "Vous devrez stake " + besti + " fois pour avoir le meilleur rendement soit " + bestresult.toFixed(2) + "€"
    detailcompound(npool, napy, nfrais, besti)
}

function detailcompound (npool, napy, nfrais, besti) {
    const mtaux = napy / besti
    const taux = mtaux - nfrais
    const restake = 365 / besti
    const date = new Date()
    let i = 0;
    tabcompound.innerHTML = ""
    for (i ; i < besti; i++) {
        const gainm = npool * taux * Math.pow(1 + (mtaux - nfrais), i);
        const gainmc = npool * Math.pow(1 + (mtaux - nfrais), i + 1) - npool;
        const poolc = npool * Math.pow(1 + (mtaux - nfrais), i + 1);
        const date2 = addDaysToDate(date, restake * i)
        const tableau =  
        `
            <tr>
                <td>${date2.toLocaleDateString("fr")}</td>
                <td>${gainm.toFixed(2) + " €"}</td>
                <td>${gainmc.toFixed(2) + " €"}</td>
                <td>${poolc.toFixed(2) + " €"}</td>
            </tr>
        ` 
        tabcompound.insertAdjacentHTML("beforeend", tableau);
    };
    const label =
    `
        <tr>
            <td>Date d'injection</td>
            <td>Résultat</td>
            <td>Résultat cumuler</td>
            <td>Pool cumuler</td>
        </tr>  
    ` 
    tabcompound.insertAdjacentHTML("afterbegin", label);
}

function addDaysToDate(date, days) {
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
}