const container = document.querySelector('.container');
const box = document.createElement('div');
const colorBox = document.createElement('button');


box.classList.add('box');
container.appendChild(box);

colorBox.classList.add('colorbox');
colorBox.classList.add('color-input');
container.appendChild(colorBox);

document.querySelector('.colorbox').setAttribute('data-huebee', '{ "notation": "hex", "saturations": 1 }');
// huebee plugin, lets you choose color & fills the colorbox with chosen color



for (i=0; i<1024; i++) {
    const smallBox = document.createElement('div');
    smallBox.classList.add('smallbox');
    box.appendChild(smallBox);
}
//static, 32x32 box generation. Need to add variable up to 64x64



function draw(e) {
    e.target.style.backgroundColor = 'black';
}

box.addEventListener('mousedown', (e) => {
    draw(e);

    box.onmousemove = (e) => {
        draw(e);
    };
});

box.addEventListener('mouseup', () => {
    box.onmousemove = null;
});

//draw works





/*
function clear(e) {
    e.target.style.backgroundColor = 'rgb(244, 248, 251)';
}

const smallBoxes = document.querySelectorAll('.smallBox');
const resetButton = document.getElementById('btn');
resetButton.addEventListener('click', () => {
    smallBoxes.forEach((smallBox) => {
        clear(smallBox);
    });
    console.log('click');
});

*/


//above doesn't work

