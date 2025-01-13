
window.addEventListener("DOMContentLoaded", ()=>{
const emulationTetris = document.querySelector(".em-tetris");
let colores = ["02af00", "FF0000","F700FF","FFF700", "000FFF","F700FF","02af00", "FF0000","F700FF","FFF700", "000FFF","F700FF"]
function nR(){return Math.floor(Math.random()*colores.length)}
let timeAnimation = 1;
let bloqueGeneral = "position: relative;display: grid;grid-template-columns: 100px 100px 100px;grid-template-rows: 100px 100px 100px;min-width: 300px;min-height: 300px;left: -50px;"

class crearBloques{
    constructor(num){
        this.num = num;
    }


    crearBloque(nombreBloque){
        if (nombreBloque == "t"){
            let bloque = document.createElement("div");
            bloque.setAttribute("style", `${bloqueGeneral} animation: b 1s reverse ${(timeAnimation++)-.5}s both`)
            bloque.classList.add("bloque-grande-t")
            let colorRandom = nR();
            let format = `position: relative; background: #${colores[colorRandom]};box-shadow: 0px 0px 15px #${colores[colorRandom]};margin: 1px;`

            emulationTetris.appendChild(bloque)
            for (let t = 1; t <= this.num; t++){
                let bloquesPequeños = document.createElement("div");
                bloquesPequeños.classList.add("bloque-t");
                    if (t<4){bloquesPequeños.setAttribute("style",`${format}grid-column: ${t}/${t};grid-row: 3/3;`); 
                    }else{bloquesPequeños.setAttribute("style",`${format}grid-column: 2/2;grid-row: 2/2;`)};
                bloque.appendChild(bloquesPequeños);
                
            }
        }
        if (nombreBloque == "_"){
            let nu = (this.num-1)
            let bloque = document.createElement("div");
            bloque.setAttribute("style", `${bloqueGeneral} animation: b 1s reverse ${(timeAnimation++)-.5}s both`)
            bloque.classList.add("bloque-grande--")
            let colorRandom = nR();
            let format = `background: #${colores[colorRandom]};box-shadow: 0px 0px 15px #${colores[colorRandom]};margin: 1px;`

            emulationTetris.appendChild(bloque)
            for (let i = 1; i <= nu; i++){
                let bloquesPequeños = document.createElement("div");
                bloquesPequeños.classList.add("bloque--");
                    if (i<4){bloquesPequeños.setAttribute("style",`${format}grid-column: ${i}/${i};grid-row: 3/3;`); 
                    }else{bloquesPequeños.setAttribute("style",`${format}grid-column: 2/2;grid-row: 2/2;`)};
                bloque.appendChild(bloquesPequeños);
            }
        }
        if (nombreBloque == "o"){
            let bloque = document.createElement("div");
            bloque.setAttribute("style", `position: relative;display: grid;grid-template-columns: 100px 100px;grid-template-rows: 100px 100px;min-width: 200px;min-height: 200px;left: -50px; animation: b 1s reverse ${(timeAnimation++)-.5}s both;`)
            bloque.classList.add("bloque-grande-o")
            let colorRandom = nR();
            let format = `background: #${colores[colorRandom]};box-shadow: 0px 0px 15px #${colores[colorRandom]};margin: 1px;`

            emulationTetris.appendChild(bloque)
            for (let o = 1; o <= this.num; o++){
                let bloquesPequeños = document.createElement("div");
                bloquesPequeños.classList.add("bloque-o");
                    if (o==1){bloquesPequeños.setAttribute("style",`${format}grid-column: 2/2;grid-row: 1/1;`);}
                    else if(o==2){bloquesPequeños.setAttribute("style",`${format}grid-column: 1/1;grid-row: 1/1};`)}
                    else if(o==3){bloquesPequeños.setAttribute("style",`${format}grid-column: 1/1;grid-row: 1/1};`)}
                    else if(o==4){bloquesPequeños.setAttribute("style",`${format}grid-column: 2/2;grid-row: 2/2};`)}
                bloque.appendChild(bloquesPequeños);
            }
        }
        if (nombreBloque == "l"){
            let bloque = document.createElement("div");
            bloque.setAttribute("style", `position: relative;display: grid;grid-template-columns: 100px 100px;grid-template-rows: 100px 100px 100px;min-width: 200px;min-height: 300px;left: -50px; animation: b 1s reverse ${(timeAnimation++)-.5}s both;`)
            bloque.classList.add("bloque-grande-l")
            let colorRandom = nR();
            let format = `background: #${colores[colorRandom]};box-shadow: 0px 0px 15px #${colores[colorRandom]};margin: 1px;`

            emulationTetris.appendChild(bloque)
            for (let l = 1; l <= this.num; l++){
                let bloquesPequeños = document.createElement("div");
                bloquesPequeños.classList.add("bloque-l");
                    if (l==1){bloquesPequeños.setAttribute("style",`${format}grid-column: 1/1;grid-row: 1/1;`);}
                    else if(l==2){bloquesPequeños.setAttribute("style",`${format}grid-column: 1/1;grid-row: 1/1};`)}
                    else if(l==3){bloquesPequeños.setAttribute("style",`${format}grid-column: 1/1;grid-row: 1/1};`)}
                    else if(l==4){bloquesPequeños.setAttribute("style",`${format}grid-column: 2/2;grid-row: 2/2};`)}
                bloque.appendChild(bloquesPequeños);
            }
        }
        if (nombreBloque == "z"){
            let bloque = document.createElement("div");
            bloque.setAttribute("style", `position: relative;display: grid;grid-template-columns: 100px 100px 100px;grid-template-rows: 100px 100px ;min-width: 300px;min-height: 200px;left: -50px; animation: b 1s reverse ${(timeAnimation++)-.5}s both;`)
            bloque.classList.add("bloque-grande-z")
            let colorRandom = nR();
            let format = `background: #${colores[colorRandom]};box-shadow: 0px 0px 15px #${colores[colorRandom]};margin: 1px;`

            emulationTetris.appendChild(bloque)
            for (let z = 1; z <= this.num; z++){
                let bloquesPequeños = document.createElement("div");
                bloquesPequeños.classList.add("bloque-z");
                    if (z==1){bloquesPequeños.setAttribute("style",`${format}grid-column: 1/1;grid-row: 1/1;`);}
                    else if(z==2){bloquesPequeños.setAttribute("style",`${format}grid-column: 2/2;grid-row: 1/1};`)}
                    else if(z==3){bloquesPequeños.setAttribute("style",`${format}grid-column: 2/2;grid-row: 2/2};`)}
                    else if(z==4){bloquesPequeños.setAttribute("style",`${format}grid-column: 3/3;grid-row: 2/2};`)}
                bloque.appendChild(bloquesPequeños);
            }
        }
    }


}

let bt = ["t","l","o","_","t","l","o","_","t","l","o","_"]

blrandom = (numer) =>{
    block =  new crearBloques(4)
    for(let r = 0;r <= numer; r++){            
            let rt = Math.floor(Math.random()*bt.length)    

        block.crearBloque(bt[rt])
    }
}


    blrandom(10).crearBloque()
    if(screen.width > 1700){blrandom(10).crearBloque()}

}









