const pooldisplay = document.getElementById("pool");
const reward = document.getElementById("reward");
const rewardgagner = document.getElementById("rewardgagner");
const rewardprogress = document.getElementById("rewardprogress");
const rewardspan = document.getElementById("rewardspan");
const tabcompound = document.getElementById("tabcompound");

importhistorique();

async function importhistorique () {
    const importhistorique = await fetch("./historique.json");
    const jsonhistorique = await importhistorique.json();
    const historique = JSON.stringify(jsonhistorique);
    window.localStorage.setItem("historique", historique);
    importpool();
};

async function importpool () {
    const importpool = await fetch("./pool.json");
    const jsonpool = await importpool.json();
    const pool = JSON.stringify(jsonpool);
    window.localStorage.setItem("pool", pool);
};

const historiquejson = window.localStorage.getItem('historique');
const historique = JSON.parse(historiquejson)
const pooljson = window.localStorage.getItem('pool');
const tabpool = JSON.parse(pooljson)

const datecree = tabpool[0].datecree
const datejson = tabpool[0].date
const pool = tabpool[0].pool
const rewardispo = tabpool[0].rewardispo
const rewardjson = tabpool[0].reward

displaypool();

function displaypool () {
    const taux = 15 / 100;
    const txdaily = taux /365
    const date1 = new Date(datejson);
    const date2 = new Date(Date());
    const time = date2.getTime() - date1.getTime();
    const ddays = Math.floor(time / (1000 * 3600 * 24));
    const winreward = pool * ddays * txdaily;
    const disreward = Number(winreward) + Number(rewardjson)
    pooldisplay.innerHTML = pool + "€"
    reward.innerHTML = rewardispo + "€"
    rewardgagner.innerHTML = disreward.toFixed(2) + "€"
    displayprogress(txdaily, disreward);
};

function displayprogress (txdaily, disreward) {
    const date1 = new Date(datecree);
    const date2 = new Date(Date());
    const time = date2.getTime() - date1.getTime();
    const ddays = Math.floor(time / (1000 * 3600 * 24));
    const restdays = 730 - ddays
    const txdays = ddays / 730 * 100
    const rewardrestdays = restdays * txdaily * pool
    const rewardmax = rewardrestdays + disreward
    rewardprogress.value = txdays
    rewardspan.innerHTML = rewardmax.toFixed(2) + "€ * ceci est une estimation"
    displayhisto();
}

function displayhisto () {
    let i = 0;
    for (i ; i < historique.length; i++) {
        const date = new Date(historique[i].date)
        let tableau = `
            <tr>
                <td>${date.toLocaleDateString("fr")}</td>
                <td>${historique[i].montant + " €"}</td>
            </tr>
            `
        tabcompound.insertAdjacentHTML("beforeend", tableau);
    };
};