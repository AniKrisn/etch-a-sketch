const container = document.querySelector('.container');
const box = document.createElement('div');

box.classList.add('box');
container.appendChild(box);


for (i=0; i<256; i++) {
    const smallBox = document.createElement('div');
    smallBox.classList.add('smallbox');
    box.appendChild(smallBox);

}


let numberOfBoxes = 16;
const smallBoxHeight = 500/numberOfBoxes;
const smallBoxWidth = 500/numberOfBoxes;

console.log(smallBoxHeight)









