const container = document.querySelector(".container");
const div = [];
const coluna = [];

let num = 660/16 - 2;
const texto = "height: " + num + "px;"
for (let i = 0; i < 16; i++){
    coluna[i] = document.createElement("div");
    coluna[i].classList.add("coluna");
    coluna[i].setAttribute('style', texto);  
    container.appendChild(coluna[i]);

    div.push([]);
    for (let j = 0; j < 16; j++){
        div[i][j] = document.createElement("div");
        coluna[i].appendChild(div[i][j]);
    }
}

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        div[i][j].addEventListener("mouseover", () =>{
            div[i][j].classList.add("red");
        });
    }
}