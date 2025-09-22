"use strict"

// setInterval(() => {
//     YIndex = YIndex + 1;
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     makeTeeweePiece(XIndex, YIndex)
// }, 0);

const canvas = document.getElementById("canvas");
canvas.width = 1000;
canvas.height = 1000;

console.log(canvas)
const ctx = canvas.getContext("2d");

// 1) Saber o que fazer é mais importante

const colors = {
    backgroundColor: "",
    foregroundColor: "",
    cornerColor: ""
}

const width = canvas.width/10;
const height = canvas.height/10;

const makeSquare = (XIndex, YIndex, colors) => {

    const positionX = width*XIndex;
    const positionY = height*YIndex;
    
    ctx.fillStyle = colors.backgroundColor;
    ctx.fillRect(positionX, positionY, width, height);

    ctx.fillStyle = colors.foregroundColor;
    ctx.fillRect(positionX+(width*0.1), positionY+(height*0.1), width*0.8, height*0.8);

    ctx.fillStyle = colors.cornerColor;
    ctx.fillRect(positionX, positionY, width*0.1, height*0.1);
}

// const HeroPieceColor = {
//     backgroundColor: "Black",
//     foregroundColor: "Cyan",
//     cornerColor: "White"
// }

// const makeHeroPiece = (XIndex, YIndex) => {
//     makeSquare(XIndex, YIndex, HeroPieceColor)
//     makeSquare(XIndex+1, YIndex, HeroPieceColor)
//     makeSquare(XIndex+2, YIndex, HeroPieceColor)
//     makeSquare(XIndex+3, YIndex, HeroPieceColor)
// }

// makeHeroPiece(0,0)

// const OrangeRickyColor = {
//     backgroundColor: "Black",
//     foregroundColor: "Orange",
//     cornerColor: "White"
// }

// const makeOrangeRicky = (XIndex, YIndex) => {
//     makeSquare(XIndex+2, YIndex, OrangeRickyColor)
//     makeSquare(XIndex, YIndex+1, OrangeRickyColor)
//     makeSquare(XIndex+1, YIndex+1, OrangeRickyColor)
//     makeSquare(XIndex+2, YIndex+1, OrangeRickyColor)
// }

// makeOrangeRicky(0,2)

// const BlueRickyColor = {
//     backgroundColor: "Black",
//     foregroundColor: "Blue",
//     cornerColor: "White"
// }

// const makeBlueRicky = (XIndex, YIndex) => {
//     makeSquare(XIndex, YIndex, BlueRickyColor)
//     makeSquare(XIndex, YIndex+1, BlueRickyColor)
//     makeSquare(XIndex+1, YIndex+1, BlueRickyColor)
//     makeSquare(XIndex+2, YIndex+1, BlueRickyColor)
// }

// const SmashBoyColor = {
//     backgroundColor: "Black",
//     foregroundColor: "Blue",
//     cornerColor: "White"
// }

// makeBlueRicky(0,5)

// const ClevelandZColor = {
//     backgroundColor: "Black",
//     foregroundColor: "Red",
//     cornerColor: "White"
// }

// const makeClevelandZ = (XIndex, YIndex) => {
//     makeSquare(XIndex, YIndex, ClevelandZColor)
//     makeSquare(XIndex+1, YIndex, ClevelandZColor)
//     makeSquare(XIndex+1, YIndex+1, ClevelandZColor)
//     makeSquare(XIndex+2, YIndex+1, ClevelandZColor)
// }

// makeClevelandZ(0,8)

const TeeweeColor = {
    backgroundColor: "Black",
    foregroundColor: "#8751B5",
    cornerColor: "White"
}

let XIndex = 3;
let YIndex = 0;

const makeTeeweePiece = (XIndex, YIndex) => {

    // if (boundaryLeft <= 0) {
    //     console.log("Atingiu a parede da esquerda")
    //     //cant_move_right
    // }
    // if (boundaryRight >= canvas.width) {
    //     //cant_move_left
    //     console.log("Atingiu a parede da direita")
    // }
    // if (boundaryBottom >= canvas.height) {
    //     //_stop
    //     //spawn_new_random_piece
    //     //cant_move_down
        
    //     console.log("Atingiu o solo")
    // }

    makeSquare(XIndex, YIndex+1, TeeweeColor)
    makeSquare(XIndex+1, YIndex, TeeweeColor)
    makeSquare(XIndex+1, YIndex+1, TeeweeColor)
    makeSquare(XIndex+2, YIndex+1, TeeweeColor)
}

makeTeeweePiece(XIndex, YIndex)

// makeSquare(9, 9, TeeweeColor)
//*
// Quote -> pensar no que fazer mas não pensar demais
// 1) O que fazer?
//   Mover peças
// 1.A) Encontrei algo?
//   Sim, encontrei a interface KeyboardEvent
// 1.B) É a melhor solução?
//  
// */

// (1 condição) -> (Peça no eixo Y >= canva) -> parar de mover a peça
//  YIndex >= canva.height -> do something

document.addEventListener("keydown", (event) => {
    
    const boundaryLeft = width*XIndex;
    const boundaryRight = width*(XIndex+3);
    const boundaryBottom = height*(YIndex+2);
        
    if (event.key == 'ArrowLeft') {
        console.log(`Esquerda: [XIndex: ${XIndex}][XIndex-1: ${XIndex - 1}][Pode mover? ${XIndex - 1 >= 0}]`);
        
        if ((XIndex + 1) < boundaryLeft) {
            XIndex = XIndex - 1;
        }
    }

    if (event.key == 'ArrowDown') {
        console.log(`Baixo: [YIndex: ${YIndex}][YIndex+1 ${YIndex+1}][Pode mover? ${YIndex < 8}]`);

        if (YIndex < 8) {
            YIndex = YIndex + 1;
        }
    }

    if (event.key == 'ArrowRight') {
        console.log(`Direita: [XIndex: ${XIndex}][XIndex-1: ${XIndex - 1}][Pode mover? ${XIndex + 2 < 8}]`);

        if (XIndex + 2 < 9) {
            XIndex = XIndex + 1;
        }
    }

    if (event.key == 'ArrowUp') {
        // console.log("Cima", event.key, event.code)
        YIndex = YIndex - 1;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    makeTeeweePiece(XIndex, YIndex)

})


// const movePieceRight = () => {}
// const movePieceLeft = () => {}
// const movePieceDown = () => {}
// const movePieceUp = () => {}



// store a key press in javascript

// const RhodeIslandZColor = {
//     backgroundColor: "Black",
//     foregroundColor: "Green",
//     cornerColor: "White"
// }

// const makeRhodeIslandZ = (XIndex, YIndex) => {
//     makeSquare(XIndex+2, YIndex, RhodeIslandZColor)
//     makeSquare(XIndex+1, YIndex, RhodeIslandZColor)
//     makeSquare(XIndex+1, YIndex+1, RhodeIslandZColor)
//     makeSquare(XIndex, YIndex+1, RhodeIslandZColor)
// }

// makeRhodeIslandZ(5, 3)

// const makeOrangeRicky = (3 x, -1 y) => {
//     blue
// }

// const square = [
//     [
//         { x: width*0, y: height*0 },
//         { x: width*1, y: height*0 },
//     ],
//     [
//         { x: width*0, y: height*1 },
//         { x: width*1, y: height*1 },
//     ],
// ]

// makeSquare(0,0, colors)
// makeSquare(200,0, colors)
// makeSquare(0,200, colors)
// makeSquare(200,200, colors)