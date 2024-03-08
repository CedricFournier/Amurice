const pool = document.getElementById("pool");
const apy = document.getElementById("apy");
const bcalculer = document.getElementById("bcalculer");
const pgainannuel = document.getElementById("pgainannuel");
const pgainmensuel = document.getElementById("pgainmensuel");
const tabdetail = document.querySelector(".tabdetail");
const tabcompound = document.querySelector(".tabcompound");

bcalculer.addEventListener("click", () => {
    const npool = pool.value;
    const napy = apy.value / 100;
    const cfrais = npool * napy / 365
    const aresult =  npool * napy - cfrais
    const mresult =  aresult / 12
    pgainannuel.innerHTML = aresult + "€"
    pgainmensuel.innerHTML = mresult + "€"
    detail(mresult)
    detailcompound(npool, napy)
});

function detail (mresult) {
    let i = 1;
    for (i ; i < 13; i++) {
        const tableau =  
        `
            <tr>
                <td>${i}</td>
                <td>${mresult * i + "€"}</td>
            </tr>
        ` 
        tabdetail.insertAdjacentHTML("beforeend", tableau);
    };
}

function detailcompound (npool, napy) {
    const mtaux = napy / 12
    const jtaux = napy / 365
    const taux = mtaux - jtaux
    let i = 0;
    for (i ; i < 12; i++) {
        const tableau =  
        `
            <tr>
                <td>${i + 1}</td>
                <td>${npool * taux * Math.pow(1 + (mtaux - jtaux), i) + " €"}</td>
                <td>${npool * Math.pow(1 + (mtaux - jtaux), i + 1) - npool + " €"}</td>
                <td>${npool * Math.pow(1 + (mtaux - jtaux), i + 1) + " €"}</td>
            </tr>
        ` 
        tabcompound.insertAdjacentHTML("beforeend", tableau);
    };
}
