const pool = document.getElementById("pool");
const apy = document.getElementById("apy");
const bcalculer = document.getElementById("bcalculer");
const pgainannuel = document.getElementById("pgainannuel");
const pgainmensuel = document.getElementById("pgainmensuel");

bcalculer.addEventListener("click", () => {
    const npool = pool.value;
    const napy = apy.value / 100;
    const aresult =  npool * napy
    const mresult =  aresult / 12
    pgainannuel.innerHTML = aresult + "€"
    pgainmensuel.innerHTML = mresult + "€"
});
