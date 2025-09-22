"use strict"
// 1) Saber o que fazer é mais importante

// setInterval(() => {
//     YIndex = YIndex + 1;
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     makeTeeweePiece(XIndex, YIndex)
// }, 0);

const canvas = document.getElementById("canvas");

canvas.width = 1000;
canvas.height = 1000;

// console.log(canvas)
const ctx = canvas.getContext("2d");

const colors = {
    backgroundColor: "",
    foregroundColor: "",
    cornerColor: ""
}

console.log(canvas.width)
console.log(canvas.height)

const indexesAmount = 10;
const width = canvas.width/indexesAmount;
const height = canvas.height/indexesAmount;


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

const TeeweeColor = {
    backgroundColor: "Black",
    foregroundColor: "#8751B5",
    cornerColor: "White"
}

let XIndex = 3;
let YIndex = 0;

const makeTeeweePiece = (XIndex, YIndex) => {
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

    // console.log(event);

    if (event.key == 'ArrowLeft') {
        console.log(`Esquerda: [XIndex: ${XIndex}][XIndex-1: ${XIndex - 1}][Pode mover? ${XIndex - 1 >= 0}]`);
        
        if (XIndex > 0) {
            XIndex = XIndex - 1;
        }
    }

    if (event.key == 'ArrowDown') {
        console.log(`Baixo: [YIndex: ${YIndex}][YIndex+1 ${YIndex+1}][Pode mover? ${YIndex < 8}]`);

        if (YIndex < indexesAmount-2) {
            YIndex = YIndex + 1;
        }
    }

    if (event.key == 'ArrowRight') {
        console.log(`Direita: [XIndex: ${XIndex}][XIndex-1: ${XIndex - 1}][Pode mover? ${XIndex + 2 < 8}]`);

        if (XIndex + 2 < indexesAmount-1) {
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
