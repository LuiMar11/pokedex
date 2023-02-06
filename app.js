const btnMostrar = document.getElementById("mostrar");
const nombre = document.getElementById("name");
const xp = document.getElementById("xp");
const hp = document.getElementById("hp");
const ataque = document.getElementById("ataque");
const img = document.getElementById("img");

function randomId(min, max) {
  return Math.floor(Math.random() * (max - min) - min);
}

const callApi = () => {
  let id = randomId(1, 902);
  console.log(id);
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      nombre.innerText = `Name: ${JSON.stringify(data.name)}`;
      xp.innerText = `XP: ${JSON.stringify(data.base_experience)}`;
      ataque.innerText = `Ataque: ${JSON.stringify(data.stats[1].base_stat)}`;
    })
    .catch((e) => console.error(new Error(e)));
};

btnMostrar.addEventListener("click", callApi);
