const date = document.getElementById("date");
const montant = document.getElementById("montant");
const bajouter = document.getElementById("bajouter");

importpool()

async function importpool () {
    const importpool = await fetch("./pool.json");
    const jsonpool = await importpool.json();
    const pool = JSON.stringify(jsonpool);
    window.localStorage.setItem("pool", pool);
};

const pooljson = window.localStorage.getItem('pool');
const tabpool = JSON.parse(pooljson)

const datecree = tabpool[0].datecree
const datejson = tabpool[0].date
const pool = tabpool[0].pool
const rewardispo = tabpool[0].rewardispo
const rewardjson = tabpool[0].reward

function calculpool () {
    const tdate = new Date(datecree);
    const date1 = tdate.getFullYear()
    const mdate = new Date();
    const date2 = mdate.getFullYear()
    if(date1 < date2) {
        console.log("gg1")
    }
}

bajouter.addEventListener("click", () => {
    const dateajout = date.value
    const montantajout = montant.value
    calculpool()
});