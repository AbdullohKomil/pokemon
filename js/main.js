function MyFunction(pokemons) {
  for (i of pokemons) {
    var clRow = document.querySelector(".row");
    var createColBox = document.createElement("div");
    var editClassCol = createColBox.classList.add("col-3", "text-center", "bg-success","mb-5","ms-2","text-light");
    var pushToRow = clRow.appendChild(createColBox);

    var createImg = document.createElement("img");
    createImg.setAttribute('src', i.img)
    createColBox.appendChild(createImg)

    var createName = document.createElement("h3");
    createName.innerHTML = i.name
    createColBox.appendChild(createName)

    var createCandy = document.createElement("p");
    createCandy.innerHTML = i.candy;
    createColBox.appendChild(createCandy)

    var createnum = document.createElement("p");
    createnum.innerHTML = i.num;
    createColBox.appendChild(createnum)

    var createSpawnTime = document.createElement("p");
    createSpawnTime.innerHTML = i.spawn_time;
    createColBox.appendChild(createSpawnTime)
  }
}
MyFunction(pokemons);
