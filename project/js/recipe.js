var jsonData;

// var recipename = "";
// var recipename = document.getElementById("myInput").value;
// console.log(recipename)
// let mainURL = 'https://api.edamam.com/search?q=' + recipename + '&app_id=9d9c891b&app_key=e51ccbffd29396bf29af8332371739da&from=0&to=60';
// window.addEventListener("load", () => {
// });

let mainURL = 'https://api.edamam.com/search?q=nigerian&app_id=9d9c891b&app_key=e51ccbffd29396bf29af8332371739da&from=0&to=90';
fetch(mainURL)
    .then(response => response.json())
    .then(data => load(data));

  
function load(data) {
    jsonData = data;
    // console.log(jsonData);
    // showRecipeList(data);
}

function showRecipeList(data) {
    const recipeListElement = document.getElementById("recipes");
    recipeListElement.innerHTML = '';
    renderRecipeList(data.hits, recipeListElement);
}
  
function renderRecipeList(recipes, parent) {
    recipes.forEach(formula => {
        parent.appendChild(renderOneRecipe(formula));
    });
}
  
function renderOneRecipe(formula) {
    const item = document.createElement("section");
    item.className = "menu";

    item.innerHTML = `<div class='heading'><h2>${formula.recipe.label}</h2></div>`;
    item.innerHTML += `<img src="${formula.recipe.image}" alt="from ${formula.recipe.url}">`;
    item.innerHTML += `<h3>Total Calories: ${Math.round(formula.recipe.calories)} kcal</h3>`;
    item.innerHTML += `<h3>Number of servings: ${formula.recipe.yield}</h3>`;
    let i = formula.recipe.dietLabels.toString().replace(/,/g, ' &#183; ');
    let j = formula.recipe.healthLabels.toString().replace(/,/g, ' &#183; ');
    item.innerHTML += `<div class='foodLabels' title='Diet & Health Labels'><h4>${i} &#183; ${j}</h4></div>`;
    // if (formula.recipe.totalTime == 0) {
    //     item.innerHTML += `<h4>Total time: N/A </h4>`;
    // } else {
    //     item.innerHTML += `<h4>Total time: ${formula.recipe.totalTime} mins</h4>`;
    // }
    item.innerHTML += `<h4 class='i'>For ${formula.recipe.mealType}</h4>`;
    let y = formula.recipe.totalNutrients.PROCNT.label.toString().replace('Protein', 'PROTEIN');
    item.innerHTML += `<li class='k'><span>${y}: ${Math.round(formula.recipe.totalNutrients.PROCNT.quantity)}g</span></li>`;
    let v = formula.recipe.totalNutrients.FAT.label.toString().replace('Total lipid (fat)', 'FAT');
    item.innerHTML += `<li class='j'><span>${v}: ${Math.round(formula.recipe.totalNutrients.FAT.quantity)}g</span></li>`;
    let z = formula.recipe.totalNutrients.CHOCDF.label.toString().replace('Carbohydrate, by difference', 'CARB');
    item.innerHTML += `<li class='l'><span>${z}: ${Math.round(formula.recipe.totalNutrients.CHOCDF.quantity)}g</span></li>`;
    // item.innerHTML += `<div class='ingredients'>Ingredients: ${formula.recipe.ingredientLines}</div>`;

    return item;
}

// SEARCH RECIPE
function myFunction() {
    let data = jsonData
    showRecipeList(data);
    let input = document.getElementById('myInput').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('menu');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
            x[i].style.display="none";
            // alert("Oops! We do not have that in our Database. Please try another word.");
            // return;
        }
        else {
            x[i].style.display="list-item";
        }
    }
}

// FILTER BREAKFAST
function filterBreakfast() {
    let data = jsonData
    showRecipeList(data);
    let x = document.getElementsByClassName('menu');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLocaleLowerCase().includes('breakfast')) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}

// FILTER LUNCH & DINNER
function filterlnd() {
    let data = jsonData
    showRecipeList(data);
    let x = document.getElementsByClassName('menu');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLocaleLowerCase().includes('lunch')) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}

// FILTER SNACK
function filterSnack() {
    let data = jsonData
    showRecipeList(data);
    let x = document.getElementsByClassName('menu');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLocaleLowerCase().includes('snack')) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}


// LOCAL STORAGE
var recipeSearchHistory = (localStorage.recipeSearchHistory) ? JSON.parse(localStorage.recipeSearchHistory) : [];
document.querySelector(".searchBtn").addEventListener("click", () => {
    if(recipeSearchHistory.indexOf(document.querySelector(".input").value) === -1) {
        recipeSearchHistory.push(document.querySelector(".input").value);
        localStorage.recipeSearchHistory = JSON.stringify(recipeSearchHistory);
    }
});

// SHOW ON SEARCH INPUT AREA
document.querySelector(".input").addEventListener("focus", () => {
    var data = document.querySelector("datalist#searchdata");
    data.innerHTML = "";
    recipeSearchHistory.forEach((searchBtn) => {
        data.innerHTML = "<option>" + data.innerHTML;
        data.querySelector("option").innerText = searchBtn;
    });
});


// GET ALL RECIPES
function allRecipe() {
    let data = jsonData
    showRecipeList(data);
}