let groceriesList = ["uova", "latte", "farina", "pane", "zucchero", "fazzoletti"];

let i = 0;

const listaSpesaDom = document.querySelector('.lista-spesa');

while(i < groceriesList.length){

    let listItem = `<li> ${groceriesList[i]}</li>`;

    listaSpesaDom.innerHTML += listItem;
    i++
}
