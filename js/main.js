var clRow = document.querySelector(".row");
clRow.textContent = "";
function Myfunc(array, node) {
  node.innerHTML = "";
  for (var a of array) {
    var createColBox = document.createElement("div");
    var editClassCol = createColBox.classList.add(
      "col-3",
      "text-center",
      "bg-success",
      "mb-5",
      "ms-2",
      "text-light"
    );

    var pushToRow = node.appendChild(createColBox);

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

Myfunc(pokemons, clRow);
var elSelect = document.querySelector("#select-js");

let newArr = [];
elSelect.addEventListener("change", function () {
  newArr = [];

  if (elSelect.value != "All") {
    pokemons.forEach((poc) => {
      if (poc.type.includes(elSelect.value)) {
        newArr.push(poc);
        Myfunc(newArr, clRow);
      } else {
        Myfunc(newArr, clRow);
      }
    });
  }
});

var selectOptions = [];
let newSet = new Set();
pokemons.forEach((item) => {
  item.type.forEach((type) => {
    newSet.add(type);
  });
});
console.log(newSet);
newSet.forEach((type) => {
  var elOption = document.createElement("option");
  elOption.value = type;
  elOption.textContent = type;
  elSelect.appendChild(elOption);
});
