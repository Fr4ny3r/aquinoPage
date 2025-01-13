
window.addEventListener("DOMContentLoaded", ()=>{
let bPlay = document.querySelector(".b-play");
let bStop = document.querySelector(".b-stop");

bPlay.addEventListener("click",()=>{


    let cuadro = document.createElement("div")
    let cuadrot = document.createElement("canvas")
    let score = document.createElement("span")
    let cuadroS = document.createElement("div")
    let title = document.createElement("div")
    let bStop = document.createElement("button")
    let kp = document.createElement("span")
    title.textContent = "Tetris"
    bStop.textContent = "Salir"
    kp.textContent = "Tetris creado gracias a @midulive (es muy dificil :v)"
    cuadro.classList.add("cuadro")
    kp.classList.add("kp")
    cuadrot.classList.add("gameT")
    bStop.classList.add("b-stop")
    score.classList.add("score-tetris")
    title.classList.add("title-tetris")
    cuadroS.classList.add("shadow-cuadro")
    body.appendChild(cuadroS);
    body.appendChild(cuadro);
    cuadro.appendChild(cuadrot);
    cuadro.appendChild(score);
    cuadro.appendChild(title);
    cuadro.appendChild(kp);
    cuadro.appendChild(bStop);

    kp.addEventListener("click",()=>{window.open("https://www.youtube.com/@midulive")})





});

// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// let x = 10;
// let y = 10;

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillRect(x, y, 10, 10);
//     document.addEventListener('keydown', function(event) {
    
//         if (event.key === 'd') {x++}
//         if (event.key === 'a') {x=(x-.1);}
//         if (event.key === 'w') {y=(y-.1);}
//         if (event.key === 's') {y=(y+.1);}
    
//         // console.log('Has presionado la tecla:', event.key);
//     })
    
//     requestAnimationFrame(draw);
// }

// draw();


// // console.log(crypto.randomUUID())

bPlay.addEventListener("click",()=>{



const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const blockSize = 20
const boardWidth = 14
const boardHeight = 30

let score = 0;

canvas.width = blockSize * boardWidth
canvas.height = blockSize * boardHeight

ctx.scale(blockSize, blockSize);

const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


const pieza = {
    position: {x: Math.floor(boardWidth / 2-1), y: 0},
    forma: [
        [1,1],
        [1,1]
    ]
}

const piezas = [
    [
        [1, 1],
        [1, 1]
    ],
    [
        [1, 1, 1, 1]
    ],
    [
        [1],
        [1],
        [1],
        [1]
    ],
    [
        [0, 1, 0],
        [1, 1, 1]
    ],
    [
        [1, 1 ,0],
        [0, 1, 1]
    ],
    [
        [0, 1 ,1],
        [1, 1, 0]
    ],
    [
        [1, 0],
        [1, 0],
        [1, 1]
    ],
    [
        [1, 1],
        [0, 1]
    ],
    [
        [1, 1],
        [1, 0]
    ],
    [
        [0, 1],
        [0, 1],
        [1, 1]
    ]
]



// function update(){
//  draw()
// }

let dropCounter = 0;
let lastTime = 0;

function update(time = 0){
    const deltaTime = time - lastTime
    lastTime = time

    dropCounter += deltaTime

    if (dropCounter > 1000){
        pieza.position.y++
        dropCounter = 0;
        if(checkCollision()){
            pieza.position.y--
            solidPieza()
            removeRows()
        }
    }
    
 draw()
 window.requestAnimationFrame(update)
}

function draw(){
    
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    board.forEach((row, y) => {
        row.forEach((value, x)=>{
            if (value === 1){
                ctx.fillStyle = '#0f1'
                ctx.fillRect(x, y, 1, 1)
            }
        })

    pieza.forma.forEach((row,y)=>{
        row.forEach((value, x) => {
            if (value){
                ctx.fillStyle = '#20f'
                ctx.fillRect(x + pieza.position.x, y + pieza.position.y, 1, 1)
            }
        });
    })




    });

    document.querySelector(".score-tetris").innerHTML = `Score = ${score}`

}
document.addEventListener('keydown', event =>{
    if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
        pieza.position.x--
        if(checkCollision()){
            pieza.position.x++  
        }
    }
    if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D'){
        pieza.position.x++
        if(checkCollision()){
            pieza.position.x--
        }
    }
    if (event.key === 'ArrowDown' || event.key === 's' || event.key === 'S'){
        pieza.position.y++
        if(checkCollision()){
            pieza.position.y--
            solidPieza()
            removeRows()
        }
    }
    if (event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W'){
        const rotate = []

        for(let i = 0; i < pieza.forma[0].length; i++){
            const row = []

            for(let j = pieza.forma.length - 1; j >= 0; j--){
                row.push(pieza.forma[j][i])
            }

            rotate.push(row)
        }
        const formaPrevia = pieza.forma
        pieza.forma = rotate
        if (checkCollision()){
            pieza.forma = formaPrevia
        }
    }
})

function checkCollision (){
    return pieza.forma.find((row,y)=>{
        return row.find((value,x)=>{
            return(
                value != 0 &&
                board[y + pieza.position.y]?.[x + pieza.position.x] != 0

            )
        })

    })
}

function solidPieza(){
    pieza.forma.forEach((row,y)=>{
        row.forEach((value, x) => {
            if (value === 1){
                board[y + pieza.position.y][x + pieza.position.x] = 1
            }
        })});



    

    pieza.position.x = Math.floor(boardWidth / 2-1);
    pieza.position.y = 1;

    pieza.forma = piezas[Math.floor(Math.random()*piezas.length)]

    if (checkCollision()){
        alert("bruh..")
        score = 0;
        document.querySelector(".score-tetris").innerHTML = `Score = ${score}`
        board.forEach((row) => row.fill(0)) 
    }
}

function removeRows(){
    const rowsToRemove = [];

    board.forEach((row, y)=>{
        if (row.every(value => value ===1)){
            rowsToRemove.push(y)
        }
    })

    rowsToRemove.forEach(y => {
        board.splice(y, 1)
        const newRow = Array(boardWidth).fill(0)
        board.unshift(newRow)
        score += 10
    })


}

requestAnimationFrame(update)





let cuadro = document.querySelector(".cuadro")
let cuadroS = document.querySelector(".shadow-cuadro")
let cuadrot = document.querySelector('canvas')
let bStop = document.querySelector(".b-stop")
let p = true;



document.addEventListener('keydown', function(event) {
    

    if (event.key === 'Escape') {
        if(p === true){
        p = false

        let advertencia = document.createElement("div")
        let h1 = document.createElement("h1")
        let si = document.createElement("button")
        si.classList.add("btn-si")
        si.textContent = "si"
        let no = document.createElement("button")
        no.classList.add("btn-no")
        no.textContent = "no"
        h1.textContent = "¿Seguro que desea salir?"
        advertencia.classList.add("advertencia")
        cuadro.appendChild(advertencia)
        advertencia.appendChild(h1)
        advertencia.appendChild(si)
        advertencia.appendChild(no)
        si.addEventListener("click", ()=>{
            cuadro.remove()
            cuadroS.remove()
            cuadrot.remove()
            p = true
        })
        no.addEventListener("click", ()=>{
            advertencia.remove()
            si.remove()
            no.remove()
            p = true
        })
    }
}

    // console.log('Has presionado la tecla:', event.key);
})

bStop.addEventListener("click",()=>{

    cuadro.remove()
    cuadroS.remove()
    cuadrot.remove()
    p = true


});





});








// let x = canvas.width-160;
// let y = 0;
// let direction = "down";
// let i = 0;

// const bloques = ()=>({
//     x: x,
//     y: y,
//     w: 30,
//     h: 10,
//     color: `red`,
//     baja: direction,
//     move(){document.addEventListener('keydown', function(event) {
//         if (event.key === 's') {y=y+.2}
//         if (event.key === 'w') {y=y-.2}
//         if (event.key === 'd') {x=x+.2}
//         if (event.key === 'a') {x=x-.2}

//     });},
//     draw(){
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.x,this.y,this.w,this.h);


//         if(direction === "down"){
//             y = y+.3
//         }else{
//             y = y
//         }
//         if(y >= canvas.height-10){
//             direction = "stop"
//             i= i+1
//         }


        
        
//     }
    
// })

// bloques().draw()

// asd = ()=>{
    
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for(i = 0; i < 4; i++){
//         bloques().draw()
//     }
    
// function ld(){requestAnimationFrame(asd)}
// setTimeout(ld, 150)
// }
// setTimeout(asd, 3000)
}


