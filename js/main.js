function pokemonfunc(pokemons) {
  var clRow = document.querySelector(".row");
  clRow.textContent = "";
  for (var a of pokemons) {
    var createColBox = document.createElement("div");
    var editClassCol = createColBox.classList.add(
      "col-3",
      "text-center",
      "bg-success",
      "mb-5",
      "ms-2",
      "text-light"
    );

    var pushToRow = clRow.appendChild(createColBox);

    var createImg = document.createElement("img");
    createImg.setAttribute("src", a.img);
    createColBox.appendChild(createImg);

    var createName = document.createElement("h3");
    createName.innerHTML = a.name;
    createColBox.appendChild(createName);

    var createCandy = document.createElement("p");
    createCandy.innerHTML = a.candy;
    createColBox.appendChild(createCandy);

    var createnum = document.createElement("p");
    createnum.innerHTML = a.num;
    createColBox.appendChild(createnum);

    var createSpawnTime = document.createElement("p");
    createSpawnTime.innerHTML = a.spawn_time;
    createColBox.appendChild(createSpawnTime);
  }
}
var types = [
  "Poison","Fire","Grass","Water","Electric","Bug","Normal","Ground","Fighting","Psychic","Rock","Ice","Ghost","Flying","Dragon",
];

var pokemonsVar = pokemons;

var elSelect = document.querySelector("#select-js");
for (var i of types) {
  var elOption = document.createElement("option");
  elOption.value = i;
  elOption.textContent = i;
  elSelect.appendChild(elOption);
}

elSelect.addEventListener("change", (element) => {
  var type = element.target.value;
  pokemonsVar = pokemons.filter((pok) => {
    return pok.type.includes(type);
  });
  pokemonfunc(pokemonsVar);
});

pokemonfunc(pokemonsVar);
