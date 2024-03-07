const container = document.querySelector(".container");
const div = [];
const coluna = [];

function CriarQuadro(qtd){
    if(qtd < 16) qtd = 16;

    let num = 550/qtd;
    const texto = "height: " + num + "px;"
    for (let i = 0; i < qtd; i++){
        coluna[i] = document.createElement("div");
        coluna[i].classList.add("coluna");
        coluna[i].setAttribute('style', texto);  
        container.appendChild(coluna[i]);

        div.push([]);
        for (let j = 0; j < qtd; j++){
            div[i][j] = document.createElement("div");
            coluna[i].appendChild(div[i][j]);
        }
    }

    for(let i = 0; i < qtd; i++){
        for(let j = 0; j < qtd; j++){
            div[i][j].addEventListener("mouseover", () =>{
                div[i][j].classList.add("red");
                let atributo = "";
                atributo = div[i][j].getAttribute("style");
                let num = 0;
                if(atributo !== null)
                    num = Number(atributo.slice(8));
                if(num < 1) num += 0.1;
                if(num === 0.1) num = 0.5;
                let opacity = "opacity: " + num;
                div[i][j].setAttribute("style", opacity);
            });
        }
    }
    return qtd;
}

let qtd = CriarQuadro(0);

const button = document.querySelector(".button");

button.addEventListener("click", () =>{
    for(let i = 0; i < qtd; i++){
        container.removeChild(coluna[i]);
    }
    qtd = prompt("Homw many squares per side?");
    if(qtd > 100) qtd = 100;
    if(qtd < 16) qtd = 16;
    return CriarQuadro(qtd);
});