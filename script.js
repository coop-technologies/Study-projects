const g1 = document.getElementById("g1");
const g2 = document.getElementById("g2");
const g3 = document.getElementById("g3");
const parler = document.getElementById("parler");
const parlerTable = document.getElementById("parler-table");
const marcher = document.getElementById("marcher");
const marcherTable = document.getElementById("marcher-table");
const apporter = document.getElementById("apporter");
const apporterTable = document.getElementById("apporter-table");
const finir = document.getElementById("finir");
const finirTable = document.getElementById("finir-table");
const choisir = document.getElementById("choisir");
const choisirTable = document.getElementById("choisir-table");
const etre = document.getElementById("etre");
const etreTable = document.getElementById("etre-table");
const avoir = document.getElementById("avoir");
const avoirTable = document.getElementById("avoir-table");
const aller = document.getElementById("aller");
const allerTable = document.getElementById("aller-table");
const venir = document.getElementById("venir");
const venirTable = document.getElementById("venir-table");

const gr1 = document.querySelector(".gr1");
const gr2 = document.querySelector(".gr2");
const gr3 = document.querySelector(".gr3");

g1.addEventListener("click", function () {
  gr1.classList.toggle("hidden");
});

g2.addEventListener("click", function () {
  gr2.classList.toggle("hidden");
});

g3.addEventListener("click", function () {
  gr3.classList.toggle("hidden");
});

parler.addEventListener("click", function () {
  parlerTable.classList.toggle("hidden");
});

marcher.addEventListener("click", function () {
  marcherTable.classList.toggle("hidden");
});

apporter.addEventListener("click", function () {
  apporterTable.classList.toggle("hidden");
});

finir.addEventListener("click", function () {
  finirTable.classList.toggle("hidden");
});

choisir.addEventListener("click", function () {
  choisirTable.classList.toggle("hidden");
});

etre.addEventListener("click", function () {
  etreTable.classList.toggle("hidden");
});

avoir.addEventListener("click", function () {
  avoirTable.classList.toggle("hidden");
});

aller.addEventListener("click", function () {
  allerTable.classList.toggle("hidden");
});

venir.addEventListener("click", function () {
  venirTable.classList.toggle("hidden");
});
