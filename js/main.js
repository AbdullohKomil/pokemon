
function MyFunction(pokemons) {
  for (Object of pokemons) {
    var clRow = document.querySelector(".row");
    var createColBox = document.createElement("div");
    var editClassCol = createColBox.classList.add("col-3", "text-center", "bg-success","mb-5","ms-2","text-light",);
    var pushToRow = clRow.appendChild(createColBox);

    var createImg = document.createElement("img");
    createImg.setAttribute('src', Object.img)
    createColBox.appendChild(createImg)

    var createName = document.createElement("h3");
    createName.innerHTML = Object.name
    createColBox.appendChild(createName)

    var createCandy = document.createElement("p");
    createCandy.innerHTML = Object.candy;
    createColBox.appendChild(createCandy)

    var createnum = document.createElement("p");
    createnum.innerHTML = Object.num;
    createColBox.appendChild(createnum)

    var createSpawnTime = document.createElement("p");
    createSpawnTime.innerHTML = Object.spawn_time;
    createColBox.appendChild(createSpawnTime)
  }
}
MyFunction(pokemons);
