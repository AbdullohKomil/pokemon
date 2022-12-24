var elRow = document.querySelector(".row");
// const elBookmark = document.querySelector('.col-4')

// let data = JSON.parse(window.localStorage.getItem('bookmark'))

// let bookmarkList = data || []

// bookmarkRender(bookmarkList,elBookmark)

elRow.textContent = "";
function Myfunc(array, node) {
  node.innerHTML = "";
  for (var a of array) {
    var createColBox = document.createElement("div");
    var editClassCol = createColBox.classList.add(
      "col-3",
      "text-center",
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

Myfunc(pokemons, elRow);
var elSelect = document.querySelector("#select-js");

let newArr = [];
elSelect.addEventListener("change", function () {
  newArr = [];

  if (elSelect.value != "All") {
    pokemons.forEach((poc) => {
      if (poc.type.includes(elSelect.value)) {
        newArr.push(poc);
        Myfunc(newArr, elRow);
      }
    });
    Myfunc(newArr, elRow);
  } else {
    Myfunc(pokemons, elRow);
  }
});

var selectOptions = [];
let newSet = new Set();
pokemons.forEach((item) => {
  item.type.forEach((type) => {
    newSet.add(type);
  });
});
// console.log(newSet);
newSet.forEach((type) => {
  var elOption = document.createElement("option");
  elOption.value = type;
  elOption.textContent = type;
  elSelect.appendChild(elOption);
});
let elSelect_2 = document.querySelector("#select-js-2");

elSelect_2.addEventListener("change", () => {
  let elSelect_2Val = elSelect_2.value;
  if (elSelect_2Val != "default") {
    if (elSelect_2Val == "A-Z") {
      const pokemonSort = pokemons.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      Myfunc(pokemonSort, elRow);
    } else if (elSelect_2Val == "Z-A") {
      const pokemonSort_2 = pokemons.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
      Myfunc(pokemonSort_2, elRow);
    }
  }else {
    window.location.reload();
  }
});

// elRow.addEventListener('click' ,(evt) => {
//   if(evt.target.matches('.bookmark-btn')) {
//     let pokemonfind = pokemons.find((el) => el.id == evt.target)
//   }
// })









const btnMode = document.querySelector('.dark-mode-btn')
let theme = false

btnMode.addEventListener('click' , () => {
  theme =!theme
  const bg = theme ? "dark" : "light";
  window.localStorage.setItem('theme' , bg)
  changeTheme()
})

function changeTheme () {
  if(window.localStorage.getItem('theme') == 'dark') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}
changeTheme()

